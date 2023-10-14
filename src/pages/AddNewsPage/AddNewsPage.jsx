
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import AddNews from '../../components/News/AddNews'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'

const AddNewsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex xl:h-screen bg-gray-200">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <div className="flex-1 overflow-x-hidden">
            <Navbar toggleSidebar={toggleSidebar}/>
            <AddNews/>
            <Footer/>
            </div>
        </div>
    )
}

export default AddNewsPage