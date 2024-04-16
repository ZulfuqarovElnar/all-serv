export default function Cleaning() {
    const services = [
        { name: "Ev təmizliyi", image: "clean1.svg" },
        { name: "Mebel təmizliyi", image: "clean2.svg" },
        { name: "Xalça yuma", image: "clean3.svg" },
    ];

    return (
        <div className="text-center text-2xl pt-[30px]">
        <h1 className="text-2xl font-semibold text-[#0073ce]">Təmizlik xidməti</h1>
        <div className="p-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col rounded-xl bg-white shadow-box">
                    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img className="w-full h-[244px] object-cover" src={`assets/images/cleaning/${service.image}`} alt="cleaning service" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                    </div>
                    <div className="p-6 pt-3 mt-3">
                        <button className="w-full rounded-lg bg-gray-900 py-3.5 px-7 text-sm font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            {service.name}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}
