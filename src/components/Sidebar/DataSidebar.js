import { GoHome, GoPerson, GoPencil } from "react-icons/go";

export const DataMenus = [
    {
        id: 1,
        title: "Dashboard",
        imageSrc: <GoHome size={20}/>,
        link: "/",
    },
    {
        id: 2,
        title: "User Management",
        imageSrc: <GoPerson size={20}/>,
        link: "/user",
    },
    {
        id: 3,
        title: "News",
        imageSrc: <GoPencil size={20}/>,
        link: "/news",
    },
];
