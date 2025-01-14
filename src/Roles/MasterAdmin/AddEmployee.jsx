import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // Import HTML5 backend
import { DndProvider } from "react-dnd"; // Import DndProvider

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
    salary: 0,
    address: "",
    status: "Active", // Default status
  });
  const [imagePreviews, setImagePreviews] = useState([]); // Keep previews here

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
    const files = Array.from(e.target.files || []); // Ensure files is an array
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes
    let validImages = [];
    let invalidImages = [];

    // Validate selected images
    files.forEach((file) => {
      if (file.size > maxSize) {
        // If file size exceeds 50MB, add it to the invalidImages array
        invalidImages.push(file);
      } else {
        // Otherwise, add to the validImages array
        validImages.push(file);
      }
    });

    // If there are any invalid images, show an error message
    if (invalidImages.length > 0) {
      setError(
        `The following images exceed the 50MB size limit: ${invalidImages
          .map((file) => file.name)
          .join(", ")}`
      );
    } else {
      setError(""); // Clear any previous error
    }

    // Add only valid images to the state
    setImages((prevImages) => [...prevImages, ...validImages]);

    // Create image previews
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

  // Handle image removal
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
        "https://inventory-app-b.vercel.app/product/postemployee",
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

      const result = await response.json();
      alert("Employee added successfully!");
      navigate("/hr");
    } catch (error) {
      setError("An error occurred while adding the employee.");
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
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter employee's name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300  rounded-md text-sm mb-2"
              placeholder="Enter employee's email"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Designation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter designation"
              required
            />
          </div>

          {/* Department Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter department"
              required
            />
          </div>

          {/* Joining Date Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Joining Date
            </label>
            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              required
            />
          </div>

          {/* Age Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500  font-bold mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              required
            />
          </div>

          {/* Birth Date Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500  font-bold mb-1">
              Birth Date
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              placeholder="Enter birth date"
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              required
            />
          </div>

          {/* Salary before probation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Salary Before Probation
            </label>
            <input
              type="number"
              name="salary"
              // value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter salary Before Probation"
              required
            />
          </div>

          {/* Salary before probation Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Salary After Probation
            </label>
            <input
              type="number"
              name="salary"
              // value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter salary After Probation"
              required
            />
          </div>

          {/* Add Score Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Add Score
            </label>
            <input
              type="number"
              name="Score"
              // value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="Enter Score"
              required
            />
          </div>

 {/* Add CNIC Field */}
 <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              CNIC
            </label>
            <input
              type="number"
              name="CNIC"
              // value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2"
              placeholder="00000-0000000-0"
              required
            />
          </div>


          {/* Address Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300  rounded-md text-sm mb-2 bg-[#242b37] text-white"
              placeholder="Enter address"
              required
            ></textarea>
          </div>

          {/* Status Field */}
          <div className="form-group mb-4">
            <label className="form-label text-gray-500 font-bold mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 bg-gray-300 rounded-md text-sm mb-2 bg-[#242b37] text-white"
              required
            >
              <option value="OnSite">OnSite</option>
              <option value="Remote">Remote</option>
              <option value="Resigned">Resigned</option>
            </select>
          </div>

          {/* Submit Button */}
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
        {" "}
        <DndProvider backend={HTML5Backend}>
        {/* Wrap your app with DndProvider */}
        <div className="lg:w-[700px] mt-5">
      <div className="mt-5 mx-3 bg-gray-200 p-6 border border-grey-200 shadow-md">
        <h2 className="text-2xl font-semibold text-black mb-4">Upload pictures</h2>
        <p className="text-gray-600 mb-4">
          Upload an image. Recommended size: 2048x1024 and less than 50MB.
        </p>

        {/* Display error if any */}
        {error && <div className="text-red-500">{error}</div>}

        {/* Image Preview */}
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
