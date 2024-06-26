import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/imgLogo/logoBaobab.png';
import navIcon1 from '../assets/SocialIcons/nav-icon1.svg';
import navIcon2 from '../assets/SocialIcons/twitter.svg';
import navIcon3 from '../assets/SocialIcons/tiktok.svg';
import navIcon4 from '../assets/SocialIcons/mail2.svg';
import React, { useContext } from "react";
import { LanguageContext } from "./contextLang";

import traduction from './traduction';
import {
  BrowserRouter as Router
}from "react-router-dom";
import { Skills } from "./Skills";



export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

const handleClickDiscord = () => {
window.open("https://discord.gg/rr5mQmHBjD");

}
const handleClickMail = () => {
  window.open('mailto:support@baobabgames.group?subject=Subject&body=Body%20goes%20here');
  
  }
  const {switchLanguage} = useContext(LanguageContext);
 // Déclarer l'état local pour le texte du bouton
 const [buttonText, setButtonText] = useState('EN');

 // Gestionnaire d'événements de clic pour le bouton
 const handleClick = () => {
   // Condition pour changer le texte du bouton
   if (buttonText === 'EN') {
     setButtonText('FR');
     switchLanguage('en');
   } else {
     setButtonText('EN');
     switchLanguage('fr');
   }
 };
 const { language } = useContext(LanguageContext)
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Baobab Games"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>{traduction[language].Abouttitle}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{traduction[language].ProjetTitre}</Nav.Link>
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>{traduction[language].TitreEquipe}</Nav.Link>
             
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/baobabgames/"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/_Baobab_Games"><img src={navIcon2} alt="" /></a>
                <a href="https://www.tiktok.com/@baobab_games?is_from_webapp=1&sender_device=pc"><img src={navIcon3} alt="" /></a>
                <a onClick={handleClickMail}><img src={navIcon4} alt="" /></a>
                
               <button onClick={handleClickDiscord}>Discord</button>
             
               
                <button onClick={handleClick}> {buttonText}</button>

              </div>
                         
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
