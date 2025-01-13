import { MdOutlineHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi"; // Sales & Permissions icon

// Register necessary chart.js components
const MySidebar = () => {
   

  return (
    <div>
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
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
      
      {/* Sidebar Header (Dashboard + HRM Logo) */}
      <div className="flex items-center justify-between p-4 mb-4">
        <h2 className="text-white text-xl font-semibold">Management</h2>
        {/* Sample HRM Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Iconic_image_of_human_resources.svg" // Example HRM Logo
          alt="HRM Logo"
          className="w-8 h-8 rounded-full"
        />
      </div>

      {/* Sidebar Items */}
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="/hr"
            className="flex items-center p-2 text-white-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
          >
            <MdOutlineHome className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">HR</span>
          </a>
        </li>
        <li>
          <a
            href="/management"
            className="flex items-center p-2 text-white-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
          >
            <GoProjectSymlink className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Project Management</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-white-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
          >
            <HiShoppingBag className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
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
