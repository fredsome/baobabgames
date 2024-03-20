import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {LanguageContext} from './contextLang'
import traduction from './traduction';
import React, {useContext} from 'react';


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const { language } = useContext(LanguageContext)
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
              <h3>{traduction[language].DescriptionNewsLetter}</h3>
              </div>}
            </TrackVisibility>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder={traduction[language].AdresseEmail} />
                  <button type="submit">{traduction[language].BouttonSoumettre}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}