import { RiShutDownLine } from "react-icons/ri";
import { PiListBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
    const location = useLocation();
    const path = location.pathname;

    const getLinkText = () => {
        switch (path) {
            case "/user":
                return " / User Management";
            case "/news":
                return " / News";
            default:
                return " / Dashboard";
        }
    }

    return (
        <div className="flex items-center w-full bg-white py-3 lg:px-4 px-3">
            <div className="flex items-center text-sky-900 text-lg font-bold max-w-8xl ms-2 mx-auto">
                <button onClick={toggleSidebar} className="bg-sky-950 hover-bg-sky-900 text-white font-bold py-1 px-2 rounded lg:me-4 me-2">
                    <PiListBold />
                </button>
                <span>Loan Market
                    <span className="text-base font-semibold">{getLinkText()}</span>
                </span>
            </div>
            <button className="flex items-center gap-2 font-BASE px-3 py-1 rounded-md hover-bg-gray-200 "><RiShutDownLine /> Log out</button>
        </div>
    )
}
