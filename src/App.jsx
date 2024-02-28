import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar';
import Home from './Home'; // Ensure this component exists for the home page
import Create from './Create';
import Room from './Room';

function App() {
  return (
    <Router>
      <div className="App">
      {location.pathname !== '/room' && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/room' element={<Room />} />
          {/* Add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
