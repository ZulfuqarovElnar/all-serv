import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HiEye, HiEyeOff } from 'react-icons/hi'; 

import { updateImage } from '../../store/someReducers';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userInfoFromLocal = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const [userInfo, setUserInfo] = useState<UserInfo>(userInfoFromLocal);

  const selectedImageFromLocal = localStorage.getItem('userImage');
  const [selectedImage, setSelectedImage] = useState<string | null>(selectedImageFromLocal);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  }); 

  const [passwordMatch, setPasswordMatch] = useState(true);

  interface UserInfo {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    about: string;
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    setPasswordMatch(userInfo.password === userInfo.confirmPassword);
  }, [userInfo.password, userInfo.confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setSelectedImage(reader.result as string);
          localStorage.setItem('userImage', reader.result as string);
          dispatch(updateImage(reader.result as string));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', userInfo);
    window.location.reload();
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };  

  return (
    <div className="p-4 sm:p-10">
      <div className="max-w-[1200px] w-full mx-auto flex justify-center flex-wrap gap-10">
        <div className="w-full lg:w-1/4 h-[560px] px-2 pt-10 pb-5 text-center flex flex-col gap-4 shadow-md">
          <h1 className="font-bold text-2xl text-gray-800">{userInfo.fullname}</h1>
          <p>@{userInfo.username}</p>
          <div className="flex justify-center">
            <img className="w-[180px] h-[180px] rounded-full" src={selectedImage || "/assets/images/profiles.jpg"} alt="" />
          </div>
          <label htmlFor="image-upload" className="w-[180px] mx-auto rounded-lg bg-[#0073ce] py-3.5 px-3 text-sm font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
            Upload New Photo
          </label>
          <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <div className="bg-slate-200 py-4 px-2 rounded-lg mx-2 mt-1">
            <p className="text-sm">Upload a new avatar. Larger image will be resized automatically.</p>
            <p className="pt-2 text-sm">Maximum Upload size is <b>1 MB</b></p>
          </div>
          <p className="text-sm pt-3">Member Since: <span className="font-bold">17 aprel 2024</span></p>
        </div>
        <div className="w-full border lg:w-3/5 shadow-md">
          <div className="bg-slate-200 py-10 px-5">
            <h1 className="font-bold text-[30px] text-gray-900">Edit Profile</h1>
          </div>
          <form className="mt-4 p-5" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">User Info</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-10 flex-wrap">
                  <div className="relative h-11 w-full max-w-[300px] min-w-[300px]">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={userInfo.fullname}
                      onChange={handleChange}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      placeholder="Jane Smith"
                    />
                    <label
                      htmlFor="fullname"
                      className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative h-11 w-full max-w-[300px] min-w-[300px]">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={userInfo.username}
                      onChange={handleChange}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      placeholder="@janesmith"
                    />
                    <label
                      htmlFor="username"
                      className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="relative h-11 w-full max-w-[300px] min-w-[300px]">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      placeholder="janesmith@gmail.com"
                    />
                    <label
                      htmlFor="email"
                      className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className='flex gap-10 flex-wrap'>
                  <div className="relative h-11 w-full max-w-[300px] min-w-[300px]">
                    <input
                      type={showPassword.password ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={userInfo.password}
                      onChange={handleChange}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      placeholder="123424"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('password')}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                    >
                      {showPassword.password ? <HiEyeOff /> : <HiEye />} 
                    </button>
                    <label
                      htmlFor="password"
                      className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative h-11 w-full max-w-[300px] min-w-[300px]">
                    <input
                      type={showPassword.confirmPassword ? 'text' : 'password'} 
                      name="confirmPassword"
                      id="confirmPassword"
                      value={userInfo.confirmPassword}
                      onChange={handleChange}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      placeholder="123424"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                    >
                      {showPassword.confirmPassword ? <HiEyeOff /> : <HiEye />} 
                    </button>
                    <label
                      htmlFor="confirmPassword"
                      className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Confirm Password
                    </label>
                  </div>
                </div>
                {!passwordMatch && (
                  <p className="text-sm text-red-500">Passwords do not match.</p>
                )}
                <div>
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    value={userInfo.about}
                    onChange={handleChange}
                    className="mt-1  p-1 w-full outline-none rounded-md shadow-md focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  ></textarea>
                  <p className="mt-2 text-sm text-gray-500">Özünüz haqqında bir neçə cümlə yazın.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-start">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0073ce] hover:border-[#0073ce] hover:bg-white hover:text-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                disabled={!passwordMatch}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

