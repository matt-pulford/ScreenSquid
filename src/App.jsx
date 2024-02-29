import React from 'react';
import Navbar from './Navbar'; // Assuming you have this component
// import Footer from './Footer'; // Assuming you have this component
import AppRoutes from './Routes';
import './css/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className='app-container'>
      <AppRoutes />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
