import { Outlet } from 'react-router-dom';
import AdminSidebar from '../sidebar/AdminSidebar';
const AdminContainer = () => {
    return (
        <>
            <div className="admin_container">
                <AdminSidebar />
              
                <div className="content">
                    <div className="topbar">
                        <div>
                            
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminContainer;
