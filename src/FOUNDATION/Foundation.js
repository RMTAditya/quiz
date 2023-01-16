import React from 'react'
import Home from './Home'

import Maths1 from './MATHS1/Maths1'
import Maths2 from './MATHS2/Maths2';
import Stats1 from './STATS1/Stats1'
import Stats2 from './STATS2/Stats2'
import Comp from './COMP/Comp'
import Python from './PYTHON/Python'
import Eng1 from './ENG1/Eng1'
import Eng2 from './ENG2/Eng2'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Foundation = () => {
  return (
   <div>
    <Router>

      <Routes>
          <Route exact path='/foundation' element={<Home/>}></Route>
          <Route path="/maths1" element={<Maths1 />}></Route>
          <Route path="/maths2" element={<Maths2 />}></Route>
          <Route path="/stats1" element={<Stats1 />}></Route>
          <Route path="/stats2" element={<Stats2 />}></Route>
          <Route path="/comp" element={<Comp />}></Route>
          <Route path="/python" element={<Python />}></Route>
          <Route path="/eng1" element={<Eng1 />}></Route>
          <Route path="/eng2" element={<Eng2 />}></Route>

      </Routes>
      
    </Router>

    </div>
  )
}

export default Foundation