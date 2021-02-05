import React, { useState } from "react"
import { useAuth } from "../context/Auth"
export default () => {
    const { onSignup, signupError } = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }


    const onSubmitSignup = () => {
        onSignup(email, password)
    }

    return (
        <div>
            <h3>Sign up</h3>
            <label>Email : 📧 </label> <br /> <br />
            <input type="email" onChange={onEmailChange} value={email} /><br /> <br />

            <label>Password : </label><br /> <br />
            <input type="email" onChange={onPasswordChange} value={password} /><br /> <br />

            <button onClick={onSubmitSignup}>Sign up</button>

            <h5>{signupError}</h5>
        </div>
    )
}