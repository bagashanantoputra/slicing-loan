import { ChartData, ChartDataCostumer, DataDashboardLeft, DataDashboardRight1, DataDashboardRight2, DataDashboardRight3, PercentageData, PercentageDataCostumer } from "./DataDashboard";
import { Card, Divider, Flex, Metric, ProgressBar, Text } from "@tremor/react";
import { BsArrowRightShort } from "react-icons/bs"

export default function Dashboard() {
    return (
        <div className="lg:h-screen mb-8">
                <div className="flex justify-between text-start lg:mx-12 mx-5 mt-5">
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold text-sky-900">Dashboard</span>
                        <span className="text-sm text-gray-600">User Quantity</span>
                    </div>
                    <button className="flex items-center gap-2 bg-sky-950 px-3 my-2 rounded text-white">Go to CRM<BsArrowRightShort size={24}/></button>
                </div>
                
                <div className="lg:max-w-full md:max-w-full lg:flex lg:mx-12 mx-5 mt-5 lg:gap-6">
                    {DataDashboardLeft.map((item) => (
                        <div key={item.id} className="lg:inline-block md:inline-block text-gray-700 text-center bg-white rounded-xl mb-5  w-full sm:w-full md:w-full lg:w-1/4 xl:w-48">
                            <div className="flex justify-center">
                                <div className="bg-sky-950 text-white font-bold py-2 px-3 mt-5 lg:mt-12 rounded-md">
                                    <div>{item.icon}</div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:mt-7 mt-5 mb-5">
                                <span className="text-xl font-bold">{item.userCount}</span>
                                <span className="text-sm">{item.name}</span>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-6 mb-5 w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/6">
                    {DataDashboardRight1.map((item) => (
                        <div key={item.id} className=" text-gray-700 bg-white rounded-xl p-2">
                            <div className="flex gap-4 justify-between">
                                <div className="bg-yellow-950 text-white font-bold p-2 rounded-lg flex items-center">
                                    <div>{item.icon}</div>
                                </div>
                                <div className="flex-col">
                                    <span className="flex justify-end text-xs">{item.name}</span>
                                    <span className="flex justify-end font-bold">{item.userCount}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-col gap-6 mb-5 w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/6">
                    {DataDashboardRight2.map((item) => (
                        <div key={item.id} className=" text-gray-700 text-center bg-white rounded-xl p-2">
                            <div className="flex gap-4 justify-between">
                                <div className="bg-yellow-950 text-white font-bold p-2 rounded-lg flex items-center">
                                    <div>{item.icon}</div>
                                </div>
                                <div className="flex-col">
                                    <span className="flex justify-end text-xs">{item.name}</span>
                                    <span className="flex justify-end font-bold">{item.userCount}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-col gap-6 mb-5 w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/6">
                    {DataDashboardRight3.map((item) => (
                        <div key={item.id} className=" text-gray-700 text-center bg-white rounded-xl p-2">
                            <div className="flex gap-4 justify-between">
                                <div className="bg-yellow-950 text-white font-bold p-2 rounded-lg flex items-center">
                                    <div>{item.icon}</div>
                                </div>
                                <div className="flex-col">
                                    <span className="flex justify-end text-xs">{item.name}</span>
                                    <span className="flex justify-end font-bold">{item.userCount}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="flex flex-col text-start lg:mx-12 mx-5 mt-5">
                    <span className="text-xl font-semibold text-sky-900">Data & Analytics</span>
                    <span className="text-sm text-gray-600">Show updates of loan</span>
                </div>

                <div className="lg:max-w-full md:max-w-full pb-5 lg:mx-12 mx-5 mt-5 px-5 pt-5 bg-white rounded-xl mb-8">
                    <div className="mt-5 mx-5">
                        <div className="lg:flex gap-8">
                            <div className="flex-row lg:w-1/2">
                                <div className="lg:flex">
                                    {ChartDataCostumer.map((item) => (
                                    <Card key={item.id} className="ring-0 ring-transparent shadow-transparent py-0 px-5" decoration="left" decorationColor={item.color}>
                                        <div className="flex justify-between items-center lg:mb-0 mb-5">
                                            <div>
                                                <Text className="text-xs">{item.name}</Text>
                                                <Metric className="mt-2 text-xl">{item.countData}</Metric>
                                            </div>
                                            <div>
                                                <svg className="ps-8 lg:pe-10" width="190" height="70">
                                                    <path d="M0 40 Q25 25, 50 50 T100 50 T150 50 T200 10" stroke={item.color} fill="none"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </Card>
                                    ))}
                                </div>
                                <Divider/>
                                {PercentageData.map((item) => (
                                <div key={item.id} className="my-7 flex-row">
                                    <Flex>
                                        <Text>{item.name}</Text>
                                        <Text>{item.percentage}</Text>
                                    </Flex>
                                    <ProgressBar value={43} color={item.color} className="mt-3" />
                                </div>
                                ))}
                            </div>
                            
                            <div className="flex-row lg:w-1/2">
                                <div className="flex w-64">
                                    {ChartData.map((item) => (
                                    <Card key={item.id} className="mx-auto ring-0 ring-transparent shadow-transparent py-0 px-5" decoration="left" decorationColor={item.color}>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <Text className="text-xs">{item.name}</Text>
                                                <Metric className="mt-2 text-xl">{item.countData}</Metric>
                                            </div>
                                            <div>
                                                <svg className="ps-8 lg:pe-10" width="190" height="70">
                                                    <path d="M0 40 Q25 25, 50 50 T100 50 T150 50 T200 10" stroke={item.color} fill="none"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </Card>
                                    ))}
                                </div>
                                <Divider/>
                                {PercentageDataCostumer.map((item) => (
                                <div key={item.id} className="my-7 flex-row">
                                    <Flex>
                                        <Text>{item.name}</Text>
                                        <Text>{item.percentage}</Text>
                                    </Flex>
                                    <ProgressBar value={43} color={item.color} className="mt-3" />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
