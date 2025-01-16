import { BiBuoy } from "react-icons/bi";
import { MdOutlineHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi"; // Sales & Permissions icon
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUser,
  FaUsersSlash,
  FaUsersCog,
  FaHouseUser,
} from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
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
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeeCounts, setEmployeeCounts] = useState({
    onsite: 0,
    remote: 0,
    resigned: 0,
    removed: 0,
    total: 0,
  });
  const employeesPerPage = 5;
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(employees.length / employeesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/employee/getEmployee"
        );
        console.log("Response:", response); // Log the raw response object
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the parsed data from the response
        setEmployees(data); // Assuming data is an array of employees
      } catch (err) {
        setError("Error fetching employee data");
        console.error("Error fetching employees:", err); // Log the error
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchEmployeeCounts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/employee/employeeCountsByStatus"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch employee counts");
        }
        const data = await response.json();
        setEmployeeCounts(data); // Update the state with the fetched counts
      } catch (error) {
        console.error("Error fetching employee counts:", error);
      }
    };

    fetchEmployeeCounts();
  }, []);

  const data = {
    labels: [
      "May 2024",
      "June 2024",
      "July 2024",
      "August 2024",
      "September 2024",
      "October 2024",
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
        backgroundColor: "rgb(60, 179, 113)", // Green bars for attendance
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
          color: "gray",
        },
        type: "category",
      },
      y: {
        title: {
          display: true,
          text: "Attendance Percentage",
          color: "gray",
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "gray",
        },
      },
    },
  };

  return (
    <div className="dashboard-content mt-3">
      <div className="px-3">
        <Navbar />
      </div>

      {/* Content Area (tracking employes) */}

      <div className="p-1 sm:ml-64  ">
        {/* Stats Section Below Navbar */}
        <div className="grid grid-cols-4 gap-4 mt-2 p-2">
          {/* Total Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaUser className="mr-2" /> Total Employees
            </h3>
            <span className="text-2xl text-black mt-2 ml-5">
              {employeeCounts.total}
            </span>
          </div>

          {/* Resigned Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              {" "}
              <FaUsersSlash className="mr-2" /> Resigned Employees
            </h3>
            <span className="text-2xl text-black mt-2  ml-5">
              {employeeCounts.resigned}
            </span>
          </div>

          {/* Onsite Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaUsersCog className="mr-2" />
              Onsite Employees
            </h3>
            <span className="text-2xl text-black mt-2  ml-5">
              {employeeCounts.onsite}
            </span>
          </div>

          {/* Remote Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaHouseUser className="mr-2" />
              Remote Employees
            </h3>
            <span className="text-2xl text-black mt-2 ml-5">
              {employeeCounts.remote}
            </span>
          </div>
        </div>
      </div>

      {/* Content Area (Attendence charts) */}

      <div className="p-1 sm:ml-64 dark:bg-gray-200">
        {/* Main Container with Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* First Chart - Statistics (Line Chart) */}
          <div className="bg-gray-200 rounded-lg p-6 w-full ml-2">
            <h2 className="text-lg font-semibold text-gray-700 text-center">
              Statistics
            </h2>
            <Line data={data} options={options} />
          </div>

          {/* Second Chart - Attendance (Bar Chart) */}
          <div className="bg-gray-200 rounded-lg p-6 w-full">
            <h2 className="text-lg font-semibold text-gray-700 text-center">
              Attendance
            </h2>
            <Bar data={attendanceData} options={attendanceOptions} />
          </div>
        </div>
      </div>

      <div className="p-1 sm:ml-64">
        {/* Stats Section Below Navbar */}
        <div className="grid grid-cols-4 gap-4 mt-2 p-2">
          {/* Employee List Box */}
          <div className="col-span-4 bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              {/* Heading, Search Bar & Dropdowns */}
              <div className="flex items-center space-x-4">
                <h3 className="text-xl text-black">List Employees</h3>

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

              <div className="flex items-center space-x-4">
                {/* Export Button */}
                <Link to="/add-employee">
                  <button className="bg-gray-400 hover:bg-gray-600 text-white p-2 rounded-lg">
                    Add Employee
                  </button>
                </Link>
              </div>
            </div>

            {/* Employee Table */}
            <div className="overflow-x-auto bg-gray-200 dark:bg-gray-800 rounded-lg">
              <table className="min-w-full text-sm text-left text-black dark:text-gray-400">
                <thead className="bg-gray-400 dark:bg-gray-400">
                  <tr>
                    <th className="px-4 py-3">Payroll ID</th>
                    <th className="px-4 py-3">Employee</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmployees.map((employee) => (
                    <tr key={employee._id}>
                      <td className="px-4 py-2">{employee._id}</td>
                      <td className="px-4 py-2">{employee.name}</td>
                      <td className="px-4 py-2">{employee.email}</td>
                      <td className="px-4 py-2">{employee.department}</td>
                      <td className="px-4 py-2">{employee.designation}</td>
                      <td className="px-4 py-2 text-green-400">
                        {employee.status}
                      </td>
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
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="pagination-numbers">
                <span>
                  Page {currentPage} of{" "}
                  {Math.ceil(employees.length / employeesPerPage)}
                </span>
              </div>

              <button
                onClick={nextPage}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
