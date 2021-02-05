import { createContext, useContext, useState } from "react";
import firebase from "firebase"
import { auth, database, storage } from "../config/firebaseConfig"
export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loginError, setLoginError] = useState(null)
    const [signupError, setSignupError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const onSignup = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                const userData = {
                    email,
                    uid: res.user.uid,
                    firstName: "Mohammad",
                    lastName: "Arsalan",
                }

                database.ref("/userData").child(res.user.uid).set(userData)
                console.log(res)

            })
            .catch((error) => {
                console.log(error)
                setSignupError(error.message)

            })
    }
    const onLogin = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(auth.currentUser)
                setIsLoggedIn(true)
                // auth.currentUser.updateProfile({
                //     displayName: "Jane Q. User",
                //     photoURL: "https://example.com/jane-q-user/profile.jpg"
                //   }).then(function() {
                //     // Update successful.
                //   }).catch(function(error) {
                //     // An error happened.
                //   });
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error)
            })
    }

    const onDeleteAccount = () => {
        auth.currentUser.delete().then(() => {
            console.log('Success')
        })
            .catch((e) => {
                console.log(e)
            })
    }

    const getUserData = () => {
        database.ref("/userData").child(auth.currentUser.uid).once("value")
            .then((res) => {
                console.log(res)
            })
    }

    const getPosts = () => {
        database.ref("/posts").child(auth.currentUser.uid).once("value")
            .then((res) => {
                console.log(res.val())
            })
    }

    const createPost = () => {
        database.ref("/posts").child(auth.currentUser.uid)
            .push({
                title: "Post 1",
                product: "mobile"
            })
    }

    const uploadFile = (file) => {
        const uploadTask = storage.ref("/images").child(file.name).put(file)

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            }
        );
    }
return (
    <AuthContext.Provider
        value={{
            onSignup,
            onLogin,
            loginError,
            signupError,
            onDeleteAccount,
            getUserData,
            createPost,
            getPosts,
            uploadFile
        }}
    >
        {children}
    </AuthContext.Provider>
)
}