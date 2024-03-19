import logo from './logo.svg';
import './App.css';
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

function App() {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
 
  return (
    <LanguageContextProvider> 
    <div className="App">
       <title>baobabgames</title>
       <meta name="description" content= "Baobab Games is an independent video game studio working to represent cultural diversity around the world. We bring together millions of players around the world in atypical multiplayer universes by allowing them to relive moments that have marked history."></meta>
     
      
       <Modal show={showModal} onHide={handleClose} dialogClassName="custom-legal-class"  style={{ marginTop: '5%' , maxHeight: '80vh'}}  scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Legal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
            <p>
            This is the content of the modal.fgnnnnnnnnnnnnnnnnnnnnnnnnnn
            nnnnnnnnnnnnnnnnnnnnnnnnnnnnntgg gnnnnnngf nnnnnnnnnnnnnnnnnn
            nnnnnnnnnfg  egdt  gtdt g f gfhfg hgh ghgfh gfhfgfghgf hgfh h
            nnnnnnnnnnnkhlkuljkljljk.j.jkjjljk;lhgkydujfjsdtkjhklkjljlhklg
            vjkjkjkjkjkkkkkkkkkkkkkkkkkkkkkkkkkkjhlklkhklhklhklhklkllkhkll
            </p>
        </Modal.Body>
       
      </Modal>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      
      <Contact />
      
      <Footer />
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      
    </div>
    </LanguageContextProvider>
  );
}

export default App;
