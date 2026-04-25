import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLayout from "./ProtectedLayout";
import "./App.css";
import "./Components/Home/home.scss";
 import "./Components/Navbar/navbar.scss"; 
 import "./Components/Main/main.scss"; 
 import "./Components/Footer/footer.scss"; 
 import "./Components/Packages/packageDetails.scss";
 import "./Components/Packages/packages.scss";

import Home from "./Components/Home/Home";
import Packages from "./Components/Packages/Packages";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Chatbot from "./Components/Chatbot/Chatbot";
import Booking from "./Components/Booking/Booking";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import PackageDetails from "./Pages/PackageDetails";
import Service from "./Pages/Service";
import Insurance from "./Pages/Insurance";
import Agency from "./Pages/Agency";
import Tourism from "./Pages/Tourism";
import Payment from "./Pages/Payment";
import RentCars from "./Pages/RentCars";
import CarBooking from "./Pages/CarBooking";
import HotelWorld from "./Pages/HotelWorld";
import Trivago from "./Pages/Trivago";
import TripAdvisor from "./Pages/TripAdvisor";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} /> 
          <Route path="/booking" element={<Booking />} />
          <Route path="/package-details" element={<PackageDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/rentcars" element={<RentCars />} />
          <Route path="/car-booking" element={<CarBooking />} />
          <Route path="/hotelworld" element={<HotelWorld />} />
          <Route path="/trivago" element={<Trivago />} />
          <Route path="/tripadvisor" element={<TripAdvisor />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;











