import { useState } from "react";
import { DataNews, DataTabListNews } from "./DataUser";
import { Tab, TabGroup, TabList } from "@tremor/react";

const TableDataNews = () => {
    const [selectedTab, setSelectedTab] = useState('News');

    const filteredData = DataNews.filter(item => {
        return selectedTab === '' || item.for === selectedTab;
    });
    return (
        <>
        <TabGroup>
            <TabList className="flex lg:mx-12 mx-5 mb-5">
                {DataTabListNews.map((item) => (
                    <Tab key={item.id} onClick={() => setSelectedTab(item.for)}>{item.name}</Tab>
                ))}
            </TabList>
        </TabGroup>
        <div className="w-full lg:px-12 mb-8 mx-auto px-5 rounded-lg">
            <div className="w-full lg:overflow-x-hidden overflow-x-scroll">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-sky-950 text-white text-sm leading-normal tracking-wide">
                                <th className="py-3 px-6 text-left">No.</th>
                                <th className="py-3 px-6 pe-16 text-left">Type</th>
                                <th className="py-3 px-6 text-left">Title</th>
                                <th className="py-3 px-6 text-left">Publish</th>
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
                                                <span>{item.type}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.datePublish}</span>
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

export default TableDataNews