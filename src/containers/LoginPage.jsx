import Image from "../img/ProfilePicture.jpg";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { useParams } from "react-router-dom";

export default function LoginPage() 
{
let params = useParams();

    return (
    <div className="grid md:grid-cols-12 content-center" style={{ 
      background: 'linear-gradient(270.09deg, #000000 50%, rgba(217, 217, 217, 0) 65%)'
     }}>
      <div className="col-span-6" style={{
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundSize: '100% 100vh',
        backgroundRepeat: 'no-repeat',
        zIndex: '-2'
      }}>
      </div>
      <div className="col-span-6 place-self-center">
       {params.loginelement === 'SignUp' ? <SignUpForm /> : params.loginelement === 'ForgotPassword' ? <ForgotPasswordForm /> : params.loginelement === "SignIn" ? <SignInForm /> : "" }
      </div>
    </div>
    );
}  