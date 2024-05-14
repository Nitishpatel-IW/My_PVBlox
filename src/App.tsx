import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MobileLogin from './libs/ui/src/components/forms/mobileLogin';
import OTP from './libs/ui/src/components/forms/otp';
import Landing from './page/landing';
import Opportunity from './page/opportunities';
import Dashboard from './libs/ui/src/components/dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<MobileLogin/>}/>
            <Route path="dashboard" element={<Landing/>}/>
            <Route path="opportunities" element={<Opportunity/>} />
            <Route path='users'>
       
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
