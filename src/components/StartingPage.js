import React, { useState } from 'react';
import DownloadPage from './DownloadPage'
import FormCode from './FormCode'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_login.css'

const StartingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src='img/Logo-Audiocament-White.svg' alt='spaceship' />
            <div>Télécharger la version MP3 Color de votre CD</div>
            <div>
              Sur cette page, vous avez la possibilité d'entrer le code unique repris sur le CD Audiocament
              que vous avez acheté. Après avoir rempli  le formulaire et enter votre code,
              le téléchargement du fichier MP3 correspondant à votre CD vous sera proposé;
            vous devrez choisir un emplacement pour l'enregistrer sur votre appareil.</div>
          </div>
          <div class="col-sm">
            {!isSubmitted ? (
              <FormCode submitForm={submitForm} />
            ) : (
              <DownloadPage />
            )}
          </div>
        </div>
      </div>
      <div class="text-center">Copyright © 2021 Psychomed.com® All rights reserved.</div>
    </>
  );
};

export default StartingPage;
