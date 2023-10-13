import { BiImageAdd } from "react-icons/bi";
import TextEditor from "../TextEditor/TextEditor";
import MultipleTag from "../MultipleTag/MultipleTag";

const AddNews = () => {
    return (
        <div className="xl:h-screen">
            <div className="lg:max-w-full md:max-w-full pb-5 lg:mx-4 mx-5 mt-5 mb-5 pt-5 bg-white rounded-xl">
                <div className="flex justify-start text-start lg:mx-12 mx-5">
                    <span className="my-2 mb-3 py-1 text-sky-800 text-xl font-black">Add News or Article</span>
                </div>
                <div className="lg:px-12 px-5">
                    <form className="w-full">
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Category
                            </label>
                            <div className="relative">
                                <select className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8">
                                    <option value={1}>Choose a category</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full py-2 px-4 pr-8 placeholder:italic placeholder:text-slate-400" placeholder="Write the title of the news" />
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Meta Title</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full py-2 px-4 pr-8 placeholder:italic placeholder:text-slate-400" placeholder="Write the meta title of the news" />
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Meta Desc</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full py-2 px-4 pr-8 placeholder:italic placeholder:text-slate-400" placeholder="Write the description of the news" />
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Slug</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full py-2 px-4 pr-8 placeholder:italic placeholder:text-slate-400" placeholder="Write the slug of the content URL" />
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Intro</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full py-2 px-4 pr-8 placeholder:italic placeholder:text-slate-400" placeholder="Write the intro to attract readers" />
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Cover Image</label>
                            <div className="bg-gray-100 p-4 text-center rounded-md sm:w-1/4 lg:w-1/5 w-full border border-gray-300 hover:border-blue-500">
                                <label className="cursor-pointer flex flex-col items-center space-y-2">
                                <div className="text-gray-500">
                                    <BiImageAdd size={80} />
                                </div>
                                <span className="text-gray-400 text-xs italic">Tambahkan Gambar</span>
                                </label>
                                <input type="file" id="fileInput" className="hidden" multiple />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Content</label>
                            <TextEditor/>
                        </div>
                        <div className="mb-5">
                            <label className="text-sm font-medium text-gray-900 block mb-2">Tag</label>
                            <MultipleTag/>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className=" lg:w-1/2">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Post Schedule</label>
                                <input type="date" id="fileInput" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block py-2 px-4 pr-8 w-full"/>
                            </div>
                            <div className="mb-5 lg:w-1/2">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Post Schedule</label>
                                <select className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8">
                                    <option value={1}>Start day</option>
                                    <option value={2}>Start day</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5 mt-5 flex justify-end gap-5">
                            <button type="submit" className="text-blue-500 bg-white border border-blue-500 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center lg:w-1/5">Save as Draft</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center lg:w-1/5">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default AddNews