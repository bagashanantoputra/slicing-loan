import { ChartData, ChartDataCostumer, PercentageData, PercentageDataCostumer } from "./DataDashboard";
import { Card, Divider, Flex, Metric, ProgressBar, Text } from "@tremor/react";

const CardAnalytic = () => {
    return (
        <div className="lg:max-w-full md:max-w-full pb-5 lg:mx-12 mx-5 mt-5 px-5 pt-5 bg-white rounded-xl mb-8">
            <div className="mt-5 mx-5">
                <div className="lg:flex gap-8 bg-white">
                    <div className="flex-row lg:w-1/2">
                        <div className="lg:flex">
                            {ChartDataCostumer.map((item) => (
                            <Card key={item.id} className="ring-0 ring-transparent shadow-transparent py-0 px-5 bg-white" decoration="left" decorationColor={item.color}>
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
                        <div className="flex">
                            {ChartData.map((item) => (
                            <Card key={item.id} className="mx-auto ring-0 ring-tremor-background-muted shadow-transparent py-0 px-5 bg-white" decoration="left" decorationColor={item.color}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Text className="text-xs">{item.name}</Text>
                                        <Metric className="mt-2 text-xl">{item.countData}</Metric>
                                    </div>
                                    <div>
                                        <svg className="ps-8 lg:pe-0 lg:ps-0" width="190" height="70">
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
    )
}

export default CardAnalytic