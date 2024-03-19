import { Col } from "react-bootstrap";
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {LanguageContext} from './contextLang'
import traduction from './traduction';
import {useContext} from 'react';

export const Legal = () => {
  const { language } = useContext(LanguageContext)
  return (
   
    <div>
      <p>
      {traduction[language].LegalPart1}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre2}
      </p>
      <p>
      {traduction[language].LegalPart2}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre3}
      </p>
      <p>
      {traduction[language].LegalPart3}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre4}
      </p>
      <p>
      {traduction[language].LegalPart4}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre5}
      </p>
      <p>
      {traduction[language].LegalPart5}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre6}
      </p>
      <p>
      {traduction[language].LegalPart6}
      </p>
      <p style={{ fontWeight: 'bold' }}>
      {traduction[language].LegalSoustitre7}
      </p>
      <p>
      {traduction[language].LegalPart7}
      </p>
      
    </div>
   

  )
}
