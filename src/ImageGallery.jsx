import React from 'react';

// class GithubUser extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             user: null
//         }
//     }

//     componentDidMount() {
//         const url = 'https://api.github.com/users/MohammadArsalan'
//         fetch(url)
//             .then((res) => res.json())
//             .then((res) => {
//                 this.setState({
//                     user: res
//                 })
//             })
//             .catch((error) => console.log(error))


//     }
//     componentDidUpdate() { }
//     componentWillUnmount() { }
//     render() {
//         console.log(this.state.user)
//         return (
//             <div>
//                 <h1>Image Gallery</h1>
//                 {this.state.user ? <h2>Login Name: { this.state.user.login}</h2>: <div />}
//             </div>
//         )
//     }
// }

function GithubUser(props) {

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const url = `https://api.github.com/users/${props.userName}`
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setUser(res);
            })
            .catch((error) => console.log(error))
    }, [props.userName]) //
    return (
        <div>
            <h1>Git User </h1>
            {user ? <h2>Login Name: {user.login}</h2> : <div />}
        </div>
    )
}
export default GithubUser;