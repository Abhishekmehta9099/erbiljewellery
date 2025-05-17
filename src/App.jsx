import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import AOS Animation Hook
import AOSInitializer from "./hooks/AOSInitializer";

// Import Layout
import Main from "./layouts/Main";

// Import Paqes
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Catalogue from "./pages/Catalogue";

// Import Product Pages
import OutdoorVideoWall from "./pages/products/OutdoorVideoWall";
import IndoorVideoWall from "./pages/products/IndoorVideoWall";
import DigitalStandee from "./pages/products/DigitalStandee";
import RentalLEDWall from "./pages/products/RentalLEDWall";
import FlatInteractiveTouchPanel from "./pages/products/FlatInteractiveTouchPanel";
import TouchKiosk from "./pages/products/TouchKiosk";
import DigitalPodium from "./pages/products/DigitalPodium";

const App = () => {
  return (
    <AOSInitializer>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path="outdoor-video-wall" element={<OutdoorVideoWall />} />
              <Route path="indoor-video-wall" element={<IndoorVideoWall />} />
              <Route path="digital-standee" element={<DigitalStandee />} />
              <Route path="rental-led-wall" element={<RentalLEDWall />} />
              <Route
                path="flat-interactive-touch-panel"
                element={<FlatInteractiveTouchPanel />}
              />
              <Route path="touch-kiosk" element={<TouchKiosk />} />
              <Route path="digital-podium" element={<DigitalPodium />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AOSInitializer>
  );
};

export default App;
