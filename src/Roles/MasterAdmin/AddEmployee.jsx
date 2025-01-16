import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const ImageItem = ({ image, index, moveImage, handleRemoveImage }) => {
  const [, drag] = useDrag({
    type: "IMAGE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (item) => {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="flex items-center mb-4 cursor-move"
    >
      <img
        src={image}
        alt={`Preview ${index}`}
        className="border border-gray-300 w-14 h-14 object-cover"
      />
      <div className="ml-4 flex flex-1 items-center">
        <p className="text-sm text-gray-700 flex-1">Image {index + 1}</p>
        <button
          type="button"
          onClick={() => handleRemoveImage(index)}
          className="text-red-500 hover:text-red-700 text-sm ml-4"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    joiningDate: "",
    birthDate: "",
    age: "",
    salaryBeforeProbation: "",
    salaryAfterProbation: "",
    score: "",
    cnic: "",
    address: "",
    status: "OnSite", // Default status
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const maxSize = 50 * 1024 * 1024;
    let validImages = [];
    let invalidImages = [];

    files.forEach((file) => {
      if (file.size > maxSize) {
        invalidImages.push(file);
      } else {
        validImages.push(file);
      }
    });

    if (invalidImages.length > 0) {
      setError(
        `The following images exceed the 50MB size limit: ${invalidImages
          .map((file) => file.name)
          .join(", ")}`
      );
    } else {
      setError("");
    }

    setImages((prevImages) => [...prevImages, ...validImages]);

    const newImagePreviews = validImages.map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    const [movedPreview] = updatedPreviews.splice(fromIndex, 1);
    updatedPreviews.splice(toIndex, 0, movedPreview);
    setImagePreviews(updatedPreviews);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/employee/addEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "An unknown error occurred.");
        setLoading(false);
        setTimeout(() => setError(""), 3000);
        return;
      }

      alert("Employee Added successfully");
      navigate("/hr/dashboard");
    } catch (error) {
      setError("An error occurred while adding the employe.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="order-form-container w-2/4 mt-5 mx-3 bg-gray-200 p-6 border border-gray-200 shadow-md">
        <h2 className="text-center text-gray-500 text-xl mb-5 border-b-2">
          Add New Employee
        </h2>
        {error && (
          <div className="error-message text-red-500 text-sm mb-3">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter employee's name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter employee's email"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Designation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter designation"
              required
            />
          </div>

          {/* Department Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter department"
              required
            />
          </div>

          {/* Joining Date Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              required
            />
          </div>

          {/* Age Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter age"
              required
            />
          </div>

          {/* Birth Date Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              required
            />
          </div>

          {/* Salary Before Probation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Salary Before Probation</label>
            <input
              type="number"
              name="salaryBeforeProbation"
              value={formData.salaryBeforeProbation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter salary before probation"
              required
            />
          </div>

          {/* Salary After Probation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Salary After Probation</label>
            <input
              type="number"
              name="salaryAfterProbation"
              value={formData.salaryAfterProbation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter salary after probation"
              required
            />
          </div>

          {/* Score Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Score</label>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter score"
              required
            />
          </div>

          {/* CNIC Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">CNIC</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter CNIC"
              required
            />
          </div>

          {/* Address Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter address"
              required
            />
          </div>

          {/* Status Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-black bg-gray-300 rounded-md text-sm mb-2"
            >
              <option value="OnSite">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Resigned">Resigned</option>
            </select>
          </div>

          <div className="form-buttons flex justify-between">
            <button
              type="submit"
              className="publish-btn bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer"
              disabled={loading}
            >
              {loading ? <div className="spinner"></div> : "Add Employee"}
            </button>
          </div>
        </form>
      </div>

      <div>
        <DndProvider backend={HTML5Backend}>
          <div className="lg:w-[700px] mt-5">
            <div className="mt-5 mx-3 bg-gray-200 p-6 border border-grey-200 shadow-md">
              <h2 className="text-2xl font-semibold text-black mb-4">Upload pictures</h2>
              <p className="text-gray-600 mb-4">
                Upload an image. Recommended size: 2048x1024 and less than 50MB.
              </p>

              {imagePreviews.length > 0 ? (
                imagePreviews.map((image, index) => (
                  <ImageItem
                    key={index}
                    index={index}
                    image={image}
                    moveImage={moveImage}
                    handleRemoveImage={handleRemoveImage}
                  />
                ))
              ) : (
                <div className="flex items-center mb-4">
                  <img
                    src="https://sp-seller.webkul.com/img/No-Image/No-Image-140x140.png"
                    alt="Preview"
                    className="border border-gray-300 w-24 h-24 object-cover"
                  />
                  <div className="ml-4 flex flex-1 items-center">
                    <p className="text-sm text-gray-700 flex-1">No images uploaded</p>
                  </div>
                </div>
              )}

              <button
                onClick={() => document.getElementById("images").click()}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded"
              >
                Upload Image
              </button>
              <input
                type="file"
                id="images"
                onChange={handleImageChange}
                multiple
                className="hidden"
              />
            </div>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default AddEmployee;
