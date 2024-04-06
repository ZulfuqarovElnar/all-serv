import { useState } from 'react';

export default function FitnessEmployees() {
  const [visibleEmployees, setVisibleEmployees] = useState(4); // Başlangıçta gösterilecek çalışan sayısı
  const totalEmployees = 6; // Toplam çalışan sayısı

  const employees = [
    { name: "Ramin Abbasbəyli", role: "Fitness müəllimi", rating: 4.5, image: "/assets/images/gym/employees/employe3.svg" },
    { name: "Banu Ramilzadə", role: "Qadınlar üçün fitness", rating: 4.5, image: "/assets/images/gym/employees/employe1.svg" },
    { name: "Mələk Hüseyinzadə", role: "Uşaqlar üçün üzgüçülük", rating: 4.5, image: "/assets/images/gym/employees/employe2.svg" },
    { name: "Emin İlkinzadə", role: "Fitness dokor", rating: 4.5, image: "/assets/images/gym/employees/employe4.svg" },
    { name: "Mələk Hüseyinzadə", role: "Uşaqlar üçün üzgüçülük", rating: 4.5, image: "/assets/images/gym/employees/employe2.svg" },
    { name: "Emin İlkinzadə", role: "Fitness dokor", rating: 4.5, image: "/assets/images/gym/employees/employe4.svg" }
  ];

  const loadMore = () => {
    setVisibleEmployees(prevCount => prevCount + 2); 
  };

  return (
    <div className="pt-4">
      <p className="px-10 sm-px-20 md:px-40">100 yer tapildi</p>
      <div className="flex justify-center flex-wrap gap-10 py-10 text-white">
        {employees.slice(0, visibleEmployees).map((employee, index) => (
          <div key={index} className="h-auto flex flex-col bg-gray-100">
            <div className="m-auto">
              <div className="flex flex-col bg-white max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md p-3 border border-white transition-shadow duration-300 hover:shadow-box hover:cursor-pointer">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={employee.image} alt="" />
                  <div className="flex flex-col text-center md:text-left">
                    <div className="font-medium text-lg text-gray-800">{employee.name}</div>
                    <div className="text-gray-500 mb-3 whitespace-nowrap">{employee.role}</div>
                    <div className="flex item-center">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">{employee.rating}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        | En yaxsi sirada
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleEmployees < totalEmployees && (
        <div className="flex justify-center pt-4 pb-10">
          <button className="px-[15px] py-[10px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all" onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}
