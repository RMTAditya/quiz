import React from 'react'
// import Dbms from './Dbms'
import {Link} from "react-router-dom";
import {FaHandPointRight,FaHandPointLeft} from 'react-icons/fa'


const Home = () => {
  return (
    <div className='bg-blue-900 h-screen lg:p-32 p-8 flex flex-col' >
      {/* <Dbms/> */}
      <div className='bg-gray-600 flex flex-col justify-center items-center p-8'>
      <h1 className='text-2xl font-medium lg:text-4xl pb-2'>Diploma in Data Science</h1>
      <ul>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/ba">Business Analytics</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/bdm">Business Data Management</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/mlf">Machine Learning Foundation</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/mlt">Machine Learning Techniques</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/mlp">Machine Learning Practices</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/tds">Tools in Data Science</Link></li>
      </ul>
      </div>
      <div className='sm:flex flex-row justify-between'>
      <p className='text-xl m-4 flex justify-start text-gray-500 font-medium'><Link to="/foundation">Foundation </Link><FaHandPointLeft className='text-3xl mx-4 text-gray-100'/></p>
      <p className='text-xl m-4 flex justify-end text-gray-500 font-medium'><FaHandPointRight className='text-3xl mx-4 text-gray-100'/><Link to="/dp">Diploma in Programming</Link></p>
      </div>
    </div>
    )
}

export default Home