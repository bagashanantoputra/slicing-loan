import { GoHome, GoPerson, GoPencil } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const DataMenus = [
    {
        id: 1,
        title: "Dashboard",
        imageSrc: <GoHome size={18}/>,
        link: "/",
    },
    {
        id: 2,
        title: "User Management",
        imageSrc: <GoPerson size={18}/>,
        link: "/user-management",
    },
    {
        id: 3,
        title: "News",
        imageSrc: <GoPencil size={18}/>,
        arrowUp: <MdKeyboardArrowUp className="ms-32" size={20}/>,
        arrowDown: <MdKeyboardArrowDown className="ms-32" size={20}/>,
        link: "/news",
    },
];
