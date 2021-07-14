import React, {useEffect, useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";
import AdminService from "./services/AdminService";

const getResselerFromId = (id, resselers) => {
    if (Boolean(id)) {
        return resselers.find(resseler => resseler.id === id);
    } else {
        return {name: null}
    }

}


const AdminAccessCodeRow = ({code, resselers}) => {

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {

        if (Boolean(code.user)) {
            setUser({
                firstname: code.user.firstname,
                lastname: code.user.lastname,
                email: code.user.email,
            })
        } else {
            setUser({
                firstname: null,
                lastname: null,
                email: null,
            })
        }


    }, [code])

    const handleResetMusic = (musicId, accessCodeId) => {
        AdminService.resetMusic(musicId, accessCodeId).then((result) => console.log(result))
    }

    const handleResetCode = (accessCodeId) => {
        AdminService.resetCode(accessCodeId);
    }

    if (!Boolean(code)) return null

    return (
        <>

            <tr
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <td>{code.code}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{code.lastAttempt}</td>
                <td>{getResselerFromId(code.resseler_id, resselers).name}</td>
            </tr>
            <tr>
                <Collapse in={open}>
                    <td colSpan="7">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <Table striped bordered hover responsive>
                                        <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <td>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="lastname"
                                                           value={user.lastname}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Prénom</th>
                                            <td>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="firstname"
                                                           value={user.firstname}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email"
                                                           value={user.email}/>
                                                </div>
                                            </td>
                                        </tr>
                                        </thead>
                                    </Table>
                                    {Boolean(code.user) && (<Button variant="outline-primary">Mettre à jour</Button>)}

                                </div>
                                <div className="col-4">
                                    <Table striped bordered hover responsive>
                                        <thead>
                                        <tr>
                                            <th>Code</th>
                                            <td>{code.code}</td>
                                        </tr>
                                        <tr>
                                            <th>Date création</th>
                                            <td>{dayjs(code.createdAt).format('DD/MM/YYYY')}</td>
                                        </tr>
                                        </thead>
                                    </Table>
                                    {Boolean(code.user) && (<Button variant="outline-primary" onClick={() => {
                                        handleResetCode(code.id)
                                    }}>Réinitialiser Code</Button>)}
                                </div>
                                <div className="col-5">
                                    <Table striped bordered hover responsive>
                                        <thead>
                                        <tr>
                                            <td>Titre</td>
                                            <td>Téléchargé</td>
                                            <td>Date</td>
                                            <td>Erreur(s)</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {code.musics.map((music) => (
                                            <tr key={music.id}>
                                                <td className="text_adaptive" size="sm">{music.name}</td>
                                                <td>{Boolean(music.pivot.token) ? 'Oui' : 'Non'}</td>
                                                <td>{music.lastAttempt}</td>
                                                <td>{music.attempts}</td>
                                                <td><Button variant="outline-primary"
                                                            className="btn btn-outline-primary p-2 btn button_reset_music"
                                                            onClick={() => {
                                                                if (window.confirm("T'es sur gros ?")) handleResetMusic(music.id, music.pivot.access_code_id)
                                                            }}>Réinitialiser</Button></td>
                                            </tr>
                                        ))}

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </td>
                </Collapse>
            </tr>

        </>
    )

}


export default AdminAccessCodeRow;
