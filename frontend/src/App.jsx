import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Profile from "./Pages/Profile/Profile";
import Booking from "./Pages/Booking/Booking";
import BookingPage from "./Pages/BookingPage/BookingPage";
import Desktop from "./features/Desktop";
import Help from './components/Help/Help'
import Message from "./components/Message/Message";
import Login from './Pages/auth/Login'
import Setting from "./components/Setting/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inbox" element={<Message />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/features" element={<Booking />} />
        <Route path="/help" element={<Help />} />
        <Route path="/features" element={<Desktop />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;