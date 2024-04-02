import { faCartShopping, faScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <div className="w-full h-auto py-[70px]">
        <div className=" flex justify-center flex-wrap px-5 gap-8">
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service1.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service2.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <FontAwesomeIcon className="text-white text-[30px]" icon={faCartShopping} />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <FontAwesomeIcon className="text-white text-[30px]" icon={faScissors} />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[40px]" src="assets/images/services/service3.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service4.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service5.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service6.svg" alt="" />
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#42A1FA] flex justify-center items-center hover:bg-[#777EF6] shadow-box cursor-pointer transition-all">
                <img className="text-white w-[30px]" src="assets/images/services/service7.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
