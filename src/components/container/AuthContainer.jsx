import { Outlet } from "react-router-dom";

const AuthContainer = () => {
    return (
        <>
            <div className="auth_container">
                <div className="form_container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AuthContainer;
