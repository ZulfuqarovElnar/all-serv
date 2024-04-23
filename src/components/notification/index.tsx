

export default function Notification() {
  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <div className='relative left-[165px] sm:left-[353px] -top-4 '>
          <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0L26.9234 30H0.0766058L13.5 0Z" fill="#fff"/>
        </svg>
      </div>
      
      <div className='absolute shadow-lg top-[13px] bg-white py-2 z-[1000] min-w-full rounded-lg w-[300px] sm:w-[410px] max-h-[500px] overflow-auto'>
        <div className="flex items-center justify-between my-4 px-4">
          <p className="text-xs text-blue-500 cursor-pointer">Clear all</p>
          <p className="text-xs text-blue-500 cursor-pointer">Mark as read</p>
        </div>
        <ul className="divide-y">
          <li className='py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer'>
            <img src="https://readymadeui.com/profile_2.webp" className="w-12 h-12 rounded-full shrink-0" alt="Profile Picture" />
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Your have a new message from Yin</h3>
              <p className="text-xs text-gray-400 mt-2">Hello there, check this new items in from the your may interested from
                the motion school</p>
              <p className="text-xs text-blue-500 leading-3 mt-2">10 minutes ago</p>
            </div>
          </li>
          <li className='py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer'>
            <img src="https://readymadeui.com/profile_3.webp" className="w-12 h-12 rounded-full shrink-0" alt="Profile Picture"/>
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Your have a new message from Haper</h3>
              <p className="text-xs text-gray-400 mt-2">Hello there, check this new items in from the your may interested from
                the motion school</p>
              <p className="text-xs text-blue-500 leading-3 mt-2">2 hours ago</p>
            </div>
          </li>
          <li className='py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer'>
            <img src="https://readymadeui.com/profile_5.webp" className="w-12 h-12 rounded-full shrink-0"  alt="Profile Picture"/>
            <div className="ml-6">
              <h3 className="text-sm text-[#333] font-semibold">Your have a new message from Seeba</h3>
              <p className="text-xs text-gray-400 mt-2">Hello there, check this new items in from the your may interested from
                the motion school</p>
              <p className="text-xs text-blue-500 leading-3 mt-2">30 minutes ago</p>
            </div>
          </li>
        </ul>
        <p className="text-sm px-4 mt-6 mb-4 inline-block text-blue-500 cursor-pointer">View all Notifications</p>
      </div>
    </div>
  )
}
