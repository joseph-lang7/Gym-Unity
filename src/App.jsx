import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  ClassesPage,
  ContactPage,
  HomePage,
  PricingPage,
  SchedulePage,
  SigninPage,
  SignupPage,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
