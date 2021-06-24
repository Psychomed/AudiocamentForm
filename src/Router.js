import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartingPage from "./components/StartingPage";
import DownloadPage from "./components/DownloadPage";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";


const Router = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={StartingPage}/>
                <Route path="/download" exact component={DownloadPage}/>
                <Route path="/admin" exact component={AdminDashboard}/>
                <Route path="/adminLogin" exact component={AdminLogin}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Router;