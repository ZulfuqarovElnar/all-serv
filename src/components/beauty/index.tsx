import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

interface Reservation {
  salonName: string;
  reservationDateTime: string;
  serviceType: string;
  reservationType: string;
  tableNumber: number;
  reservationTime: string;
}

const fakeReservations: Reservation[] = [
  {
    salonName: "Gözallik salonu: Bauty-shop",
    reservationDateTime: "Cümə axşamı Aprel 2023, 06:28 PM",
    serviceType: "Salon xidməti",
    reservationType: "Gözəllik salonu rezervasiyası",
    tableNumber: 1,
    reservationTime: "15-04-2023 16:26",
  },
  {
    salonName: "Gözallik salonu: Bauty-shop",
    reservationDateTime: "Cümə axşamı Aprel 2023, 06:28 PM",
    serviceType: "Salon xidməti",
    reservationType: "Gözəllik salonu rezervasiyası",
    tableNumber: 2,
    reservationTime: "15-04-2023 16:30",
  },
  {
    salonName: "Gözallik salonu: Bauty-shop",
    reservationDateTime: "Cümə axşamı Aprel 2023, 06:28 PM",
    serviceType: "Salon xidməti",
    reservationType: "Gözəllik salonu rezervasiyası",
    tableNumber: 3,
    reservationTime: "15-04-2023 16:35",
  },
];

export default function Reserve(): JSX.Element {
  return (
    <div>
      <div>
        <h1 className="text-center text-gray-700 font-semibold text-[40px] py-3">Rezervler</h1>
        <div className="flex justify-center gap-6 flex-wrap transition-all">
          {fakeReservations.map((reservation, index) => (
            <ReservationCard key={index} reservation={reservation} isFirst={index === 0} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to="/" className='flex w-max my-10 px-10 py-2 rounded-[20px] text-[14px] bg-[#13829B] text-white border border-white font-semibold hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors'>Menuya keç</Link>
        </div>
      </div>
    </div>
  );
}

interface ReservationCardProps {
  reservation: Reservation;
  isFirst: boolean;
}
function ReservationCard({ reservation, isFirst }: ReservationCardProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(isFirst);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    setIsIconRotated(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsIconRotated(false);
  };

  return (
    <div className="max-w-[400px] w-full px-6">
      <h1 className="text-xl font-semibold text-gray-700 px-5 py-3">{reservation.salonName}</h1>
      <Menu>
        <Menu.Button
          ref={menuRef}
          className="w-full mt-3 flex justify-between items-center shadow-md px-5 py-3 rounded hover:shadow-box transition-all"
          onClick={toggleMenu}
        >
          {reservation.reservationDateTime}
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`transition-all transform ${isIconRotated ? "rotate-180" : ""}`}
          />
        </Menu.Button>
        {isOpen && (
          <Menu.Items
            static
            className="h-auto transition-all"
            onClick={closeMenu}
          >
            <Menu.Item>
              <div className=" shadow-md mt-3 px-5 py-3 rounded hover:shadow-box transition-all">
                <h1 className="text-[25px] font-semibold text-[#333] text-center">Növ: {reservation.serviceType}</h1>
                <p className="text-[20px] font-semibold text-[#333] text-center">{reservation.reservationType}</p>
                <div className="px-10">
                  <div className="flex justify-between border-b text-[18px] font-semibold text-[#333] mt-3">
                    <h1>Ad</h1>
                    <p>Salon</p>
                  </div>
                  <div className="pt-3">
                    <div className="flex justify-between font-semibold text-[#333]">
                      <p className="text-gray-600">Masa</p>
                      <span className="text-gray-600">No</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[#333]">
                      <p>Rezerv</p>
                      <span className="pr-2">{reservation.tableNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-3 px-10">
                  <div>
                    <h1 className="text-gray-600 font-semibold">Rezerv vaxtı</h1>
                    <span>{reservation.reservationTime}</span>
                  </div>
                  <div>
                    <h1 className="text-gray-600 font-semibold">Masa</h1>
                    <span className="pl-3">{reservation.tableNumber}</span>
                  </div>
                </div>
              </div>
            </Menu.Item>
          </Menu.Items>
        )}
      </Menu>
    </div>
  );
}
  