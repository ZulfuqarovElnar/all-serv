import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faArrowRightFromBracket, faBars, faCircleQuestion, faGear, faMagnifyingGlass, faRegistered, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { Menu, Popover } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import Notification from '../notification';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [showDayeSubMenu, setShowDayeSubMenu] = useState<boolean>(false);
    const [showTemizlikSubMenu, setShowTemizlikSubMenu] = useState<boolean>(false);
    
    const selectedImage = localStorage.getItem('userImage');

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

    const isLoginDataExists = !!localStorage.getItem('loginData');
    const isRegistrationDataExists = !!localStorage.getItem('registrationData');
    const isDataExists = isLoginDataExists || isRegistrationDataExists;

    const toggleProfile = () => {
        const loginData = localStorage.getItem('loginData');
        const registrationData = localStorage.getItem('registrationData');
        if (loginData || registrationData) {
            closeMenu();
        }
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


    const handleLogout = () => {
    localStorage.removeItem('loginData');
    localStorage.removeItem('registrationData');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userImage');
    
    navigate("/")
};

    return (
        <nav className='w-full h-[100px] shadow-lg fixed bg-[#0073ce] z-[100]'>
            <div className='flex justify-between items-center  px-[10px] py-[16px] md:px-[20px]'>
                <div className='flex'>
                    <div className="w-[137px] h-[70px] -mt-2 flex items-center justify-center bg-[url('/assets/images/Dots.png')] ">
                        <img className="w-[85px] h-[72px] rounded-full cursor-pointer" src="/assets/images/logo.svg" alt="" />
                        <h1 className='pt-2 text-lg sm:text-2xl font-bold text-white whitespace-nowrap'>All Serv</h1>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className={`lg:flex lg:flex-row lg:relative lg:w-auto lg:top-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:overflow-visible w-full bg-white flex flex-col shadow-box fixed left-0 z-40 top-[100px] transition-all duration-300 overflow-hidden   ${menuVisible ? 'h-auto' : ' h-0'}`} ref={menuRef}>
                        <ul className='lg:flex-row lg:flex lg:gap-6 lg:px-5 lg:pt-6 flex flex-col pt-6  px-10 text-[#333] lg:text-white font-bold'>
                            <NavLink to="/" onClick={closeMenu}>
                                <li className='lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-all'>Əsas</li>
                            </NavLink>
                        </ul>
                        <Menu>
                            <Menu.Button className="h-7 focus:outline-none flex justify-start items-center px-[40px] pt-[20px] lg:px-0 lg:pt-0 lg:mr-5  my-auto text-[#333] lg:text-white lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                                Xidmətlərimiz
                                <FontAwesomeIcon className='px-[8px] pt-1' icon={isOpen ? faAngleUp : faAngleDown} />
                            </Menu.Button>
                            {isOpen && (
                                <Menu.Items className="relative" >
                                    <div className='lg:absolute relative w-[200px] left-6 rounded-[20px] h-auto mt-5 lg:mt-[90px] lg:-left-[180px] text-center bg-[#0073ce] text-white py-[10px] px-2.5 shadow-box'>
                                        <Menu.Item>
                                            <NavLink to="/beauty" onClick={closeMenu}>
                                                <div className='rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Gozəllik salonlari</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#" onClick={closeMenu}>
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Kirayə evlər</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="/cleaning" onClick={closeMenu}>
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Təmizlik şirkətləri</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="/gym" onClick={closeMenu} >
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
                                                                    <Menu.Item >
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Uşaq baxıcısı</div>
                                                                        </NavLink>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Yaşlı baxıcısı</div>
                                                                        </NavLink>
                                                                        </Menu.Item>
                                                                    <Menu.Item>
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleDayeSubMenuClick("/nanny")}>Ev heyvan baxıcısı</div>
                                                                        </NavLink>
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        )}
                                                    </Menu>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#" onClick={closeMenu}>
                                                <div className=' rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1'>Maşın təmiri</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="#" onClick={closeMenu}>
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
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Xalça təmizliyi</div>
                                                                        </NavLink>
                                                                    </Menu.Item>
                                                                    <Menu.Item>
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Əşya təmizliyi</div>
                                                                        </NavLink>
                                                                    </Menu.Item>
                                                                    <Menu.Item> 
                                                                        <NavLink to="#" onClick={() => {closeMenu(); window.location.reload();}} >
                                                                            <div className='cursor-pointer rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1' onClick={() => handleTemizlikSubMenuClick("#")}>Xadimə</div>
                                                                        </NavLink>
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
                            <NavLink to="/about-us" onClick={closeMenu}>
                                <li className='lg:hover:border-b border-b border-transparent font-bold text-lg lg:hover:border-white border-0 transition-all'>Haqqimizda</li>
                            </NavLink>
                            <NavLink to="/contact-us" onClick={closeMenu}>
                                <li className='lg:hover:border-b text-lg font-bold lg:hover:border-white border-0 transition-all'>Əlaqə</li>
                            </NavLink>
                        </ul>
                        <div className='px-10 mb-5 flex text-[#333] md:hidden items-center gap-2'>
                            <input placeholder='Search' className='max-w-[200px] w-full py-1 px-2 rounded-lg bg-slate-200' type="text" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className='px-5 hidden text-white md:flex items-center gap-2'>
                        <input placeholder='Search' className=' placeholder:text-slate-100 max-w-[180px] w-full py-1 px-2 rounded-lg border border-white bg-[#0073ce] focus:outline-none' type="text" />
                        <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
                    </div>
                    {isDataExists ? (
                        <div className={`flex justify-center items-center px-5 gap-5 `}>
                            <Popover className="relative">
                                <Popover.Button className="focus:outline-none">
                                    <button type="button" title="Notification"
                                        className="w-12 h-12 flex items-center justify-center rounded-full text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#fff]"
                                        viewBox="0 0 371.263 371.263">
                                        <path
                                            d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                                            data-original="#000000"></path>
                                        </svg>
                                    </button>
                                </Popover.Button>
                                <Popover.Panel className="absolute -left-[155px] sm:-left-[343px] top-[70px]">
                                    <Notification />
                                </Popover.Panel>
                            </Popover>
                            
                            <Popover>
                                <Popover.Button className="focus:outline-none" onClick={handlePopoverButtonClick}>
                                    <img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={selectedImage ? selectedImage : "/assets/images/profiles.jpg"}  alt="" />
                                </Popover.Button>
                                <Popover.Panel className='absolute z-20'>
                                    <img className='pl-3' src="/assets/images/icon.svg" alt="" />
                                    <ul className='absolute -left-[120px] rounded-[20px] w-[200px] bg-[#1588e6] text-center text-white py-[6px] px-2.5'>
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
                                        <NavLink to="/" onClick={handleLogout}>
                                            <li className='flex px-3 items-center gap-3 rounded-[1.25rem] font-semibold hover:bg-white hover:text-[#333] transition-all my-1 p-1 cursor-pointer'>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                Çıxış et
                                            </li>
                                        </NavLink>
                                    </ul>
                                </Popover.Panel>
                            </Popover>
                        </div>
                    ):(
                        <div className={`flex pr-5 gap-5 `}>
                            <Link to="/register" className='flex sm:px-4 px-2 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>abunə ol</Link>
                            <Link to="/login" className='flex sm:px-4 px-2 py-2 rounded-[20px] text-[14px] text-white border border-white font-semibold  hover:bg-white hover:text-[#333] hover:border-[#333] transition-colors' onClick={toggleProfile}>giriş et</Link>
                        </div>
                    )}
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
