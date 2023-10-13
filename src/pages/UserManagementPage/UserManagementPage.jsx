
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
import UserManagement from '../../components/UserManagement/UserManagement'

const UserManagementPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    return (
        <div className="flex xl:h-screen bg-gray-200">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <div className="flex-1 xl:h-screen overflow-x-auto">
            <Navbar toggleSidebar={toggleSidebar}/>
            <UserManagement/>
            <Footer/>
            </div>
        </div>
    )
}

export default UserManagementPage