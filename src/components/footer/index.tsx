import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#42A1FA] py-8 px-10 font-[sans-serif] mt-7">
      <div className="md:max-w-[50%] mx-auto text-center">
        <Link to="/" className="inline-block">
          <img src="/assets/images/logo.svg" 
            alt="logo"
            className='w-[5rem]'/>
        </Link>
        <p className="text-sm mt-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
          mi eu pulvinar cursus, sem elit interdum mauris dipiscing elit. Aenean gravida,
          mi eu pulvinar cursus. <Link to="/" className="text-sm font-semibold text-[#333]">Read
            more...</Link></p>
        <ul className="mt-6">
          <li className="space-x-4">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white inline w-8 h-8 hover:bg-white hover:fill-[#007bff] rounded-full px-1 py-1  transition-colors" viewBox="0 0 24 24">
                <path 
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                />
              </svg>
            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white inline w-8 h-8 hover:bg-white hover:fill-[#007bff] rounded-full px-1 py-1  transition-colors"
                viewBox="0 0 24 24">
                <path 
                  d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                />
              </svg>
            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white inline w-8 h-8 hover:bg-white hover:fill-[#007bff] rounded-full px-1 py-1 transition-colors"
                viewBox="0 0 24 24">
                <path
                  d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
              </svg>
            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white inline w-8 h-8 hover:bg-white hover:fill-[#007bff] rounded-full px-1 py-1  transition-colors"
                viewBox="0 0 24 24">
                <path
                  d="m10 15 5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white inline w-8 h-8 hover:bg-white hover:fill-[#007bff] rounded-full px-1 py-1  transition-colors"
                viewBox="0 0 24 24">
                <path 
                  d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 mx-10 sm:ml-24 gap-12 mt-16 place-items-center">
        <li className="flex items-center max-w-[300px] w-full">
          <div id="myDiv" className="border border-[#fff] bg-[#42A1FA] hover:bg-gray-900 hover:text-white h-10 w-10 rounded-full hover:shadow-md  flex items-center justify-center shrink-0 cursor-pointer">
            <svg id="mySvg" className='text-[#007bff] hover:text-white w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.6 482.6">
              <path fill="currentColor"
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000" />
            </svg>
          </div>
          <Link to="/" className="text-white text-sm ml-3">
            <small className="block">Tel</small>
            <strong>180-548-2588</strong>
          </Link>
        </li>
        <li className="flex items-center max-w-[300px] w-full">
          <div id="myDiv" className="border border-[#fff] bg-[#42A1FA] hover:bg-gray-900 hover:text-white h-10 w-10 rounded-full hover:shadow-md  flex items-center justify-center shrink-0 cursor-pointer">
            <svg id="mySvg" className='text-[#007bff] hover:text-white w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.058 479.058">
              <path fill="currentColor"
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000" />
            </svg>
          </div>
          <Link to="/" className="text-white text-sm ml-3">
            <small className="block">Mail</small>
            <strong>info@example.com</strong>
          </Link>
        </li>
        <li className="flex items-center max-w-[300px] w-full">
        <div id="myDiv" className="border border-[#fff] bg-[#42A1FA] hover:bg-gray-900 hover:text-white h-10 w-10 rounded-full hover:shadow-md  flex items-center justify-center shrink-0 cursor-pointer">
          <svg id="mySvg" className='text-[#007bff] hover:text-white w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.16 368.16">
              <path fill="currentColor"
                  d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                  data-original="#000000" />
              <path fill="currentColor"
                  d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                  data-original="#000000" />
          </svg>
        </div>

          <Link to="/" className="text-white text-sm ml-3">
            <small className="block">Address</small>
            <strong>123 Main Street City, Country</strong>
          </Link>
        </li>
        <li className="flex items-center max-w-[300px] w-full">
          <div id="myDiv" className="border border-[#fff] bg-[#42A1FA] hover:bg-gray-900 hover:text-white h-10 w-10 rounded-full hover:shadow-md  flex items-center justify-center shrink-0 cursor-pointer">
            <svg id="mySvg" xmlns="http://www.w3.org/2000/svg" className='text-[#007bff] hover:text-white w-5 h-5' viewBox="0 0 100 100">
              <path fill="currentColor"
                d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                data-original="#000000" />
            </svg>
          </div>
          <Link to="/" className="text-white text-sm ml-3">
            <small className="block">Fax</small>
            <strong>+1-548-2588</strong>
          </Link>
        </li>
      </ul>
      <hr className="my-8 border-gray-300" />
      <div className="md:flex md:item-center">
        <ul className="flex flex-wrap gap-4">
          <li className="text-sm">
            <Link to="/" className='text-white font-semibold hover:underline'>Terms of Service</Link>
          </li>
          <li className="text-sm">
            <Link to="/" className='text-white font-semibold hover:underline'>Privacy Policy</Link>
          </li>
          <li className="text-sm">
            <Link to="/" className='text-white font-semibold hover:underline'>Security</Link>
          </li>
        </ul>
        <p className='text-sm text-white ml-auto max-md:mt-4'>Copyright © 2024<Link to="/"
          target='_blank' className="hover:underline mx-1">All Service</Link>All Rights Reserved.</p>
      </div>
    </footer>
  )
}
