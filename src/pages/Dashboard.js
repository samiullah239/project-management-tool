import { BiBuoy } from "react-icons/bi";
import { MdOutlineHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi"; // Sales & Permissions icon
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { useState } from "react";
// Register necessary chart.js components
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, // For Bar chart
    LineElement, 
    PointElement, 
    Title, 
    Tooltip, 
    Legend
  );
    
const Dashboard = () => {
    const data = {
        labels: [
          "May 2024", 
          "June 2024", 
          "July 2024", 
          "August 2024", 
          "September 2024", 
          "October 2024"
        ],
        datasets: [
          {
            label: "Total Employees",
            data: [150, 160, 170, 180, 190, 200], // Sample data, can be replaced by actual HR data
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Resigned Employees",
            data: [10, 12, 15, 18, 20, 25], // Sample data
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Remote Employees",
            data: [30, 40, 50, 60, 70, 80], // Sample data
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      };
    
      const options = {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
            },
            type: "category",
          },
          y: {
            title: {
              display: true,
              text: "Number of Employees",
            },
            min: 0,
          },
        },
      };
      const attendanceData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Attendance (%)",
            data: [95, 93, 98, 90, 92, 89], // Percentage of employees attending work each month
            backgroundColor: "rgba(34, 197, 94, 0.6)", // Green bars for attendance
            borderColor: "rgba(34, 197, 94, 1)",
            borderWidth: 2,
          },
        ],
      };
    
      // Chart options for the attendance bar chart
      const attendanceOptions = {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              color: "rgba(255, 255, 255, 0.6)",
            },
            type: "category",
          },
          y: {
            title: {
              display: true,
              text: "Attendance Percentage",
              color: "rgba(255, 255, 255, 0.6)",
            },
            min: 0,
            max: 100,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
        },
      };
   

    const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
    const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  return (
    <div className="dashboard-content">
       <div className="p-1 sm:ml-64 bg-gray-800 dark:bg-gray-900">
  {/* Main Container */}
  <div className=" border-b-2 border-gray-600 dark:border-gray-700">
    {/* Grid Layout */}
    <div className="grid grid-cols-3 gap-4 mb-4">
      {/* Navbar Section */}
      <div className="col-span-3 sm:col-span-1 flex justify-between items-center dark:bg-gray-800 p-2 rounded-lg"> {/* Reduced padding from p-4 to p-2 */}
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-white">
          HR {/* This will be dynamic depending on the page */}
        </h1>

        {/* Right Side of Navbar */}
        <div className="flex items-center space-x-4 ml-[600px]">
          {/* Search Bar */}
          <div className="relative">
  <input
    type="text"
    className="p-2 pl-10 border border-gray-600 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600 text-gray-200 dark:text-white focus:border-gray-400 dark:focus:border-gray-500"
    placeholder="Search..."
  />
  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
</div>


          {/* Notification Icon */}
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
            <span className="text-white dark:text-white text-sm">
              Uzair
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Content Below Navbar */}
    
  </div>
</div>

      {/* Content Area (tracking employes) */}

      <div className="p-1 sm:ml-64  ">
  {/* Stats Section Below Navbar */}
  <div className="grid grid-cols-4 gap-4 mt-2 p-2">
  {/* Total Employees Section */}
  <div className="flex flex-col bg-gray-900 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm text-white">Total Employees</h3>
    <span className="text-2xl text-white mt-2">150</span>
  </div>

  {/* Resigned Employees Section */}
  <div className="flex flex-col bg-gray-900 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm text-white">Resigned Employees</h3>
    <span className="text-2xl text-white mt-2">20</span>
  </div>

  {/* Onsite Employees Section */}
  <div className="flex flex-col bg-gray-900 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm text-white">Onsite Employees</h3>
    <span className="text-2xl text-white mt-2">30</span>
  </div>

  {/* Remote Employees Section */}
  <div className="flex flex-col bg-gray-900 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm text-white">Remote Employees</h3>
    <span className="text-2xl text-white mt-2">30</span>
  </div>
</div>

</div>

      {/* Content Area (Attendence charts) */}

      <div className="p-1 sm:ml-64 dark:bg-gray-900">
      {/* Main Container with Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* First Chart - Statistics (Line Chart) */}
        <div className="bg-gray-900 rounded-lg p-6 w-full ml-2">
          <h2 className="text-lg font-semibold text-gray-700 text-center">Statistics</h2>
          <Line data={data} options={options} />
        </div>

        {/* Second Chart - Attendance (Bar Chart) */}
        <div className="bg-gray-900 rounded-lg p-6 w-full">
          <h2 className="text-lg font-semibold text-gray-700 text-center">Attendance</h2>
          <Bar data={attendanceData} options={attendanceOptions} />
        </div>
      </div>
    </div>

    
     
    <div className="p-1 sm:ml-64">
      {/* Stats Section Below Navbar */}
      <div className="grid grid-cols-4 gap-4 mt-2 p-2">
        {/* Employee List Box */}
        <div className="col-span-4 bg-gray-900 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            {/* Heading, Search Bar & Dropdowns */}
            <div className="flex items-center space-x-4">
              <h3 className="text-xl text-white">List Employees</h3>
              
              {/* Search Bar with Icon on the Right */}
              {/* <div className="relative flex items-center ml-auto">
                <input
                  type="text"
                  className="p-2 pl-8 border border-gray-600 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600 text-gray-200 dark:text-white focus:border-gray-400 dark:focus:border-gray-500"
                  placeholder="Search..."
                />
                <FaSearch className="absolute left-3 text-gray-400 dark:text-gray-500" />
              </div> */}
            </div>

            {/* Dropdowns & Export Button */}
            <div className="flex items-center space-x-4">
              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setStatusDropdownOpen(true)}
                  onMouseLeave={() => setStatusDropdownOpen(false)}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Status
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {statusDropdownOpen && (
                  <div className="z-10 absolute mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Active
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Inactive
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Suspended
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Roles Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setRolesDropdownOpen(true)}
                  onMouseLeave={() => setRolesDropdownOpen(false)}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Roles
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {rolesDropdownOpen && (
                  <div className="z-10 absolute mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Admin
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Manager
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Employee
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Export Button */}
              <button className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-lg">
                Add Employee
              </button>
            </div>
          </div>

          {/* Employee Table */}
          <div className="overflow-x-auto bg-gray-900 dark:bg-gray-800 rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-200 dark:text-gray-400">
              <thead className="bg-gray-700 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3">Payroll ID</th>
                  <th className="px-4 py-3">Employee</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Total Salary</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Employee Data */}
                <tr>
                  <td className="px-4 py-2">001</td>
                  <td className="px-4 py-2 flex items-center">
                    {/* <img
              src="https://randomuser.me/api/portraits/men/32.jpg" // This is a sample profile image URL
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
            /> */}
                    John Doe
                  </td>
                  <td className="px-4 py-2">john.doe@example.com</td>
                  <td className="px-4 py-2">Marketing</td>
                  <td className="px-4 py-2">Manager</td>
                  <td className="px-4 py-2">$50,000</td>
                  <td className="px-4 py-2 text-green-400">Active</td>
                  <td className="px-4 py-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                {/* Other Employee Rows can go here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
