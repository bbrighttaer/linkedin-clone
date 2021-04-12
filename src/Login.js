import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './app/userSlice';
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    }

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    });
            }).catch(error => alert(error));

    }
    return (
        <div className="login">
            <img src="img/linkedin_logo.png" alt="linkedin logo" />

            <form action="">
                <input placeholder="Full name (required if registering)"
                    type="text" value={name} onChange={e => setName(e.target.value)} />

                <input placeholder="Profile pic URL (optional)" type="text"
                    value={profilePic} onChange={e => setProfilePic(e.target.value)} />

                <input placeholder="Email" type="text"
                    value={email} onChange={e => setEmail(e.target.value)} />

                <input placeholder="Password" type="password"
                    name={password} onChange={e => setPassword(e.target.value)} />

                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member? {"\t"}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
