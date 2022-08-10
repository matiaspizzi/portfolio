import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App max-h-fit">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
