import React, {useState } from "react";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, registrasiDenganEmaildanPassword } from "../authentication/firebase";


const SignUpForm = () =>
{
    const [user, isLoading, error] = useAuthState(auth);

    const [credential, setCredential] = useState({
        email: "",
        password: ""
    });

    const emailInputOnChangeHandler = (event) =>
    {
        setCredential({
            ...credential,
            email: event.target.value
        })
    };

    const passwordInputOnChangeHandler = (event) =>
    {
        setCredential({
            ...credential,
            password: event.target.value
        })
    };

    const signUpOnClickHandler = (event) =>
    {
        registrasiDenganEmaildanPassword(credential.email, credential.password);
    };

    return(
        <div>
            <form>
            <div className="space-y-5">
                <div>
                <input className="rounded-lg text-2xl text-white border w-50 pl-5 pr-16 py-4 login" type="email" placeholder="EMAIL" onChange={emailInputOnChangeHandler} style={{ 
                    background: 'rgba(234, 234, 234, 0.07)'
                }} />
                </div>
                <div>
                <input className="rounded-lg w-50 text-white text-2xl border pl-5 pr-16 py-4 login" type="password" placeholder="PASSWORD" onChange={passwordInputOnChangeHandler} style={{ 
                    background: 'rgba(234, 234, 234, 0.07)'}} />
                </div>
            </div>
            <button type="submit" onClick={signUpOnClickHandler} className="w-full bg-[#E50913] rounded-lg login mt-10 px-21 py-4 text-2xl text-white">
                SIGN UP
            </button>
            <Link to="/Login/SignIn"  className="text-white mt-1 block text-center">
                Already Sign Up? Sign In Here!
            </Link>
            </form>
        </div>
    );
}

export default SignUpForm;