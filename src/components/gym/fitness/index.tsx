import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkType = "details" | "gallery" | "employees"; 

export default function Fitness() {
    const [activeLink, setActiveLink] = useState<LinkType | null>(() => {
        return localStorage.getItem('activeLink') as LinkType | null;
    }); 

    const handleLinkClick = (link: LinkType) => { 
        setActiveLink(link);
        localStorage.setItem('activeLink', link);
    };

    useEffect(() => {
        if (!activeLink) {
            setActiveLink('details');
            localStorage.setItem('activeLink', 'details');
        }
    }, []); 

    return (
        <div>
            <div className="w-full h-auto">
                <img className="w-full h-[350px] object-cover" src="/allserv/assets/images/gym/gym1.svg" alt="" />
                <div className="absolute top-[400px] right-20 md:right-40 lg:right-60  gap-4 flex">
                    <div className="w-[40px] h-[40px] text-[20px] flex justify-center items-center rounded-full bg-white text-[#00A3FF] hover:bg-[#00A3FF] hover:text-white transition-all cursor-pointer">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <div className="w-[40px] h-[40px] text-[20px] flex justify-center items-center rounded-full bg-white text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition-all cursor-pointer">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-7 sm:gap-20 md:gap-40 lg:gap-56 py-5'>
                <div className={`border-b hover:border-[#00A3FF] text-[20px] sm:text-[24px] lg:text-[30px] transition-all ${activeLink === 'details' ? 'border-[#00A3FF]' : 'border-transparent'}`}>
                    <Link to='details' onClick={() => handleLinkClick('details')}>Təfərrüatlar</Link>
                </div>
                <div className={`border-b hover:border-[#00A3FF] text-[20px] sm:text-[24px] lg:text-[30px] transition-all ${activeLink === 'gallery' ? 'border-[#00A3FF]' : 'border-transparent'}`}>
                    <Link to='gallery' onClick={() => handleLinkClick('gallery')}>Gallerya</Link>
                </div>
                <div className={`border-b   hover:border-[#00A3FF] text-[20px] sm:text-[24px] lg:text-[30px] transition-all ${activeLink === 'employees' ? 'border-[#00A3FF]' : 'border-transparent'}`}>
                    <Link to='employees' onClick={() => handleLinkClick('employees')}>Çalışanlar</Link>
                </div>
            </div>
        </div>
    )
}
