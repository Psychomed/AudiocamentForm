import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_dashboard.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import "bootstrap/js/src/collapse.js";
import FormCodeService from "./services/FormCodeService";
import {DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import AdminService from "./services/AdminService";
import AdminAccessCodeRow from "./AdminAcccessCodeRow";

const AdminDashboard = ({admin}) => {

    const [resselers, setResselers] = useState([]);
    const [prefixes, setPrefixes] = useState([]);
    const [codes, setCodes] = useState([]);
    const [filteredCodes, setFilteredCodes] = useState([]);
    const [searchByCode, setSearchByCode] = useState("");
    const [searchByFirstname, setSearchByFirstname] = useState("");
    const [searchByLastname, setSearchByLastname] = useState("");
    const [searchByEmail, setSearchByEmail] = useState("");
    const [searchByPrefix, setSearchByPrefix] = useState("");
    const [searchByResseler, setSearchByResseler] = useState("");
    const [csvHref, setCsvHref] = useState(process.env.REACT_APP_API_URL + "/admin/generateCsv/?");

    useEffect(() => {

        FormCodeService.getResselers().then(function (data) {
            setResselers(data);
        })
        FormCodeService.getPrefixes().then(function (data) {
            setPrefixes(data);
        })

        AdminService.getCodes().then(function (data) {
            setCodes(data)
        })

    }, []);

    useEffect(() => {
        let searchedCode = codes;
        let href = process.env.REACT_APP_API_URL + "/admin/generateCsv/?";

        if (Boolean(searchByCode)) {
            href += 'code=' + searchByCode + '&';
            searchedCode = searchedCode.filter(code => code.code.includes(searchByCode));
        }
        if (Boolean(searchByFirstname)) {
            href += 'firstname=' + searchByFirstname + '&';
            searchedCode = searchedCode.filter(code => {
                if (Boolean(code.user)) {
                    return code.user.firstname.includes(searchByFirstname)
                }
                return false
            })
        }
        if (Boolean(searchByLastname)) {
            href += 'lastname=' + searchByLastname + '&';
            searchedCode = searchedCode.filter(code => {
                if (Boolean(code.user)) {
                    return code.user.lastname.includes(searchByLastname)
                }
                return false
            })
        }
        if (Boolean(searchByEmail)) {
            href += 'email=' + searchByEmail + '&';
            searchedCode = searchedCode.filter(code => {
                if (Boolean(code.user)) {
                    return code.user.email.includes(searchByEmail)
                }
                return false
            })
        }
        if (Boolean(searchByPrefix)) {
            href += 'prefix=' + searchByPrefix + '&';
            searchedCode = searchedCode.filter(code => {
                return code.code.split("-")[0] === searchByPrefix
            })
        }
        if (Boolean(searchByResseler)) {
            href += 'resseler=' + searchByResseler + '&';
            searchedCode = searchedCode.filter(code => code.resseler_id === parseInt(searchByResseler))
        }
        setCsvHref(href);
        setFilteredCodes(searchedCode.slice(0, 100))

    }, [codes, searchByCode, searchByEmail, searchByFirstname, searchByLastname, searchByResseler, searchByPrefix])
    
    const handlePrefixChange = (eventKey, event) => {
        setSearchByPrefix(eventKey);
    }
    const handleResselerChange = (eventKey) => {
        console.log(eventKey)
        setSearchByResseler(eventKey);
    }
    const handleSearchByCode = (event) => {
        console.log(event.target.value);
        setSearchByCode(event.target.value);
    }
    const handleSearchByFirstname = (event) => {
        setSearchByFirstname(event.target.value)
    }
    const handleSearchByLastname = (event) => {
        setSearchByLastname(event.target.value)
    }
    const handleSearchByEmail = (event) => {
        setSearchByEmail(event.target.value)
    }

    const handleResetMusic = (musicId, accessCodeId) => {

        let codesToChange = codes;
        codesToChange.every(code => {
            if (code.id === accessCodeId) {
                code.musics.forEach(music => {
                    if (music.id === musicId) {
                        music.pivot.token = null;
                        music.pivot.expire_at = null;
                        music.pivot.lastAttempt = null;
                        music.pivot.attempts = 0;
                        return false;
                    }
                    return true;
                })
            }
            return true;
        })
        setCodes([
            ...codesToChange
        ])
    }


    const getResselerFromId = (id) => {
        if (resselers.length < 1 || !Boolean(id)) return null;
        return resselers.find(resseler => resseler.id === parseInt(id));
    }

    if (!Boolean(admin) || admin.auth < 4096) return null // psiostore admin

    return (
        <form>
            <div className="container">
                <div className="h3 mt-3">Audiocament Admin</div>

                <div className="col">
                    <div className="row p-2 justify-content-between">
                        <div className="col-1">
                            <Dropdown onSelect={handlePrefixChange}>
                                <DropdownButton variant="outline-primary" id="dropdown-basic"
                                                title={Boolean(searchByPrefix) ? searchByPrefix : 'Prefix'}>
                                    <DropdownItem eventKey={null}>Tous</DropdownItem>
                                    {prefixes.map((prefix, index) => (
                                        <DropdownItem key={prefix} eventKey={prefix}>{prefix}</DropdownItem>
                                    ))}

                                </DropdownButton>
                            </Dropdown>
                        </div>

                        <div className="col-1">
                            <Dropdown onSelect={handleResselerChange}>
                                <DropdownButton variant="outline-primary" id="dropdown-basic"
                                                title={Boolean(searchByResseler) ? (getResselerFromId(searchByResseler)).name : 'Resseler'}>

                                    <Dropdown.Item value={null}>Tous</Dropdown.Item>
                                    {resselers.map((resseler, index) => (
                                        <Dropdown.Item key={resseler.id}
                                                       eventKey={resseler.id}>{resseler.name}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Dropdown>
                        </div>

                        <div className="col-2">
                            <input className="form-control" type="text" placeholder="Code" id="input_code"
                                   onChange={handleSearchByCode}/>
                        </div>
                        <div className="col-2">
                            <input className="form-control" type="email" placeholder="Prénom" id="input_firstname"
                                   onChange={handleSearchByFirstname}/>
                        </div>
                        <div className="col-2">
                            <input className="form-control" type="text" placeholder="Nom" id="input_nom"
                                   onChange={handleSearchByLastname}/>
                        </div>
                        <div className="col-2">
                            <input className="form-control" type="email" placeholder="Email" id="input_email"
                                   onChange={handleSearchByEmail}/>
                        </div>
                        <div className="col-1">
                            <a className="btn btn-outline-primary" href={csvHref} target="_blank">Export CSV</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Table striped bordered responsive>
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Date d'utilisation</th>
                                    <th>Revendeur</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredCodes.map(code => (
                                    <AdminAccessCodeRow code={code} resselers={resselers}
                                                        handleResetMusic={handleResetMusic}/>
                                ))}

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div >
        </form>
    )
}

export default AdminDashboard
