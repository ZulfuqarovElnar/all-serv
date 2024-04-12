import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    
}

const BeautyPage: React.FC<Props> = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [selectedService, setSelectedService] = useState<string | null>(null);
    
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(e.target.value);
    };

    const handleServiceSelection = (serviceName: string) => {
        setSelectedService(serviceName);
    };

    return (
        <div className="bg-white h-auto my-12 flex justify-center px-20">
            <div className="bg-white flex flex-col items-center rounded-lg shadow-box p-8 pb-0 max-w-[800px] w-full">
                <h1 className='text-xl md:text-3xl font-semibold mb-6 text-center'>Gözəllik salonu: Beauty-shop</h1>
                <div className='flex gap-5 justify-center flex-wrap max-w-[700px] w-full'>
                <div className="flex flex-col gap-4 max-w-[300px] w-full">
    <label htmlFor="date" className="text-gray-700 font-semibold px-1">Tarih Seçici</label>
    <input
        id="date"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
    />
</div>
<div className="flex flex-col gap-4 max-w-[300px] w-full">
    <label htmlFor="time" className="text-gray-700 font-semibold px-1">Zaman Seçici</label>
    <input
        id="time"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
    />
</div>

                </div>
                
                <div className='py-7 mx-auto w-full max-w-[600px]'>
                    <h1 className='px-1 text-gray-700 font-semibold text-center text-xl'>Evə xidmət</h1>
                    <p className='px-1 py-3 text-gray-600 text-center'>Evə xidmıət vasitəsi ilə istənilən vaxt gunlərdən seçib rezervasiyani evə edə bilərsiniz</p>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {['BAZ.E', 'ÇƏR.A', 'ÇƏR', 'CÜ.A', 'CÜ', 'ŞƏN', 'BAZ'].map((service, index) => (
                            <button 
                                key={index}
                                className={`flex w-10 px-7 py-3 flex-col justify-center items-center rounded-2xl text-gray-700 shadow-lg border-gray-800 border hover:bg-[#13829B] hover:text-white hover:shadow-box hover:border-white transition-colors ${selectedService === service && 'bg-[#13829B] text-white'}`}
                                onClick={() => handleServiceSelection(service)}
                            >
                                <h1>{index + 1}</h1>
                                <p>{service}</p>
                            </button>
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center items-center pt-10 '>
                        <Link to="/reserve" className='flex px-8 py-2 rounded-[20px] text-[14px] bg-[#13829B] text-white border border-white font-semibold hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors'>Növbəti</Link>
                        <Link to="/reserve" className='flex px-8 py-2 rounded-[20px] text-[14px] bg-[#13829B] text-white border border-white font-semibold hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors'>Rezerv et</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeautyPage;
