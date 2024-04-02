import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faBars, faBell, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Popover } from '@headlessui/react'
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <nav className='w-full h-[100px] shadow-lg fixed bg-[#42A1FA] z-50'>
            <div className='flex justify-between items-center py-[16px] px-[40px]'>
                <div className='flex'>
                    <div className="w-[77px] h-[80px] -mt-2 flex justify-center bg-[url('src/assets/images/Dots.png')] ">
                        <img className=" w-[85px] h-[72px] rounded-full cursor-pointer" src="assets/images/logo.svg" alt="" />
                    </div>
                    <div className={`flex flex-col justify-center pl-5 ${showProfile ? 'block' : 'hidden'}`}>
                        <h1 className='text-[14px] text-[#333]'>Salam <span className='text-[14px] text-white '> Serdar</span></h1>
                        <h1 className='text-[14px] text-[#333]'>Yer: <span className='text-[14px] text-white '> Bakı</span></h1>
                    </div>
                </div>
                
                <div className='flex items-center'>
                    <div className={`lg:flex lg:flex-row lg:relative lg:w-auto lg:top-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:overflow-visible w-full bg-white flex flex-col shadow-box fixed left-0 z-40 top-[100px] transition-all duration-300 overflow-hidden  ${menuVisible ? 'h-auto' : ' h-0'}`}>
                        <ul className='lg:flex-row lg:flex lg:gap-6 lg:px-0 lg:pt-6 flex flex-col py-6 pt-6 px-10 gap-3 text-[#333] lg:text-white font-bold'>
                            <li className='lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-all'>
                                <div className='flex items-center' >
                                    <Popover>
                                        <Popover.Button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                                            xidmətlərimiz
                                            {isOpen ? <FontAwesomeIcon className='px-[5px]' icon={faAngleUp} /> : <FontAwesomeIcon className='px-[5px]' icon={faAngleDown} />}
                                        </Popover.Button>
                                        <Popover.Panel className="relative ">
                                            <ul className='lg:absolute relative w-[200px] -left-6 rounded-[20px] h-auto mt-1 lg:mt-9 text-center bg-[#42A1FA] text-white py-[10px] px-2.5'>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Gozəllik salonlari</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Kirayə evlər</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Təmizlik şirkətləri</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">İdman zallar</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Maşın təmizri</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Ev təmir işləri</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Dayə şirkətləri</a></li>
                                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'>
                                                    <div>
                                                        <Popover>
                                                            <Popover.Button onClick={() => setIsSecondOpen(!isSecondOpen)} className="w-full pl-12 flex justify-between items-center focus:outline-none ">
                                                                Təmizlik
                                                                {isSecondOpen ? <FontAwesomeIcon className='pt-1' icon={faAngleLeft} /> : <FontAwesomeIcon className='pt-1' icon={faAngleRight} />}
                                                            </Popover.Button>
                                                            <Popover.Panel>
                                                                <ul className='absolute left-[200px] rounded-[20px] lg:top-[176px] text-center top-[130px] w-[200px] mt-9 bg-[#42A1FA] text-white py-[6px] px-2.5'>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Xalça təmizliyi</a></li>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Əşya təmizliyi</a></li>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Xadimə</a></li>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Uşaq baxıcısı</a></li>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Yaşlı baxıcısı</a></li>
                                                                    <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Ev heyvan baxıcısı</a></li>
                                                                </ul>
                                                            </Popover.Panel>
                                                        </Popover>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Popover.Panel>
                                    </Popover>
                                </div>
                            </li>
                            <li className='lg:hover:border-b text-lg font-bold lg:hover:border-white border-0 transition-all'><a href="/">haqqimizda</a></li>
                            <li className='lg:hover:border-b text-lg font-bold lg:hover:border-white border-0 transition-all'><a href="/">əlaqə</a></li>
                        </ul>
                        <div className='px-10 mb-5 flex text-[#333] md:hidden items-center gap-2'>
                            <input placeholder='Search' className='max-w-[200px] w-full py-1 px-2 rounded-lg bg-slate-200' type="text" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className={`flex px-10 pb-5 md:hidden gap-5 ${showProfile ? 'hidden' : 'block'}`}>
                            <button className='flex px-4 py-2 rounded-[20px] text-[14px] bg-[#13829B] text-white border border-white font-semibold hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>abunə ol</button>
                            <button className='flex px-4 py-2 rounded-[20px] text-[14px] bg-[#13829B] text-white border border-white font-semibold hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>giriş et</button>
                        </div>
                    </div>
                    <div className='px-5 hidden text-white md:flex items-center gap-2'>
                        <input placeholder='Search' className=' placeholder:text-slate-100 max-w-[200px] w-full py-1 px-2 rounded-lg border border-white bg-[#42A1FA] focus:outline-none' type="text" />
                        <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
                    </div>
                    <div className={`hidden md:flex md:pr-5 pl-5 gap-5 ${showProfile ? 'md:hidden' : 'block'}`}>
                        <button className='flex px-4 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>abunə ol</button>
                        <button className='flex px-4 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>giriş et</button>
                    </div>
                    <div className={`flex justify-center items-center px-5 gap-5 ${showProfile ? 'block' : 'hidden'}`}>
                        <FontAwesomeIcon className='text-white text-[25px] cursor-pointer' icon={faBell} />
                        <Popover>
                            <Popover.Button className="focus:outline-none">
                            <img className='w-[50px] h-[50px] rounded-full cursor-pointer' src="assets/images/profile.svg" alt="" />
                        </Popover.Button>
                        <Popover.Panel className='absolute z-20'>
                            <img className='pl-3' src="src/assets/images/icon.svg" alt="" />
                            <ul className='absolute -left-12 rounded-[20px] w-[150px]  bg-[#777EF6] text-center text-white py-[6px] px-2.5'>
                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Ayarlar</a></li>
                                <li className='border-t hover:bg-white hover:text-[#333] transition-all my-1 px-1'><a href="/">Rezervlər</a></li>
                            </ul>
                        </Popover.Panel>
                        </Popover>
                        
                    </div>
                    <div className='flex lg:hidden transition-all duration-300 ease'> 
                        <FontAwesomeIcon
                            className={`text-[32px] text-white cursor-pointer ${menuVisible ? 'hidden' : ''}`}
                            icon={faBars}
                            onClick={toggleMenu}
                        />
                        <FontAwesomeIcon
                            className={`text-[32px] text-white cursor-pointer ${menuVisible ? '' : 'hidden'}`}
                            icon={faTimes}
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
