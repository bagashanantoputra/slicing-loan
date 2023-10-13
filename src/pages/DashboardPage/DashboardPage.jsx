import Dashboard from '../../components/Dashboard/Dashboard'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'

const DashboardPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    return (
        <div className="flex lg:h-screen bg-gray-200">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <div className="flex-auto lg:h-screen overflow-x-hidden">
            <Navbar toggleSidebar={toggleSidebar}/>
            <Dashboard/>
            <Footer/>
            </div>
        </div>
    )
}

export default DashboardPage