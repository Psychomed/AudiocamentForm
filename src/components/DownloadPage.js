import React from 'react'
import '../css/download_page.css'
import DownloadButton from "./DownloadButton";

const DownloadPage = ({musics, code, accessCode}) => {

    return (
        <div>
            <div className="subHeader">
                <h2>Vos téléchargements pour le code <br/><span className="text-muted">{code}</span></h2>
            </div>
            <div className="downloadCards">
                {musics.map((music) => (
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <p className="lead" style={{margin: 0}}>{music.name}</p>
                                {Boolean(music.lastAttempt &&
                                    <p>Ce fichier a été téléchargé le {music.lastAttempt}</p>)}
                            </div>
                            <DownloadButton dowloaded={music.downloaded} music={music} accessCode={accessCode}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DownloadPage
