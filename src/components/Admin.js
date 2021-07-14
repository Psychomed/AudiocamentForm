import React, {useEffect, useState} from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";


const Admin = () => {

    const [admin, setAdmin] = useState(null);


    useEffect(() => {

        if (Boolean(localStorage.getItem('userAdmin'))) {
            setAdmin(localStorage.getItem('userAdmin'));
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