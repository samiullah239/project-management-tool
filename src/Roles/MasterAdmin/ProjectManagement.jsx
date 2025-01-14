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
} from "react-icons/fa";
import { AnalyticsChart } from "react-analytics-charts";
const Management = () => {
  const chartData = [
    { label: "January", value: 5 },
    { label: "February", value: 8 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 2 },
    { label: "June", value: 9 },
  ];
  return (
    <div className="dashboard-content">
      <div className="px-3">
        <Navbar />
      </div>

      <div className="sm:ml-[19.5%] bg-gray-300 mt-2 rounded-2xl mr-4">
        <div className=" flex justify-end mr-3">
          <button className="bg-green-800 text-white px-4 py-2 rounded-3xl mr-2 mt-3 flex items-center hover:bg-green-900">
            <FaPlus className="mr-2" /> Add Project
          </button>

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

        <div className="flex gap-4">
          <div className="bg-gray-200 ml-2 border rounded-lg p-2">
            <div className="flex items-center justify-between gap-[230px]">
              <h1 className="text-black">Team Collaboration</h1>
              <button className="bg-white text-green-900 text-sm px-4 py-2 rounded-full flex items-center hover:bg-gray-400 border-2 border-green-900">
                <FaPlus className="mr-2" /> Add Member
              </button>
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
              <div className="flex justify-between items-center ">
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
              <div className="flex justify-between items-center ">
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

              {/* Additional items will scroll if more than 5 */}
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

          <div className="bg-gray-200  border rounded-2xl p-3 w-[23.5%]">
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

          <div className="bg-gray-200 border rounded-2xl w-[23.5%]">
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-black font-semibold ml-2">Projects</h1>
              <button className="bg-gray-200 text-green-900 text-sm px-4 py-2 mr-2 rounded-full flex items-center hover:bg-gray-400 border-2 border-green-900">
                <FaPlus className="mr-2" />
                New
              </button>
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
