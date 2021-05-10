import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/admin_login.css'

export const AdminLogin = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-7 mx-auto">
                        <div class="p-4 grid_login copyright">
                            <div>
                                <img class="text-center img-fluid" src='img/Logo-Audiocament-White.svg' alt='Audiocament Logo' />
                            </div>
                            <div class="h4 p-3 text-center title_admin">Audiocament Admin</div>
                            <form>
                                <div class="form-group p-3">
                                    <label for="login_admin" class="title_login">Login</label>
                                    <input type="text" class="form-control" id="login_admin" aria-describedby="emailHelp" placeholder="Login" />
                                </div>
                                <div class="form-group p-3">
                                    <label for="password_admin" class="title_login">Password</label>
                                    <input type="password" class="form-control" id="password_admin" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary m-3 button_connection">Se connecter</button>
                            </form>
                        </div>
                        <div class="p-2 copyright text-center">Copyright © 2021 Psychomed.com® All rights reserved.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;
