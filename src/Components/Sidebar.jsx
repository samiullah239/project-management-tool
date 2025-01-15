import { MdOutlineHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi"; // Sales & Permissions icon
import { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";

// Register necessary chart.js components
const MySidebar = () => {
  const [showHROptions, setShowHROptions] = useState(false); // State to toggle HR options
  const [shiowManagementOption, setShowManagementOption] = useState(false);

  const toggleManagementOption = () => {
    setShowManagementOption(!shiowManagementOption);
  };

  // Toggle HR options visibility
  const toggleHROptions = () => {
    setShowHROptions(!showHROptions);
  };

  return (
    <div className="mb-4">
      {/* Toggle Button for Sidebar (Mobile) */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 px-3 mt-3 mb-3"
        aria-label="Sidebar"
      >
        <div className="h-[96%] px-3 py-4  bg-gray-200 dark:bg-gray-800 rounded-2xl ">
          {/* Sidebar Header (Dashboard + HRM Logo) */}
          <div className="flex items-center justify-between p-4 mb-4">
            <h2 className="text-black text-xl font-semibold">Management</h2>
            {/* Sample HRM Logo */}
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Iconic_image_of_human_resources.svg" // Example HRM Logo
              alt="HRM Logo"
              className="w-8 h-8 rounded-full"
            /> */}
          </div>

          {/* Sidebar Items */}
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={toggleHROptions} // Toggle on click
                className="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <MdOutlineHome className="w-5 h-5 text-black group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3 cursor-pointer">HR</span>
              </a>

              {/* Dropdown options */}
              {showHROptions && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="/hr/dashboard"
                      className="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700"
                    >
                      <TbLayoutDashboardFilled className="w-5 h-5 text-black group-hover:text-gray-900 dark:group-hover:text-white" />

                      <span className="ms-3">Dashboard</span>
                    </a>
                  </li>
                  {/* You can add more options here */}
                </ul>
              )}
            </li>
            <li>
              <a
                onClick={toggleManagementOption} // Toggle on click
                className="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
              >
                <GoProjectSymlink className="w-5 h-5 text-black group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3 cursor-pointer">Project Management</span>
              </a>
              {shiowManagementOption && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="/management/dashboard"
                      className="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700"
                    >
                      <TbLayoutDashboardFilled className="w-5 h-5 text-black group-hover:text-gray-900 dark:group-hover:text-white" />

                      <span className="ms-3">Dashboard</span>
                    </a>
                  </li>
                  {/* You can add more options here */}
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
              >
                <HiShoppingBag className="w-5 h-5 text-black group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Sales & Permissions</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Content Area (Rest of the page) */}
    </div>
  );
};

export default MySidebar;
