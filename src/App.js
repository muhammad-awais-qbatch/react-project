import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NP from "./pages/No Page";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/Sign in";
import WOL from "./pages/Wall of love";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="wol" element={<WOL />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="*" element={<NP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
