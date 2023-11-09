import { NavBar } from './components/Navbar.jsx';
import { Banner } from './components/Banner.jsx';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import './App.css';
import { Contact } from './components/Contact.jsx';
import { Newsletter } from './components/Newsletter.jsx';
import { MailchimpForm } from './components/MailchimpForm.jsx';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Proj } from './components/Proj.jsx';
import { Cont } from './components/Cont.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* <Cont /> */}
      <Footer />
    </div>
  );
}

export default App;
