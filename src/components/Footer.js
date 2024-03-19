import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/imgLogo/logoBaobab.png';
import navIcon1 from "../assets/SocialIcons/nav-icon1.svg";
import navIcon2 from "../assets/SocialIcons/twitter.svg";
import navIcon3 from "../assets/SocialIcons/tiktok.svg";
import navIcon4 from '../assets/SocialIcons/mail2.svg';
import laGuilde from '../assets/imgLogo/laGuilde.png';
import React, { useState ,useContext} from 'react';
import {LanguageContext} from './contextLang'
import traduction from './traduction';




export const Footer = () => {

  const handleClickMail = () => {
    window.open('mailto:support@baobabgames.group?subject=Subject&body=Body%20goes%20here');
    
    }
    const [modalOpen, setModalOpen] = useState(false);
    const { language } = useContext(LanguageContext)
  return (
    <footer className="footer">
      <Container>
     
        <Row className="align-items-center">
        <MailchimpForm />
        </Row>
        <Row>
          <Col size={8} sm={4}>
            <img src={laGuilde} alt="LaGuilde" />
            <h3>{traduction[language].Partenaires}</h3>
          </Col>
          <Col size={8} sm={4}>
            <img src={logo} alt="Logo" />
            
          </Col>
          <Col size={8} sm={4} >
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/baobabgames/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/_Baobab_Games"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.tiktok.com/@baobab_games?is_from_webapp=1&sender_device=pc"><img src={navIcon3} alt="Icon" /></a>
              <a onClick={handleClickMail}><img src={navIcon4} alt="" /></a>
            </div>
            <div>

    
    </div>
            
            <p>{traduction[language].copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
