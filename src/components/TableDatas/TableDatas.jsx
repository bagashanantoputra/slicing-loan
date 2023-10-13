import { useState } from "react";
import { DataTabList, DataUser } from "./DataUser";
import { Tab, TabGroup, TabList } from "@tremor/react";


const TableDatas = () => {
    const [selectedTab, setSelectedTab] = useState('Costumer');

    const filteredData = DataUser.filter(item => {
        return selectedTab === '' || item.role === selectedTab;
    });
    return (
        <>
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
                                                <button type="submit" className="px-3 ml-2 text-sm rounded text-gray-900 bg-white  border border-gray-900 hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none">
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