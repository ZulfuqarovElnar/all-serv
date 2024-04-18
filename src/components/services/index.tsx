import { faBabyCarriage, faBroom, faDumbbell, faHotel, faHouseCrack, faScissors, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

export default function Services() {
    return (
        <div className="w-full h-auto py-[70px]">
            <div className=" flex justify-center flex-wrap px-5 gap-8">
                <Link to="#">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faHotel} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Otel Rezervi</h1>
                    </div>
                </Link>
                <Link to="/cleaning">
                    <div className="relative whitespace-nowrap  w-[60px] h-[60px] flex flex-col items-center">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]"  icon={faBroom} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Təmizlik xidməti</h1>
                    </div>
                </Link>
                <Link to="/nanny">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faBabyCarriage} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Dayə xidməti</h1>
                    </div>
                </Link>
                <Link to="/beauty">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faScissors} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Gözəllik Salonu</h1>
                    </div>
                </Link>
                <Link to="#">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faScrewdriverWrench} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Təmir xidməti</h1>
                    </div>
                </Link>
                <Link to="/gym">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faDumbbell} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">İdman zalları</h1>
                    </div>
                </Link>
                <Link to="#">
                    <div className="relative w-[60px] h-[60px] flex flex-col items-center whitespace-nowrap">
                        <div id="myDiv" className="w-[60px] h-[60px] rounded-full bg-[#0073ce] flex justify-center items-center hover:bg-[#fff] shadow-box cursor-pointer transition-all">
                            <FontAwesomeIcon id="mySvg" className="text-[#fff] text-[30px]" icon={faHouseCrack} />
                        </div>
                        <h1 className="absolute top-[75px] cursor-default text-lg font-semibold text-[#0073ce] opacity-0 transition-opacity duration-300">Ev təmiri</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
