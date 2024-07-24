import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TechnicianProfile = () => {
  const { id } = useParams() // Get technician ID from URL
  const [technician, setTechnician] = useState(null)

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:4000/api/v1/user/technician/${id}`)
        setTechnician(response.data.technician)
      } catch (error) {
        console.error('Error fetching technician details:', error)
      }
    }

    fetchTechnician()
  }, [id])

  if (!technician) return <p className="text-center text-gray-500">Loading...</p>

  return (
    <div className="py-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Technician Image */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
            <img
              src={technician.avatar || '/default-avatar.png'} // Fallback image
              alt={technician.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
            />
          </div>
          {/* Technician Details */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{technician.name}</h2>
            <p className="text-lg text-gray-700 mb-2">{technician.specialization}</p>
            <p className="text-sm text-gray-600 mb-1">Experience: <span className="font-semibold">{technician.experience} years</span></p>
            <p className="text-sm text-gray-600 mb-1">Contact: <span className="font-semibold">{technician.contact}</span></p>
            <p className="text-sm text-gray-600 mb-1">Service Area: <span className="font-semibold">{technician.serviceArea}</span></p>
            <p className="text-sm text-gray-600 mb-4">Availability: <span className="font-semibold">{technician.availability}</span></p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Proof of Work</h3>
          {technician.proofOfWork.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technician.proofOfWork.map((url, index) => (
                <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                  <img
                    src={url}
                    alt={`Proof ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No proof of work available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TechnicianProfile
