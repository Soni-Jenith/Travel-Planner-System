import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from '../src/components/LoginComponents/LoginRegister.js';
import AdminPage from '../src/components/LoginComponents/AdminPage.js';
import VerifyOpt from '../src/components/LoginComponents/VerifyOpt.js';
import BeforeLogin from './components/BeforeLogIn/BeforeLogin';
import AfterLogin from './components/AfterLogin/AfterLogin';
import UserProfile from './components/AfterLogin/UsesProfile.js';

// import temp_home from './../src/components/LoginComponents/_home.js'

import {is_authenticated_user} from '../src/components/LoginComponents/sub_component/get_user_info.js'
import {admin_web_url_code} from '../src/components/LoginComponents/sub_component/All_data.js'

function App() {
  return (
    <Router>
     <Routes>
     <Route path="/" element={is_authenticated_user() ? <AfterLogin /> :<BeforeLogin />} />
       <Route path="/UserLogin" element={is_authenticated_user() ? <AfterLogin /> :<LoginRegister />} />
       {/* <Route path="/" element={is_authenticated_user() ? <BeforeLogin /> :<LoginRegister />} /> */}
       <Route path="/verify_otp" element={<VerifyOpt />} />
       <Route path={admin_web_url_code} element={<AdminPage />} />
       <Route path="/user-profile" element={<UserProfile/>} />
     </Routes>
    </Router>
    
  );
}

export default App;



// Login PArt to be kept




