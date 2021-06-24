import React, {useState} from 'react';
import DownloadPage from './DownloadPage'
import FormCode from './FormCode'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_login.css'

const StartingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [musics, setMusics] = useState(null);
  const [code, setCode] = useState(null);

  function submitForm() {
    setIsSubmitted(true);
  }

  function onResponse(success, data) {
    if (!success) {
      console.log(data);
    } else {
      setMusics(data.musics);
      setCode(data.code);
      setIsCodeValid(true);
    }
  }

  return (

      <div class="centered">
        <div className="content shadow bg-body rounded">
          <div className="row">
            <div className="col-sm">
              <div className="intro-audiocament">
                <img src='img/Logo-Audiocament-White.svg' alt='spaceship'/>
                <h1>Télécharger la version MP3 Color de votre CD</h1>
                <div className="intro-text">
                  <p>
                    Sur cette page, vous avez la possibilité d'entrer le code unique repris sur le CD Audiocament
                    que vous avez acheté. Après avoir rempli le formulaire et enter votre code,
                    le téléchargement du fichier MP3 correspondant à votre CD vous sera proposé;
                    vous devrez choisir un emplacement pour l'enregistrer sur votre appareil.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-page">
                {(!isSubmitted || !isCodeValid) && !Boolean(musics) ? (
                    <FormCode submitForm={submitForm} onResponse={onResponse}
                              isCodeValid={!isSubmitted && !isCodeValid} isSubmitted={isSubmitted}/>
                ) : (
                    <DownloadPage musics={musics} code={code} accessCode={code}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default StartingPage;
