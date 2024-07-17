import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutApp from './user_profile/About/about_app';
import HomeApp from './user_profile/home page/home_page_app';
import LawyerDirectoryApp from "./user_profile/lawyery directory/lawyerderectory_app";
import Result from "./user_profile/resutl_page/result_app";
import DeatailApp from "./user_profile/deatil info/detail_app";
import ReviewApp from "./user_profile/review lawyer/review_app";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/Home" element={<HomeApp />} />
        <Route path="/About_us" element={<AboutApp />} />
        <Route path="/Lawyer_directory" element={<LawyerDirectoryApp />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Detail_App" element={<DeatailApp />} />
        <Route path="/review" element={<ReviewApp />} />
      </Routes>
    </Router>
  );
}

export default App;
