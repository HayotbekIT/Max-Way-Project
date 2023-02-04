import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nav";
import Filials from "./page/Filials";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contacts";
import Home from "./page/Home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/filials" element={<Filials/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
