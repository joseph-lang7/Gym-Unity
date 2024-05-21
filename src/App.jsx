import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import LoadingSpinner from "./components/LoadingSpinner";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <Routes>
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
