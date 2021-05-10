import React, { useState } from 'react';
import '../css/Form.css';
import FormSuccess from './FormSuccess';
import FormSignup from './FormSignup'

const StartingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <>
      <div>
        <div>
          <div>
          <img src='img/Logo-Audiocament-White.svg' alt='spaceship' />
          <div>Télécharger la version MP3 Color de votre CD</div>
          <div>
            Sur cette page, vous avez la possibilité d'entrer le code unique repris sur le CD Audiocament
            que vous avez acheté. Après avoir rempli  le formulaire et enter votre code,
            le téléchargement du fichier MP3 correspondant à votre CD vous sera proposé;
            vous devrez choisir un emplacement pour l'enregistrer sur votre appareil.</div>
          </div>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <div class="copyright">Copyright © 2021 Psychomed.com® All rights reserved.</div>
    </>
  );
};

export default StartingPage;
