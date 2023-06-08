import { BiHome } from "react-icons/bi"
import { NavLink as A } from 'react-router-dom';
const AdminSidebar = () => {
    return (
        <>
            <div className="sidebar">
                <menu>
                    <ul>
                        <li>
                            <A to="/admin"><BiHome /> Dashboard</A>
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
