import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_login.css'
import AdminService from "./services/AdminService";

export const AdminLogin = ({setAdmin}) => {

    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,


        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Boolean(data.username) && Boolean(data.password)) {
            AdminService.signInCredentials(data.username, data.password).then((data) => {
                setAdmin(data.user);
            }).catch((e) => {
                alert(e.message);
            });
        } else {
            alert('Credential missing')
        }

    }

    //

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-7 mx-auto">
                        <div className="p-4 grid_login copyright">
                            <div>
                                <img className="text-center img-fluid" src='img/Logo-Audiocament-White.svg'
                                     alt='Audiocament Logo'/>
                            </div>
                            <div className="h4 p-3 text-center title_admin">Audiocament Admin</div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group p-3">
                                    <label htmlFor="login_admin" className="title_login">Login</label>
                                    <input type="text" className="form-control" id="login_admin"
                                           aria-describedby="emailHelp" placeholder="Email"
                                           onChange={handleChange} name="username"
                                    />
                                </div>
                                <div className="form-group p-3">
                                    <label htmlFor="password_admin" className="title_login">Password</label>
                                    <input type="password" className="form-control" name="password" id="password_admin"
                                           placeholder="Password"
                                           onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary m-3 button_connection">Se connecter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;
