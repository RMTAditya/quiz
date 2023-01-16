import React from 'react'
// import Dbms from './Dbms'
import {Link} from "react-router-dom";
import {FaHandPointRight,FaHandPointLeft} from 'react-icons/fa'
import Java from './JAVA/Java';
import Dbms from './DBMS/Dbms';
import Pdsa from './PDSA/Pdsa';
import Mad1 from './MAD1/Mad1';
import Mad2 from './MAD2/Mad2';
import Syscmd from './SYSCMD/Syscmd';

const Home = () => {
  return (
    <div className='bg-blue-900  lg:p-32 p-8 flex flex-col' >
      {/* <Dbms/> */}
      <div className='bg-gray-600 flex flex-col justify-center items-center p-8'>
      <h1 className='text-2xl font-medium lg:text-4xl pb-2'>Diploma in Programming</h1>
      <ul>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/dbms">Database Management System</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/java">Programming in Java</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/pdsa">Programming, Data Structures and Algorithm using Python</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/mad1">Mobile App development I</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/mad2">Mobile App development II</Link></li>
        <li className='border-2 border-gray-900 p-1 m-4 text-gray-400 rounded-lg flex justify-center bg-gradient-to-r from-teal-800 to-blue-800'><Link to="/syscmd">System Commands</Link></li>
      </ul>
      </div>
      <div className='sm:flex flex-row justify-between'>
      <p className='text-xl m-4 flex justify-start text-gray-500 font-medium'><Link to="/foundation">Foundation </Link> <FaHandPointLeft className='text-3xl mx-4 text-gray-100'/></p>
      <p className='text-xl m-4 flex justify-end text-gray-500 font-medium'><FaHandPointRight className='text-3xl mx-4 text-gray-100'/><Link to="/ds">Diploma in Data Science</Link></p>
      </div>
    </div>
    )
}

export default Home