import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";

const AuthContainer = () => {
    return (
        <>
            <div className="auth_container">
            <img src={logo} alt="" />
                <div className="form_container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AuthContainer;
