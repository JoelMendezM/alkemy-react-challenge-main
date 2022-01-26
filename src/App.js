import { Login } from './components/Login/Login';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DishesSearch } from './components/DishesSearch/DishesSearch';

// APIKEY: bab401f1a68946959bb8cd42dba16eda

function App() {
  return (
    <Router>
      <NavBar />
      <DishesSearch/>
      <Routes>
        {/* <Route path="/" element={localStorage.length === 0 ? <Login /> : <Home />} /> */}
        {/* <Route path="/" element={<DishesSearch/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={localStorage.length === 0 ? <Login /> : <Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route
          path="/acceleration"
          element={localStorage.length === 0 ? <Login /> : <div>ACELARATE</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
