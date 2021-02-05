import React, { useState } from "react"
import { useAuth } from "../context/Auth"
export default () => {
    const [ image, setImage] = useState(null)

    const { onLogin, loginError, onDeleteAccount, getUserData, createPost, getPosts, uploadFile } = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }


    const onSubmitLogin = () => {
        onLogin(email, password)
    }
    const onFile = (event) => {
        const file = event.target.files[0]
        setImage(file);
        console.log(file)
    }
    return (
        <div>
            <label>Email : 📧 </label> <br /> <br />
            <input type="email" onChange={onEmailChange} value={email} /><br /> <br />

            <label>Password : </label><br /> <br />
            <input type="email" onChange={onPasswordChange} value={password} /><br /> <br />

            <button onClick={onSubmitLogin}>Login</button>
            <button onClick={onDeleteAccount}>Delete Account</button>
            <button onClick={getUserData}>get Data</button>
            <button onClick={createPost}>createPost</button>
            <button onClick={getPosts}>getPosts</button>

            <input type="file" onChange={onFile} />
            <button onClick={() => uploadFile(image)}>Upload</button>

            <h5>{loginError}</h5>
        </div>
    )
}