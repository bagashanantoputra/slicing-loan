
import { TbArrowNarrowLeft, TbArrowNarrowRight  } from "react-icons/tb"

const Pagination = () => {
    return (
        <div className="flex items-center justify-between bg-white  sm:px-6">
            <div className="flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    <span className="lg:text-sm text-xs">1</span> - <span className="lg:text-sm text-xs">10</span> of{' '}
                    <span className="lg:text-sm text-xs">97</span>
                </p>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-xs mx-1">The page you're on </label>
                    <select className="form-select text-sm border rounded border-gray-600 px-2 py-0.5 me-1">
                        <option className="border" value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <div className="flex item-center border-s-2 border-gray-500">
                        <button type="submit" className="ms-3 px-2 py-1 border rounded border-gray-600 hover:bg-gray-600 hover:text-white"><TbArrowNarrowLeft/></button>
                        <button type="submit" className="ms-3 px-2 py-1 border rounded border-gray-600 hover:bg-gray-600 hover:text-white"><TbArrowNarrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination