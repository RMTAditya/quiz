import React from 'react'
import Home from './Home'
import Ba from './BA/Ba';
import Bdm from './BDM/Bdm';
import Mlf from './MLF/Mlf';
import Mlp from './MLP/Mlp';
import Mlt from './MLT/Mlt';
import Tds from './TDS/Tds';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const DS = () => {
  return (
   <div>
    <Router>

      <Routes>
          <Route exact path='/ds' element={<Home/>}></Route>
          <Route path="/ba" element={<Ba />}></Route>
          <Route path="/bdm" element={<Bdm />}></Route>
          <Route path="/mlf" element={<Mlf />}></Route>
          <Route path="/mlt" element={<Mlt />}></Route>
          <Route path="/mlp" element={<Mlp />}></Route>
          <Route path="/tds" element={<Tds />}></Route>
      </Routes>
    </Router>

    </div>
  )
}

export default DS