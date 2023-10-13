import { Link, useLocation } from 'react-router-dom';
import { DataMenus } from './DataSidebar'
import { MdCancel } from "react-icons/md";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const isMobile = window.innerWidth <= 768;
    const sidebarClass = isMobile ? isOpen ? "w-screen" : "hidden lg:w-20" : !isMobile ? !isOpen ? "lg:w-72" : "lg:w-20" : "" ;
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="flex bg-gray-200">
            {/* Sidebar */}
            <div className={` bg-sky-950 shadow-lg ${sidebarClass}`}>
                <div className='flex justify-between'>
                    <img
                        className={`w-16 md:mx-2 lg:mx-2 me-8 mt-8 mb-4 ${!isOpen && !isMobile ? 'w-10 ms-2 mt-4 mb-16 lg:mx-7' : ''} ${isOpen && isMobile ? 'w-10 mx-8 mt-4 mb-16 md:mx-8' : ''}`}
                        src="https://www.loanmarket.co.id/assets/img/lm-logo.png"
                        alt="Akulogi"
                    />
                    {isMobile && (
                        <button onClick={toggleSidebar} className=" hover:bg-sky-900 text-white font-bold px-3 rounded lg:me-4 me-4">
                            <MdCancel size={28}/>
                        </button>
                    )}
                </div>
                <nav>
                    {(isMobile || !isOpen) && (
                        <div>
                            <p className="flex text-white text-sm mx-8 my-1">Yoseph Duna</p>
                            <p className="flex text-gray-400 text-sm mx-8 mb-4">Author</p>
                        </div>
                    )} 
                    {DataMenus.map((item) => (
                        <Link to={item.link}
                            key={item.id}
                            className="w-full my-3 flex py-2 no-underline text-white hover:bg-black"
                            href={item.href}
                        >
                            <span className='flex align-items-center gap-2 mx-4 px-4'>{item.imageSrc} {isOpen && !isMobile ? '' : item.title}</span>
                        </Link>
                    ))}
                </nav>
                {(isMobile || !isOpen) && (currentPath === "/") && (
                <div className='bg-yellow-100 w-auto p-4 mx-8 my-10'>
                    <span className="font-semibold">Note: </span>
                    <p className="text-xs text-justify">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.</p>
                </div>
                )} 
                {(isMobile || !isOpen) && (currentPath === "/") && (
                <div className='bg-yellow-100 w-auto p-4 mx-8'>
                    <span className="font-semibold">Note: </span>
                    <p className="text-xs text-justify">So I started to walk into the water. I won't lie to you boys, I was terrified.</p>
                </div>
                )} 
            </div>
        </div>
    );
}
