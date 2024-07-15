import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts"
import Footer from './components/Footer'
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio/" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
};

export default App;
