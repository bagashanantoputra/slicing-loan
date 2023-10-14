
import { AiOutlineUserAdd } from "react-icons/ai"
import SearchFilter from "../SearchFilter/SearchFilter";
import TableDatas from "../TableDatas/TableDatas";
import Pagination from "../Pagination/Pagination";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function UserManagement() {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null)
    return (
        <div className="xl:h-screen mb-8" >
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-3 pb-3 pt-5 sm:p-5 sm:pb-4">
                                    <div className="mt-2 mr-5 ml-5 flex justify-center">
                                        <form className="w-full">
                                            <span className="text-lg font-bold flex justify-center mb-3">Add User</span>
                                            <div className="">
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Name</label>
                                                </div>
                                                <div>
                                                    <input type="text" id="names" autoComplete="off" name="names" className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-3" placeholder="Example. John Doe"/>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Category</label>
                                                </div>
                                                <div className="relative">
                                                    <select className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-3">
                                                        <option value={1}>Advisor</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Office</label>
                                                </div>
                                                <div className="relative">
                                                    <select className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-3">
                                                        <option value={1}>Advisor</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Phone</label>
                                                </div>
                                                <div className="">
                                                    <input type="text" id="id_number" autoComplete="off" name="id_number" className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-3" placeholder="Phone Number"/>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Email</label>
                                                </div>
                                                <div className="">
                                                    <input type="email" id="id_email" autoComplete="off" name="id_email" className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-3" placeholder="Example. JhonDoe@mail.com"/>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="text-sm text-gray-600">Status</label>
                                                </div>
                                                <div className="relative">
                                                    <select className="block appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md w-full py-2 px-4 pr-8 mb-5">
                                                        <option value={1}>Active</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 mb-4 px-4 pb-4 sm:flex sm:px-6 justify-center">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded bg-white px-12 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto mb-2"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded bg-cyan-400 px-12 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500 sm:ml-3 sm:w-auto"
                                            
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                            </Transition.Child>
                        </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="flex justify-end text-start lg:mx-12 mt-3 mx-5">
                    <button onClick={() => setOpen(true)} className="flex items-center gap-2 bg-sky-950 px-3 my-2 py-1 rounded text-white"><AiOutlineUserAdd size={20}/>Add User</button>
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
