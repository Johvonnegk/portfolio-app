import Navbar from "./components/navbar/Navbar.js";
import Welcome from "./pages/welcome/welcome.js";
import About from "./pages/about/about.js";
import Projects from "./pages/projects/projects.js";
import Contact from "./pages/contact/contact.js";
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
