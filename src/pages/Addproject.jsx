import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomerAndProject = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    projectName: "",
    projectBudget: 0,
    projectDeadline: "",
    projectRequirements: "",
    projectHours: 0,
    hourlyRate: 0,
  });

  const [showCustomerDetails, setShowCustomerDetails] = useState(false); // State to toggle customer details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Handle form submission logic here
    // Example: sending data to an API or saving in the state
    console.log(formData);
    setLoading(false);
    navigate("/success");  // Navigate after successful form submission
  };

  return (
    <div className="flex">
      <div className="order-form-container w-2/4 mt-5 mx-3 bg-gray-200 p-6 border border-gray-200 shadow-md">
        <h2 className="text-center text-gray-500 text-xl mb-5 border-b-2">
          Project Details
        </h2>
        {error && (
          <div className="error-message text-red-500 text-sm mb-3">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Project Details */}
          <h3 className="text-lg text-gray-600 font-bold mb-4">Project Details</h3>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Project Budget</label>
            <input
            //   type="number"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              placeholder="Enter project budget"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Project Deadline</label>
            <input
              type="date"
              name="projectDeadline"
              value={formData.projectDeadline}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Requirements</label>
            <textarea
              name="projectRequirements"
              value={formData.projectRequirements}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              placeholder="Enter project requirements"
              required
            ></textarea>
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Project Hours</label>
            <input
            //   type="number"
              name="projectHours"
              value={formData.projectHours}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              placeholder="Enter project hours"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Hourly Rate</label>
            <input
            //   type="number"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
              placeholder="Enter hourly rate"
              required
            />
          </div>

          {/* Button to show Customer Details */}
          <div className="form-buttons mb-4">
            <button
              type="button"
              onClick={() => setShowCustomerDetails(true)}
              className="bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer"
            >
              Add Customer Details
            </button>
          </div>

          {/* Customer Details (conditionally rendered) */}
          {showCustomerDetails && (
            <div>
              <h3 className="text-lg text-gray-600 font-bold mb-4">Customer Details</h3>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter last name"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter address"
                  required
                ></textarea>
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-gray-500 font-bold mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 bg-gray-300 text-black rounded-md text-sm mb-2"
                  placeholder="Enter country"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-buttons flex justify-between">
            <button
              type="submit"
              className="publish-btn bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer"
              disabled={loading}
            >
              {loading ? <div className="spinner"></div> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerAndProject;
