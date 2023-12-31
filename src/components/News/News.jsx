import SearchFilter from '../SearchFilter/SearchFilter'
import Pagination from '../Pagination/Pagination'
import TableDataNews from '../TableDatas/TableDataNews'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div className="xl:h-screen mb-8" >
                <div className="flex justify-end text-start lg:mx-12 mt-3 mx-5">
                    <Link to="/add-news" className="flex items-center gap-2 bg-sky-950 px-3 my-2 py-1 rounded text-white">+ Create News</Link>
                </div>

                <div className="lg:max-w-full md:max-w-full pb-5 lg:mx-12 mx-5 mt-3 pt-5 bg-white rounded-xl mb-8">
                    <SearchFilter/>
                    <TableDataNews/>
                </div>

                <div className="lg:max-w-full md:max-w-full lg:mx-12 mx-5 mt-3 px-5 pt-3 pb-3 bg-white rounded-xl mb-8">
                    <Pagination/>
                </div>
                
        </div>
    )
}

export default News