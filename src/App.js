import logo from './logo.svg';
import './App.css';
import projImg1 from "./assets/img/Cap4.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import LanguageContextProvider from './components/contextLang';
import { useEffect } from 'react';


import { Pub } from './components/Pub';

function App() {
  useEffect(() => {
    handleShowPub()
  }, []);

  const [showModalPub, setShowModalPub] = useState(false);
  const handleClosePub = () => setShowModalPub(false);
  const handleShowPub = () => setShowModalPub(true);
 
  return (
    <LanguageContextProvider> 
    <div className="App">
       <title>baobabgames</title>
       <meta name="description" content= "Baobab Games is an independent video game studio working to represent cultural diversity around the world. We bring together millions of players around the world in atypical multiplayer universes by allowing them to relive moments that have marked history."></meta>
     
      
      

      <Modal show={showModalPub} onHide={handleClosePub} dialogClassName="custom-legal-class"  style={{ marginTop: '7%' , maxHeight: '100vh'}}>
     
        <Modal.Dialog >
        
        <img src={projImg1} alt="Image" />
        </Modal.Dialog>
        <Modal.Body closeButton>
        <Pub/>
        </Modal.Body>
        <Button  variant="secondary" onClick={handleClosePub}>
            X
          </Button>
      </Modal>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
     
      <Contact />
      
      <Footer />
     
      
      
    </div>
    </LanguageContextProvider>
  );
}

export default App;
