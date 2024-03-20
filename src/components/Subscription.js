import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {LanguageContext} from './contextLang'
import traduction from './traduction';
import React, {useContext} from 'react';

export const Subscription = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

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
  const { language } = useContext(LanguageContext)
  return (
      <Col lg={12}>
        <div >
          <Row>
          <Col lg={12} md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder={traduction[language].AdresseEmail} />
                  <button type="submit">{traduction[language].BouttonSoumettre}</button>
                </div>
              </form>
            </Col>
          <Col md={6} xl={7}>
             
              {status === 'sending' && <Alert style={{ fontSize: '10px' }}>Sending...</Alert>}
              {status === 'error' && <Alert style={{ fontSize: '10px' }} variant="danger">{message}</Alert>}
              {status === 'success' && <Alert style={{ fontSize: '10px' }} variant="success">{message}</Alert>}
            </Col>
          
          </Row>
        </div>
      </Col>
  )
}
