import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_dashboard.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Collapse from 'react-bootstrap/Collapse'
import "bootstrap/js/src/collapse.js";

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);

    return (
        <form>
            <div class="container">
                <div class="h3 mt-3">Audiocament Admin</div>

                <div class="col">
                    <div class="row p-2">
                        <div class="container">

                            <div class="row">
                                <div class="col-1">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                            Préfix
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">MR0</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">MR12</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div class="col-3">
                                    <input class="form-control" type="text" placeholder="Code" id="input_code" />
                                </div>
                                <div class="col-2">
                                    <input class="form-control" type="email" placeholder="Prénom" id="input_firstname" />
                                </div>
                                <div class="col-2">
                                    <input class="form-control" type="text" placeholder="Nom" id="input_nom" />
                                </div>
                                <div class="col-2">
                                    <input class="form-control" type="email" placeholder="Email" id="input_email" />
                                </div>
                                <div class="col-2">
                                    <Button variant="outline-primary">Rechercher</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Email</th>
                                        <th>Date d'utilisation</th>
                                        <th>Revendeur</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        <td>DIOJEIOZJIODJZOEDJOZED</td>
                                        <td>De larue</td>
                                        <td>Grégoire</td>
                                        <td>haaa@gmail.com</td>
                                        <td>12/03/21</td>
                                        <td>EchoSanté</td>
                                        <td>Actions</td>
                                    </tr>
                                    <tr>
                                        <Collapse in={open}>
                                            <td colspan="7">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-3">
                                                            <Table striped bordered hover responsive>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Nom</th>
                                                                        <td>
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control" id="exampleInputEmail1" value="de Meeûs" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Prénom</th>
                                                                        <td>
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control" id="exampleInputEmail1" value="Augustin" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Email</th>
                                                                        <td>
                                                                            <div class="form-group">
                                                                                <input type="email" class="form-control" id="exampleInputEmail1" value="augustin@psio.com" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </thead>
                                                            </Table>
                                                            <Button variant="outline-primary">Mettre à jour</Button>
                                                        </div>
                                                        <div class="col-4">
                                                            <Table striped bordered hover responsive>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Code</th>
                                                                        <td>ZCOIHCJZIOUCHZOEIUCHZC</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Date création</th>
                                                                        <td>12/03/2021</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Date utilisation</th>
                                                                        <td>12/02/1992</td>
                                                                    </tr>
                                                                </thead>
                                                            </Table>
                                                            <Button variant="outline-primary">Réinitialiser Code</Button>
                                                        </div>
                                                        <div class="col-5">
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
                                                                    <tr>
                                                                        <td class="text_adaptive" size="sm">S'endormir ijezbdiz</td>
                                                                        <td>Yes</td>
                                                                        <td>12/04/2021</td>
                                                                        <td>3</td>
                                                                        <td><Button variant="outline-primary" class="btn btn-outline-primary p-2 btn button_reset_music">Réinitialiser</Button></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="text_adaptive">S'endormir</td>
                                                                        <td>Yes</td>
                                                                        <td>12/04/2021</td>
                                                                        <td>3</td>
                                                                        <td><Button variant="outline-primary" class="btn btn-outline-primary p-2 btn button_reset_music">Réinitialiser</Button></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </Collapse>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div>
                            <button type="button" class="btn btn-outline-primary">Export CSV</button>
                        </div>
                    </div>
                </div>
            </div >
        </form>
    )
}

export default AdminDashboard
