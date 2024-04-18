import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faArrowRightFromBracket, faBars, faBell, faCircleQuestion, faGear, faMagnifyingGlass, faRegistered, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { Menu, Popover } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [showDayeSubMenu, setShowDayeSubMenu] = useState<boolean>(false);
    const [showTemizlikSubMenu, setShowTemizlikSubMenu] = useState<boolean>(false);
    
    const selectedImage = useSelector((state: RootState) => state.some.selectedImage);

    const navigate = useNavigate(); 

    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setIsOpen(false);
    };

    const closeMenu = () => {
        setMenuVisible(false);
        setIsOpen(false);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
        closeMenu();
    };
    const handlePopoverButtonClick = () => {
        closeMenu(); 
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            setShowDayeSubMenu(false);
            setShowTemizlikSubMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDayeSubMenuClick = (path: string) => {
        setShowDayeSubMenu(!showDayeSubMenu);
        navigate(path); 
    };

    const handleTemizlikSubMenuClick = (path: string) => {
        setShowTemizlikSubMenu(false);
        navigate(path); 
    };

    return (
        <nav className='w-full h-[100px] shadow-lg fixed bg-[#0073ce] z-50'>
            <div className='flex justify-between items-center py-[16px] px-[40px]'>
                <div className='flex'>
                    <div className="w-[137px] h-[70px] -mt-2 flex items-center justify-center bg-[url('/assets/images/Dots.png')] ">
                        <img className="w-[85px] h-[72px] rounded-full cursor-pointer" src="/assets/images/logo.svg" alt="" />
                        <h1 className='pt-2 text-2xl font-bold text-white whitespace-nowrap'>All Serv</h1>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className={`lg:flex lg:flex-row lg:relative lg:w-auto lg:top-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:overflow-visible w-full bg-white flex flex-col shadow-box fixed left-0 z-40 top-[100px] transition-all duration-300 overflow-hidden   ${menuVisible ? 'h-auto' : ' h-0'}`} ref={menuRef}>
                        <ul className='lg:flex-row lg:flex lg:gap-6 lg:px-5 lg:pt-6 flex flex-col py-6 pt-6 px-10 text-[#333] lg:text-white font-bold'>
                            <NavLink to="/">
                                <li className='lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-all'>Əsas</li>
                            </NavLink>
                        </ul>
                        <Menu>
                            <Menu.Button className="h-7 focus:outline-none flex justify-start items-center px-[40px] pt-[30px] lg:px-0 lg:pt-0 lg:mr-5  my-auto text-[#333] lg:text-white lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                                Xidmətlərimiz
                                <FontAwesomeIcon className='px-[8px] pt-1' icon={isOpen ? faAngleUp : faAngleDown} />
                            </Menu.Button>
                            {isOpen && (
                                <Menu.Items className="relative" >
                                    <div className='lg:absolute relative w-[200px] left-6 rounded-[20px] h-auto mt-5 lg:mt-[90px] lg:-left-[180px] text-center bg-[#0073ce] text-white py-[10px] px-2.5 shadow-box'>
                                        <Menu.Item>
                                            <NavLink to="/beauty" >
                                                <div className='rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Gozəllik salonlari</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#">
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Kirayə evlər</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="/cleaning">
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Təmizlik şirkətləri</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="/gym" >
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>İdman zallar</div>
                                            </NavLink>
                                        </Menu.Item> 
                                        <Menu.Item>
                                            <div className=' font-semibold   my-1 '>
                                                <div>
                                                    <Menu>
                                                        <Menu.Button onClick={() => setShowDayeSubMenu(!showDayeSubMenu)} className="w-full p-1 rounded-[1.25rem] hover:text-[#333] transition-all hover:bg-white pl-9 flex justify-between items-center focus:outline-none ">
                                                            Dayə xidməti
                                                            {showDayeSubMenu ? <FontAwesomeIcon className='pr-4' icon={faAngleLeft} /> : <FontAwesomeIcon className='pr-4' icon={faAngleRight} />}
                                                        </Menu.Button>
                                                        {showDayeSubMenu && (
                                                            <Menu.Items>
                                                                <div className='absolute left-[200px] rounded-[20px] lg:top-[106px] text-center top-[130px] w-[200px] mt-9 bg-[#0073ce] text-white py-[6px] px-2.5 shadow-box'>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Uşaq baxıcısı</div>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Yaşlı baxıcısı</div>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Ev heyvan baxıcısı</div>
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        )}
                                                    </Menu>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#">
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Maşın təmiri</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#">
                                                <div className='rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Ev təmir işləri</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <div className='rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>
                                                <div>
                                                    <Menu>
                                                        <Menu.Button onClick={() => setShowTemizlikSubMenu(!showTemizlikSubMenu)} className="w-full pl-12 flex justify-between items-center focus:outline-none ">
                                                            Təmizlik
                                                            {showTemizlikSubMenu ? <FontAwesomeIcon className='pr-4' icon={faAngleLeft} /> : <FontAwesomeIcon className='pr-4' icon={faAngleRight} />}
                                                        </Menu.Button>
                                                        {showTemizlikSubMenu && (
                                                            <Menu.Items>
                                                                <div className='absolute left-[200px] rounded-[20px] lg:top-[216px] text-center top-[130px] w-[200px] mt-9 bg-[#0073ce] text-white py-[6px] px-2.5 shadow-box'>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Xalça təmizliyi</div>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Əşya təmizliyi</div>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Xadimə</div>
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        )}
                                                    </Menu>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            )}
                        </Menu>
                        <ul className='lg:flex-row lg:flex lg:gap-6 lg:px-0 lg:pt-6 flex flex-col py-6 pt-6 px-10 gap-3 text-[#333] lg:text-white font-bold'>
                            <NavLink to="/about-us">
                                <li className='lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-all'>Haqqimizda</li>
                            </NavLink>
                            <NavLink to="/contact-us">
                                <li className='lg:hover:border-b text-lg font-bold lg:hover:border-white border-0 transition-all'>Əlaqə</li>
                            </NavLink>
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
                        <input placeholder='Search' className=' placeholder:text-slate-100 max-w-[200px] w-full py-1 px-2 rounded-lg border border-white bg-[#0073ce] focus:outline-none' type="text" />
                        <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
                    </div>
                    <div className={`hidden md:flex md:pr-5 pl-5 gap-5 ${showProfile ? 'md:hidden' : 'block'}`}>
                        <button className='flex px-4 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>abunə ol</button>
                        <button className='flex px-4 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>giriş et</button>
                    </div>
                    <div className={`flex justify-center items-center px-5 gap-5 ${showProfile ? 'block' : 'hidden'}`}>
                        <FontAwesomeIcon className='text-white text-[25px] cursor-pointer' icon={faBell} />
                        <Popover>
                            <Popover.Button className="focus:outline-none" onClick={handlePopoverButtonClick}>
                                <img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={selectedImage ? selectedImage : "/assets/images/profiles.jpg"}  alt="" />
                            </Popover.Button>
                            <Popover.Panel className='absolute z-20'>
                                <img className='pl-3' src="/assets/images/icon.svg" alt="" />
                                <ul className='absolute -left-24 rounded-[20px] w-[200px] bg-[#1588e6] text-center text-white py-[6px] px-2.5'>
                                    <NavLink to="/profile">
                                        <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                            <FontAwesomeIcon icon={faUser} />
                                            Profile
                                        </li>
                                    </NavLink>
                                    <NavLink to="/reserve">
                                        <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                            <FontAwesomeIcon icon={faRegistered} />
                                            Rezervlər
                                        </li>
                                    </NavLink>
                                    <NavLink to="#">
                                        <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                            <FontAwesomeIcon icon={faGear} />
                                            Ayarlar
                                        </li>
                                    </NavLink>
                                    <NavLink to="#">
                                        <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                            <FontAwesomeIcon icon={faCircleQuestion} />
                                            Dəstək və kömək
                                        </li>
                                    </NavLink>
                                    <NavLink to="#">
                                        <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                            Çıxış et
                                        </li>
                                    </NavLink>
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
    );
};

export default Navbar;
