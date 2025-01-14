import React from 'react'
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
     <div className="p-1 sm:ml-64 bg-gray-200 dark:bg-gray-900 rounded-2xl">
           {/* Main Container */}
           <div className=" border-gray-600 dark:border-gray-700 ">
             {/* Grid Layout */}
             <div className="">
               {/* Navbar Section */}
               <div className="col-span-3 sm:col-span-1 flex justify-between items-center dark:bg-gray-800 p-2 rounded-lg">
                 {" "}
                 {/* Reduced padding from p-4 to p-2 */}
                 {/* Page Title */}
                
                 {/* Right Side of Navbar */}
                 <div className="flex  space-x-4 ">
                   {/* Search Bar */}
                   <div className="relative">
                     <input
                       type="text"
                       className="p-2 pl-10 border border-gray-600 rounded-3xl bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-200 dark:text-white focus:border-gray-400 dark:focus:border-gray-500 "
                       placeholder="Search..."
                     />
                     <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                   </div> 
                 </div>
                 <div className='flex items-center gap-5' >
                  <div className="relative">
                     <FaBell className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer" />
                     {/* Badge for unread notifications */}
                     <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                   </div>
   
                   {/* Message Icon */}
                   <div className="relative">
                     <FaEnvelope className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer" />
                     {/* Badge for unread messages */}
                     <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                   </div>
   
                   {/* Profile Section */}
                   <div className="flex items-center space-x-2">
                     {/* Profile Image */}
                     <img
                       src="https://randomuser.me/api/portraits/men/32.jpg" // This is a sample profile image URL
                       alt="Profile"
                       className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
                     />
   
                     {/* User Name */}
                     {/* <span className="text-white dark:text-white text-sm">
                       Uzair
                     </span> */}
                   </div>
                   </div>
                 
               </div>
             </div>
   
             {/* Additional Content Below Navbar */}
           </div>
         </div>
  )
}

export default Navbar