import { BiHome } from "react-icons/bi"
import { NavLink as A, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

const AdminSidebar = () => {
    const location = useLocation()

    return (
        <>
            <div className="sidebar">
                <div className="logo_container">
                    <img src={logo} alt="" />
                </div>
                <menu>
                    <ul>
                        <li>
                            <A className={location.pathname === "/admin" ? "active" : "base"} to="/admin"><BiHome /> Dashboard</A>
                        </li>
                        <li>
                            <A to="/admin/registered-users"><BiHome /> Registered users</A>
                        </li>

                        <li>
                            <A to="/admin/registered-companies"><BiHome /> Registered Companies</A>
                        </li>
                        <li>
                            <A to="/admin/team-members"><BiHome /> Team Members</A>
                        </li>
                        <li>
                            <A to="/admin/revenue"><BiHome /> Revenue</A>
                        </li>

                        <li>
                            <A to="/admin/settings"><BiHome /> Settings</A>
                        </li>

                    </ul>
                </menu>
            </div>
        </>
    );
};

export default AdminSidebar;
