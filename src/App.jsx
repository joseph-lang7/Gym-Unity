import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";
import SigninPage from "./pages/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
