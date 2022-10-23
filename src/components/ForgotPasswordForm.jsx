import React, {useState } from "react";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, resetPasswordAkun } from "../authentication/firebase";

const ForgotPasswordForm = () =>
{
    const [user, isLoading, error] = useAuthState(auth);

    const [credential, setCredential] = useState({
        email: ""
    });

    const emailInputOnChangeHandler = (event) =>
    {
        setCredential({
            ...credential,
            email: event.target.value
        })
    };

    const resetPasswordOnClickHandler = (event) =>
    {
        resetPasswordAkun(credential.email);
    };

    return(
        <div>
            <div>
                <h1 className="login text-white text-3xl mb-7 text-center">Reset your password here!</h1>
            </div>
            <form>
                <div className="space-y-5">
                    <div>
                    <input className="rounded-lg text-2xl text-white border w-50 pl-5 pr-16 py-4 login" type="email" placeholder="EMAIL" onChange={emailInputOnChangeHandler} style={{ 
                        background: 'rgba(234, 234, 234, 0.07)'
                    }} />
                    </div>
                </div>
                <button type="submit" onClick={resetPasswordOnClickHandler} className="w-full bg-[#E50913] rounded-lg login mt-10 px-21 py-4 text-2xl text-white">
                    Send Email Verification
                </button>
                <Link to="/Login/SignIn"  className="text-white mt-1 block text-center">
                    Back to Sign In?
                </Link>
            </form>
        </div>
    );
}

export default ForgotPasswordForm;