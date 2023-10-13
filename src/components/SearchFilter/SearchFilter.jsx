import { TbFilter } from "react-icons/tb"

const SearchFilter = () => {
    return (
        <div className="m-3 lg:mx-12 mx-5">
            <div className="p-3 rounded-md bg-gray-200">
                <form className="flex items-center">   
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                        </div>
                        <input type="text" className="bg-gray-50 border rounded border-gray-600 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Keyword" required=""/>
                    </div>
                    <button type="submit" className="inline-flex items-center py-1.5 px-3 ml-2 text-sm rounded text-gray-900 bg-white border border-gray-900 hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none">
                        <TbFilter className="me-1" size={16}/>Filter
                    </button>
                </form>
            </div>
        </div>
    )
}
export default SearchFilter
