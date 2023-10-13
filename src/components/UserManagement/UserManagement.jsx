
import { AiOutlineUserAdd } from "react-icons/ai"
import SearchFilter from "../SearchFilter/SearchFilter";
import TableDatas from "../TableDatas/TableDatas";
import Pagination from "../Pagination/Pagination";

export default function UserManagement() {

    return (
        <div className="xl:h-screen mb-8" >
                <div className="flex justify-end text-start lg:mx-12 mt-3 mx-5">
                    <button className="flex items-center gap-2 bg-sky-950 px-3 my-2 py-1 rounded text-white"><AiOutlineUserAdd size={20}/>Add User</button>
                </div>

                <div className="lg:max-w-full md:max-w-full pb-5 lg:mx-12 mx-5 mt-3 pt-5 bg-white rounded-xl mb-8">
                    <SearchFilter/>
                    <TableDatas/>
                </div>

                <div className="lg:max-w-full md:max-w-full lg:mx-12 mx-5 mt-3 px-5 pt-3 pb-3 bg-white rounded-xl mb-8">
                    <Pagination/>
                </div>
                
        </div>
    )
}
