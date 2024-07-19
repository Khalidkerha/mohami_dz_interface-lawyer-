import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkTableApp from './worktable/worktable_app';
import EditProfilApp from './edit_profile/edit_profil_app';

function App() {
  return (
    <Router basename="/mohami_dz_interface-lawyer-">
      <Routes>
        <Route exact path="/" element={<WorkTableApp />} />
        <Route exact path="/worktable" element={<WorkTableApp />} />
        <Route exact path="/edit_profil" element={<EditProfilApp />} />
      </Routes>
    </Router>
  );
}

export default App;
