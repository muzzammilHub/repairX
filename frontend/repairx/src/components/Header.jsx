import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = async () => {
    try {
      await axios.get('http://127.0.0.1:4000/api/v1/user/logout', {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
          }
      })
      localStorage.removeItem('userToken')
      setIsLoggedIn(false)
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/" className="hover:text-gray-400">RepairX</a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/features" className="text-gray-300 hover:text-white">Features</a>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="text-gray-300 hover:text-white">Login</a>
              <a href="/signup" className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700">Sign Up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
