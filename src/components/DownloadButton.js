import React from "react";


const DownloadButton = ({downloaded, music, accessCode}) => {


    return (
        Boolean(music.downloaded) ? (
            <>

                <button className="btn btn-success disabled pull-right">Télécharger</button>
            </>
        ) : (
            <a className="btn btn-success pull-right"
               href={`${process.env.REACT_APP_API_URL}/getMusic/${music.id}/${accessCode}/${music.token}`}
               download
               target="_blank"
            >Télécharger</a>
        )
    )

}

export default DownloadButton;