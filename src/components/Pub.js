import { Col } from "react-bootstrap";
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {LanguageContext} from './contextLang'
import traduction from './traduction';
import {useContext} from 'react';
import { MailchimpForm } from "./MailchimpForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MailchimpSubscription } from "./MailchimpSubscription";


import LanguageContextProvider from './contextLang';
import { Legal } from './Legal';


export const Pub = () => {
  const { language } = useContext(LanguageContext)

  const [showModal, setShowModallegal] = useState(false);
  const handleCloselegal = () => setShowModallegal(false);
  const handleShowLegal = () => setShowModallegal(true);
  return (
   

    
    <div>
         <Modal show={showModal} onHide={handleCloselegal} dialogClassName="custom-legal-class"  style={{ marginTop: '5%' , maxHeight: '80vh'}}  scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Legal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Legal/>
            </p>
        </Modal.Body>
       
      </Modal>
      <p style={{ fontWeight: 'bold' , fontSize: '24px' , margin: 0}}>
      {traduction[language].PubTitle}
      </p>
      <p style={{ fontWeight: 'bold' , fontSize: '16px' , margin: 0 }}>
      {traduction[language].PubSubtitle}
      </p>
      <p style={{ fontSize: '12px' }}>
      {traduction[language].PubSubtitle2}
      
      <a  style={{ fontSize: '12px' }} href="#" onClick={handleShowLegal}>{traduction[language].Confidentialite}</a>
      </p>
    
      <MailchimpSubscription/>
      
    </div>
    
   

  )
}
