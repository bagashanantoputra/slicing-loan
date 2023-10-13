
import { BsArrowRightShort } from "react-icons/bs"
import Cards from "../Card/Card";
import CardAnalytic from "../Card/CardAnalytic";

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
                
                <Cards/>

                <div className="flex flex-col text-start lg:mx-12 mx-5 mt-5">
                    <span className="text-xl font-semibold text-sky-900">Data & Analytics</span>
                    <span className="text-sm text-gray-600">Show updates of loan</span>
                </div>
                
                <CardAnalytic/>
        </div>
    )
}
