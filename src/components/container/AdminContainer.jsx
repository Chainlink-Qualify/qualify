import { Outlet } from 'react-router-dom';
import AdminSidebar from '../sidebar/AdminSidebar';
import { ActionIcon, Avatar, Flex, Text } from '@mantine/core';
import { BiBell } from 'react-icons/bi';
const AdminContainer = () => {
    return (
        <>
            <div className="admin_container">
                <AdminSidebar />

                <div style={{ width: "100%" }} >
                    <div className="admin_topbar">
                        <Text>Welcome Teemah</Text>

                        <Flex gap={15}>
                            <ActionIcon>
                                <BiBell size={20} />
                            </ActionIcon>
                            <Avatar size={30} radius={30} />
                        </Flex>

                    </div>
                    <div className="admin_content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminContainer;
