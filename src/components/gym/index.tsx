import { Link } from "react-router-dom"

export default function Gym() {
    const data = [
        {
            id:'0',
            imageUrl: 'assets/images/gym/gym1.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        },
        {
            id:'1',
            imageUrl: 'assets/images/gym/gym2.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        },
        {
            id:'2',
            imageUrl: 'assets/images/gym/gym3.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        },
        {
            id:'3',
            imageUrl: 'assets/images/gym/gym4.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        },
        {
            id:'4',
            imageUrl: 'assets/images/gym/gym5.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        },
        {
            id:'5',
            imageUrl: 'assets/images/gym/gym6.svg',
            title: 'All Serv',
            description: '1999 cul ildə yaranıb...',
            rating: 4.5,
            reviews: 76
        }
    ];

return (
    <div className="pt-10 ">
        <div className="flex flex-wrap justify-between items-center gap-3 px-24">
            <p>100 yer tapildi</p>
            <div className="flex flex-wrap gap-4">
                <button className="px-[7px] py-[6px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all">Crossfit</button>
                <button className="px-[7px] py-[6px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all">Bodybuild</button>
                <button className="px-[7px] py-[6px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all">Gimnastika</button>
            </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-between p-10 h-auto">
            {data.map((item, index) => (
                <Link key={item.id} to={item.id}>
                    <div key={index} className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-md p-3 max-w-xs md:max-w-xl mx-auto border border-white bg-white transition-shadow duration-300 hover:shadow-box hover:cursor-pointer">
                                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                    <img src={item.imageUrl} alt="tailwind logo" className="rounded-xl shadow-lg object-cover h-[150px]" />
                                </div>
                        <div className="w-full md:w-2/3 bg-white flex gap-2 flex-col space-y-2 p-3 py-4">
                            <h3 className="font-black text-gray-800 md:text-2xl text-xl">{item.title}</h3>
                            <p className="md:text-lg text-gray-500 text-base">{item.description}</p>
                            <div className="flex item-center pt-5">
                                <div className="flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <p className="text-gray-600 font-bold text-sm ml-1">{item.rating} <span className="text-gray-500 font-normal">({item.reviews} reviews)</span></p>
                                </div>
                                <div className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                    | En yaxsi sirada
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="flex justify-center pt-4 pb-10">
            <button className="px-[15px] py-[10px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all">Load More</button>
        </div>
    </div>
    );
}