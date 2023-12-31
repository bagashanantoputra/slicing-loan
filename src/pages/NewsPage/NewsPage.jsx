
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'

const NewsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    return (
        <div className="flex xl:h-screen bg-gray-200">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <div className="flex-1 overflow-x-hidden">
            <Navbar toggleSidebar={toggleSidebar}/>
            <News/>
            <Footer/>
            </div>
        </div>
    )
}

export default NewsPage