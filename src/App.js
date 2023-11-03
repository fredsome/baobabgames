import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
       <title>baobabgames</title>
       <meta name="description" content= "Baobab Games is an independent video game studio working to represent cultural diversity around the world. We bring together millions of players around the world in atypical multiplayer universes by allowing them to relive moments that have marked history."></meta>
     
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
