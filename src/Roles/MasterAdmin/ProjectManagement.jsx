import Navbar from "../../Components/Navbar";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUser,
  FaUsersSlash,
  FaUsersCog,
  FaHouseUser,
  FaPlus,
  FaVideo,
  FaUserFriends,
} from "react-icons/fa";
import { Badge } from "flowbite-react"; // Import Badge from Flowbite

import ApexCharts from "react-apexcharts";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { CgPlayButtonO } from "react-icons/cg";
import { TbLoader } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the datepicker styles
import { useState } from "react";
import { Link } from "react-router-dom";
const Management = () => {
  const [selectedBadge, setSelectedBadge] = useState(""); // State for the selected badge
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBadge2, setSelectedBadge2] = useState(""); // State for the selected badge
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedColor, setSelectedColor] = useState(""); // Store the color of the selected badge

  const handleBadgeClick = (badgeText) => {
    setSelectedBadge(badgeText); // Set the selected badge
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const handleInputClick = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility on input click
  };

  const handleBadgeClick2 = (badgeText, badgeColor) => {
    setSelectedBadge2(badgeText); // Set the badge text
    setSelectedColor(badgeColor); // Set the badge color
    setDropdownOpen2(false); // Close the dropdown
  };

  const handleInputClicks = () => {
    setDropdownOpen2(!isDropdownOpen2); // Toggle dropdown visibility
  };

  const [chartOptions, setChartOptions] = useState({
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "In Progress",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    labels: ["In Progress", "Completed"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  // Handle the checkbox change
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date

  const [isSearch, setIsSearch] = useState("New Project");
  const handleChange = (e) => {
    setIsSearch(e.target.value); // Update the state when the input changes
  };
  return (
    <div className="dashboard-content">
      <div className="px-3">
        <Navbar />
      </div>

      <div className="sm:ml-[19.5%] bg-gray-300 mt-2 rounded-2xl mr-4">
        <div className=" flex justify-end mr-3">
          <div>
            <button
              className="bg-green-800 text-white px-4 py-2 rounded-3xl mr-2 mt-3 flex items-center hover:bg-green-900"
              onClick={() => setIsVisible(true)}
            >
              <FaPlus className="mr-2" /> Add Project
            </button>

            <div
              className={`slide-page ${isVisible ? "slide-in" : ""}`}
              style={{
                position: "fixed",
                top: 0,
                right: isVisible ? "0" : "-50%",
                width: "41%",
                height: "100%",
                backgroundColor: "white",
                transition: "right 0.3s ease-in-out",
                zIndex: 100,
              }}
            >
              {/* Close/Minimize Option */}
              <div className="p-4">
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-xl hover:bg-gray-300 border rounded"
                >
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>

              <div>
                <input
                  type="text"
                  value={isSearch} // Bind the input value to the state
                  onChange={handleChange} // Update state when the user types
                  className="p-2 text-black text-[1rem] font-[700] pl-8 bg-white-100 border border-white rounded-md focus:bg-white focus:border-white focus:outline-none"
                />
              </div>
              <div
                className="flex flex-col gap-6 overflow-y-auto max-h-[80vh]"
                style={{
                  scrollbarWidth: "thin", // For Firefox
                  scrollbarColor: "#4A5568 #E2E8F0", // For Firefox (thumb color & track color)
                }}
              >
                {" "}
                {/* Enable vertical scroll with max-height */}
                <div className="flex ml-9 gap-10">  
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <IoIosLink className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">store Url</span>
                  </div>
                  <input
                    type="text"
                    placeholder="empty"
                    className=" text-black text-[1rem] pl-2 h-7 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  {/* Icon and Text Section */}
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    <CgPlayButtonO className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[0.9rem]">
                      Project By
                    </span>
                  </div>

                  {/* Input with Badge */}
                  <div className="relative w-[40%]">
                    {/* Input field with badge inside */}
                    <div
                      className="flex items-center justify-between p-2 bg-white-100 border hover:bg-gray-300 border-white rounded-md cursor-pointer focus:outline-none focus:shadow-lg"
                      onClick={handleInputClick}
                    >
                      {selectedBadge ? (
                        // Display the selected badge inside the input
                        <Badge
                          color="info"
                          className="text-xs bg-gray-700 rounded-2xl"
                        >
                          {selectedBadge}
                        </Badge>
                      ) : (
                        <span className="text-gray-600 text-[1rem]">
                          Select a project
                        </span>
                      )}
                    </div>

                    {/* Dropdown with badges */}
                    {isDropdownOpen && (
                      <div className="absolute bg-white border rounded-md mt-2 w-full z-10 shadow-lg">
                        <div
                          onClick={() => handleBadgeClick("Tab On Tech")}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          <Badge className="bg-gray-700 rounded-2xl w-[55%]">
                            Tab On Tech
                          </Badge>
                        </div>
                        <div
                          onClick={() => handleBadgeClick("The Smith")}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          <Badge
                            color=""
                            className="bg-gray-700 rounded-2xl w-[55%]"
                          >
                            The Smith
                          </Badge>
                        </div>
                        <div
                          onClick={() => handleBadgeClick("DropshipHub")}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          <Badge className="bg-gray-700 rounded-2xl w-[55%]">
                            DropshipHub
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex ml-9 gap-10">
                  {/* Icon and Text Section */}
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    <TbLoader  className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[0.9rem]">
                      Status
                    </span>
                  </div>

                  {/* Input with Badge */}
                  <div className="relative w-[40%]">
      {/* Input field with badge inside */}
      <div
        className="flex items-center justify-between p-2 bg-white-100 border hover:bg-gray-300 border-white rounded-md cursor-pointer focus:outline-none focus:shadow-lg"
        onClick={handleInputClicks}
      >
        {selectedBadge2 ? (
          // Display the selected badge inside the input with the selected color
          <Badge color={selectedColor} className="text-xs rounded-2xl">
            {selectedBadge2}
          </Badge>
        ) : (
          <span className="text-gray-600 text-[1rem]">Select a project</span>
        )}
      </div>

      {/* Dropdown with badges */}
      {isDropdownOpen2 && (
        <div className="absolute bg-white border rounded-md mt-2 w-full z-10 shadow-lg">
          <div className="border-b-2">
            <h1 className="text-gray-500 text-sm ml-2">To-do</h1>
            <div
              onClick={() => handleBadgeClick2("BackLog", "gray")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge color="gray" className="rounded-2xl w-[55%]">BackLog</Badge>
            </div>
          </div>
          <div className="border-b-2">
            <h1 className="text-gray-500 text-sm ml-2 mt-2">In Progress</h1>
            <div
              onClick={() => handleBadgeClick2("In Progress", "orange")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge color="orange" className="bg-orange-300 text-gray-700 rounded-2xl w-[55%]">
                In Progress
              </Badge>
            </div>
            <div
              onClick={() => handleBadgeClick2("Amendments", "purple")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-purple-300 text-gray-700 rounded-2xl w-[55%]">
                Amendments
              </Badge>
            </div>
            <div
              onClick={() => handleBadgeClick2("Clients feedback", "blue")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-blue-400 text-gray-700 rounded-2xl w-[70%]">
                Clients feedback
              </Badge>
            </div>
          </div>
          <div className="border-b-2">
            <h1 className="text-gray-500 text-sm ml-2 mt-3">Complete</h1>
            <div
              onClick={() => handleBadgeClick2("QA Ready", "blue")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-blue-300 text-gray-700 rounded-2xl w-[55%]">
                QA Ready
              </Badge>
            </div>
            <div
              onClick={() => handleBadgeClick2("QA Approved", "blue")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-blue-300 text-gray-700 rounded-2xl w-[55%]">
                QA Approved
              </Badge>
            </div>
            <div
              onClick={() => handleBadgeClick2("Complete", "green")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-green-300 text-gray-700 rounded-2xl w-[55%]">
                Complete
              </Badge>
            </div>
            <div
              onClick={() => handleBadgeClick2("Cancelled", "red")}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <Badge className="bg-red-300 text-gray-700 rounded-2xl w-[55%]">
                Cancelled
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <CgPlayButtonO className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Priority</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Medium"
                    className=" text-black text-[1rem] pl-3 h-7 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <FaUserFriends className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Assigned to</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Uzair"
                    className=" text-black text-[1rem] pl-3 h-7 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {/* Calendar Icon and "Deadline" Text */}
                    <IoCalendarOutline className="text-gray-600 mr-2" />
                    <span className="text-gray-600">Deadline</span>
                  </div>

                  {/* DatePicker Input */}
                  <DatePicker
                    selected={selectedDate} // Pass the selected date
                    onChange={(date) => setSelectedDate(date)} // Handle date change
                    placeholderText="Select a date" // Placeholder text
                    className="text-black text-[1rem] pl-3 h-7 bg-white-100  hover:bg-gray-300 border-gray-300 rounded-md focus:bg-white focus:border-blue-500 focus:outline-none cursor-pointer focus:shadow-lg"
                    dateFormat="MMMM d, yyyy" // Format for displaying the date
                    isClearable={true} // Allow clearing the date
                    onClick={(e) => e.stopPropagation()} // Prevent DatePicker from closing when clicking inside
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <FaUserFriends className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Team Lead</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Siraj"
                    className=" text-black text-[1rem] pl-3 h-8 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <FaUserFriends className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Graphics By</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Siraj"
                    className=" text-black text-[1rem] pl-3 h-8 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <FaUserFriends className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">QA By</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Siraj"
                    className=" text-black text-[1rem] pl-3 h-8 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <FaUserFriends className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Client</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Siraj"
                    className=" text-black text-[1rem] pl-3 h-8 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
                <div className="flex ml-9 gap-10">
                  <div className="flex items-center hover:bg-gray-300 cursor-pointer p-1 rounded w-[30%]">
                    {" "}
                    {/* Align icon and text horizontally */}
                    <IoIosLink className="text-gray-600 mr-2" />{" "}
                    {/* Add margin to the right of the icon */}
                    <span className="text-gray-600 ">Figma</span>
                  </div>
                  <input
                    type="text"
                    placeholder="empty"
                    className=" text-black text-[1rem] pl-2 h-7 bg-white-100 border hover:bg-gray-300 border-white rounded-md focus:bg-white focus:border-white focus:outline-none cursor-pointer  focus:shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="bg-white text-green-800 border-green-600 px-4 py-2 rounded-3xl mt-3 hover:bg-gray-400">
            Import Data
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-2 p-2">
          {/* Total Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaUser className="mr-2" /> Total Projects
            </h3>
            <span className="text-2xl text-black mt-2 ml-5">150</span>
          </div>

          {/* Resigned Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              {" "}
              <FaUsersSlash className="mr-2" /> Ended Projects
            </h3>
            <span className="text-2xl text-black mt-2  ml-5">20</span>
          </div>

          {/* Onsite Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaUsersCog className="mr-2" />
              Running Projects
            </h3>
            <span className="text-2xl text-black mt-2  ml-5">30</span>
          </div>

          {/* Remote Employees Section */}
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-black flex items-center">
              <FaHouseUser className="mr-2" />
              Pending Projects
            </h3>
            <span className="text-2xl text-black mt-2 ml-5">30</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Team Collaboration Section */}
          <div className="bg-gray-200 ml-2 border rounded-lg p-2">
            <div className="flex items-center justify-between gap-[230px]">
              <h1 className="text-black">Team Collaboration</h1>
            </div>

            <div
              className="max-h-60 overflow-y-auto mt-3"
              style={{
                scrollbarWidth: "thin", // For Firefox
                scrollbarColor: "#4A5568 #E2E8F0", // For Firefox (thumb color & track color)
              }}
            >
              {/* Member Item 1 */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <span className="text-black text-sm">
                    John Doe <br /> working on service invoice app
                  </span>
                </div>
                <div className="bg-green-900 mr-3">
                  {/* <span c>completed</span> */}
                </div>
              </div>

              {/* Member Item 2 */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <span className="text-black text-sm">
                    John Doe <br /> working on service invoice app
                  </span>
                </div>
                <div className="bg-green-100 mr-3 border rounded-lg">
                  {/* <span className="text-black">completed</span> */}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <span className="text-black text-sm">
                    John Doe <br /> working on service invoice app
                  </span>
                </div>
                <div className="bg-green-100 mr-3 border rounded-lg">
                  {/* <span className="text-black">completed</span> */}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <span className="text-black text-sm">
                    John Doe <br /> working on service invoice app
                  </span>
                </div>
                <div className="bg-green-100 mr-3 border rounded-lg">
                  {/* <span className="text-black">completed</span> */}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <span className="text-black text-sm">
                    John Doe <br /> working on service invoice app
                  </span>
                </div>
                <div className="bg-green-100 mr-3 border rounded-lg">
                  {/* <span className="text-black">completed</span> */}
                </div>
              </div>

              {/* Member Item 3 */}
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
                <span className="text-black text-sm">
                  John Doe <br /> working on service invoice app
                </span>
              </div>

              {/* Add more members here... */}
            </div>
          </div>

          {/* Website Traffic Section */}
          <div className="bg-gray-200 rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mr-2">
            <div className="flex justify-between mb-3">
              <div className="flex justify-center items-center">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
                  Project Overview
                </h5>
                <svg
                  data-popover-target="chart-info"
                  data-popover-placement="bottom"
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                </svg>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="" id="donut-chart">
              <ApexCharts
                options={chartOptions}
                series={chartOptions.series}
                type="donut"
                height={220}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-2 ">
          <div className="bg-gray-200 border rounded-2xl p-3 ml-2 mb-2 w-[49%]">
            <h1 className="text-black font-bold mb-4">Invoice Overview</h1>

            <div className="flex justify-between">
              <h1 className="text-black text-[12px] font-[600]">Over Due</h1>
              <span className="text-black text-[12px]">USD:1222$</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700 mt-2">
              <div className="bg-purple-600 h-1 rounded-full w-[48%]"></div>
            </div>

            <div className="flex justify-between mt-4">
              <h1 className="text-black text-[12px] font-[600]">Not paid</h1>
              <span className="text-black text-[12px]">USD:1222$</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700 mt-2">
              <div className="bg-red-500 h-1 rounded-full w-[48%]"></div>
            </div>

            {/* <div className="flex justify-between mt-4">
    <h1 className="text-black font-[300]">Partially paid</h1>
    <span className="text-black">USD:1222$</span>
  </div>
  <div className="w-full bg-gray-500 rounded-full h-3 dark:bg-gray-700 mt-2">
    <div className="bg-blue-500 h-3 rounded-full w-[48%]"></div>
  </div> */}

            <div className="flex justify-between mt-4">
              <h1 className="text-black text-[12px] font-[600]">Fully paid</h1>
              <span className="text-black text-[12px]">USD:1222$</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700 mt-2">
              <div className="bg-green-500 h-1 rounded-full w-[48%]"></div>
            </div>
          </div>

          <div className="bg-gray-200  border rounded-2xl p-3 w-[23.5%] mb-2">
            <h1 className="text-black font-bold text-xl mb-2">Reminders</h1>

            <span className="text-green-900 font-semibold block mb-1">
              Meeting with Arc
              <br /> Company
            </span>
            <span className="text-gray-500 block mb-2">
              Time: 2:00pm to 4:00pm
            </span>

            <button className="bg-green-800 text-white px-4 py-2 mt-7 rounded-2xl flex items-center gap-2 hover:bg-green-900">
              <FaVideo className="text-white" />
              Start Instant Meeting
            </button>
          </div>

          <div className="bg-gray-200 border rounded-2xl w-[23.5%] mb-2">
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-black font-bold ml-2">Projects</h1>
            </div>
            <div
              className="max-h-60 overflow-y-auto mt-3"
              style={{
                scrollbarWidth: "thin", // For Firefox
                scrollbarColor: "#4A5568 #E2E8F0", // For Firefox (thumb color & track color)
              }}
            >
              {/* Set max height and enable scroll */}
              {/* Member Item 1 */}
              <div className="flex items-center gap-2 mt-2 mr-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2  border-gray-300 dark:border-gray-600"
                />
                <span className="text-black text-sm">
                  Developed api <br /> Due Date: NOV26, 2024
                </span>
              </div>

              {/* Member Item 2 */}
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
                <span className="text-black text-sm">
                  Developed api <br /> Due Date: NOV26, 2024
                </span>
              </div>

              {/* Member Item 3 */}

              {/* Additional items will scroll if more than 5 */}
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
                />
                <span className="text-black text-sm">
                  Developed api <br /> Due Date: NOV26, 2024
                </span>
              </div>

              {/* Add more members here... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
