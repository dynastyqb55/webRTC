import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "../../shared/components/LoginHeader";
import LoginPageForm from "../../shared/components/LoginPageInputs";


const Login = () => {
    return (
        <AuthBox> 
            <LoginPageHeader/>
            <LoginPageForm/>
        </AuthBox>
)}



export default Login;