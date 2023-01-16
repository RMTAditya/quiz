import React from 'react'
import Home from './Home'
import Java from './JAVA/Java';
import Dbms from './DBMS/Dbms';
import Pdsa from './PDSA/Pdsa';
import Mad1 from './MAD1/Mad1';
import Mad2 from './MAD2/Mad2';
import Syscmd from './SYSCMD/Syscmd';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const DP = () => {
  return (
   <div>
    <Router>

      <Routes>
          <Route exact path='/dp' element={<Home/>}></Route>
          <Route path="/dbms" element={<Dbms />}></Route>
          <Route path="/java" element={<Java />}></Route>
          <Route path="/pdsa" element={<Pdsa />}></Route>
          <Route path="/mad1" element={<Mad1 />}></Route>
          <Route path="/mad2" element={<Mad2 />}></Route>
          <Route path="/syscmd" element={<Syscmd />}></Route>
      </Routes>
    </Router>

    </div>
  )
}

export default DP