import React, { useState } from 'react';
import Header from "./Header";
import axios from "axios";

const specializationOptions = [
  "AC Repairing",
  "Refrigerator Repairing",
  "Plumbing",
  "Electrical Work",
  "Carpentry",
  "Heating Repairing",
  "Washing Machine Repairing",
  "Oven and Microwave Repairing",
  "Painting",
  "Pest Control",
  "Gardening",
  "Water Heater Repairing",
  "Computer and Laptop Repairing",
  "Home Cleaning",
  "TV Repairing",
  "Locksmith"
];

const TechnicianDetail = () => {
  const [technician, setTechnician] = useState({
    specialization: '',
    experience: '',
    contact: '',
    serviceArea: '',
    availability: '',
  });
  const [avatar, setAvatar] = useState(null);
  const [proofOfWork, setProofOfWork] = useState([]);

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setProofOfWork(e.target.files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("**************", name, value);
    setTechnician((prevTechnician) => ({
      ...prevTechnician,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("************", technician);
    const formData = new FormData();

    formData.append("technician", JSON.stringify(technician));
    formData.append("avatar", avatar);
    for (let i = 0; i < proofOfWork.length; i++) {
      formData.append('proofOfWork', proofOfWork[i]);
    }

    try {
      const data = await axios.post("http://127.0.0.1:4000/api/v1/user/technician", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
      });

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header />
      <form 
        onSubmit={handleFormSubmit} 
        className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technician Details</h2>

        <div className="mb-4">
          <label htmlFor="specialization" className="block text-gray-700">Specialization</label>
          <select
            name="specialization"
            value={technician.specialization}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select Specialization</option>
            {specializationOptions.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700">Experience (Years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={technician.experience}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={technician.contact}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="serviceArea" className="block text-gray-700">Service Area</label>
          <input
            type="text"
            id="serviceArea"
            name="serviceArea"
            value={technician.serviceArea}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={technician.availability}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <small className="text-gray-500">Comma separated values (e.g., Monday, Wednesday, Friday)</small>
        </div>

        <div className="mb-4">
          <label htmlFor="profilePicture" className="block text-gray-700">Profile Picture</label>
          <input
            type='file'
            name='avatar'
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="proofOfWork" className="block text-gray-700">
            Proof of Work Images:
          </label>
          <input
            type="file"
            id="proofOfWork"
            multiple
            onChange={handleFileChange2}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TechnicianDetail;
