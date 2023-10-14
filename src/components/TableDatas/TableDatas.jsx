import { DataTabList, DataUser } from "./DataUser";
import { Tab, TabGroup, TabList } from "@tremor/react";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const TableDatas = () => {
    const [selectedTab, setSelectedTab] = useState('Costumer');
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null)

    const filteredData = DataUser.filter(item => {
        return selectedTab === '' || item.role === selectedTab;
    });
    return (
        <>
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
                                                                            <span className="text-lg font-bold flex justify-center mb-3">Edit Data</span>
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
                                                                            className="mt-3 inline-flex w-full justify-center rounded bg-white px-12 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto lg:mb-0 mb-5"
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
        <TabGroup>
            <TabList className="flex lg:mx-12 mx-5 mb-5">
                {DataTabList.map((item) => (
                    <Tab key={item.id} onClick={() => setSelectedTab(item.role)}>{item.name}</Tab>
                ))}
            </TabList>
        </TabGroup>
        <div className="w-full lg:px-12 mb-8 mx-auto px-5 rounded-lg">
            <div className="w-full lg:overflow-x-hidden overflow-x-scroll">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-sky-950 text-white text-sm leading-normal tracking-wide">
                                <th className="py-3 px-6 text-left">No.</th>
                                <th className="py-3 px-6 pe-16 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Phone</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {filteredData.map((item, index) =>(
                                    <tr key={item.id} className={item.color}>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span className="font-medium">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.role}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.phone}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.email}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-left">
                                            <div className="flex item-center">
                                                <button onClick={() => setOpen(true)} className="px-3 ml-2 text-sm rounded text-gray-900 bg-white  border border-gray-900 hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none">
                                                    Edit
                                                </button>
                                                <button type="submit" className="px-3 ml-2 text-sm rounded text-white bg-red-500 hover:bg-red-300 hover:text-white focus:ring-4 focus:outline-none">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TableDatas