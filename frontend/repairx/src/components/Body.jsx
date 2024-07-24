import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const category = [
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

const Body = () => {
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/technicians', { state: { location, category: selectedCategory } });
  };

  return (
    <div className=''>
      <div className="py-8">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          {/* Location Search Bar */}
          <div className="w-full max-w-xs">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          
          {/* Category Select Dropdown */}
          <div className="w-full max-w-xs">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Select Category</option>
              {category.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="px-4 py-2 mt-7 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
          
        </div>
        <div className="space-y-8 p-8">
      {/* First Section */}
      <div className="relative bg-orange-300 p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-8">
          <div className="flex-1">
            <p className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem mollitia et ad rem! Qui, nemo consequatur quas ipsam repellendus, deleniti, iste neque excepturi ut porro sunt suscipit officiis aspernatur!
            </p>
          </div>
          <img className="w-[30rem] h-auto rounded-lg shadow-md" src="https://startupsmagazine.co.uk/sites/default/files/2023-03/main-tools.png" alt="Tools" />
        </div>
      </div>

      {/* Second Section */}
      <div className="relative bg-yellow-200 p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-8">
          <div className="flex-1">
            <p className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem mollitia et ad rem! Qui, nemo consequatur quas ipsam repellendus, deleniti, iste neque excepturi ut porro sunt suscipit officiis aspernatur!
            </p>
          </div>
          <img className="w-[30rem] h-auto rounded-lg shadow-md" src="https://factech.co.in/blog/wp-content/uploads/2021/05/illustration-characters-fixing-cogwheel_53876-40796.jpg" alt="Fixing Cogwheel" />
        </div>
      </div>

      {/* Third Section */}
      <div className="relative bg-green-400 p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-8">
          <div className="flex-1">
            <p className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem mollitia et ad rem! Qui, nemo consequatur quas ipsam repellendus, deleniti, iste neque excepturi ut porro sunt suscipit officiis aspernatur!
            </p>
          </div>
          <img className="w-[30rem] h-auto rounded-lg shadow-md" src="https://iaihnwlotim.ac.id/wp-content/uploads/2022/12/Maintenance-Page.jpg" alt="Maintenance" />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Body;
