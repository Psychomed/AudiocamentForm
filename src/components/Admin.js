import React, {useEffect, useState} from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";


const Admin = () => {

    const [admin, setAdmin] = useState(null);


    useEffect(() => {

        if (Boolean(localStorage.getItem('userAdmin') && Boolean(localStorage.getItem('token')))) {
            setAdmin(JSON.parse(localStorage.getItem('userAdmin')));
            axios.setJwt(localStorage.getItem('token'));
        }

    }, [])


    return (
        <>
            {Boolean(admin) ?
                <AdminDashboard admin={admin}/>
                :
                <AdminLogin setAdmin={setAdmin}/>
            }
        </>

    )

}

export default Admin;