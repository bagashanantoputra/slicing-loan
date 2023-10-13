import { DataDashboardLeft, DataDashboardRight1, DataDashboardRight2, DataDashboardRight3 } from "./DataDashboard";

const Cards = () => {
    return (
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
    )
}

export default Cards