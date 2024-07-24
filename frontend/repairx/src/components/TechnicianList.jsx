import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const TechnicianList = () => {
  const location = useLocation()
  const { location: loc, category } = location.state || {}
  const [technicians, setTechnicians] = useState([])

  useEffect(() => {
    if (loc && category) {
      const fetchTechnicians = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:4000/api/v1/user/technicians', {
            params: { location: loc, category },
          })
          setTechnicians(response.data.technicians)
        } catch (error) {
          console.error('Error fetching technicians:', error)
        }
      }

      fetchTechnicians()
    }
  }, [loc, category])

  return (
    <div className="py-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technician List</h2>
      {technicians.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {technicians.map((tech) => (
            <div key={tech._id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs w-full mx-auto">
              <img
                src={tech.avatar} 
                alt={tech.name}
                className="h-40 object-cover rounded-t-lg mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{tech.name}</h3>
              <p className="text-gray-600 text-center mb-2">Category: {tech.specialization}</p>
              <p className="text-gray-600 text-center mb-4">Experience: {tech.experience} years</p>
              <div className="text-center">
                <Link
                  to={`/technician/${tech._id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No technicians found</p>
      )}
    </div>
  )
}

export default TechnicianList
