import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartingPage from "./components/StartingPage";
import DownloadPage from "./components/DownloadPage";
import Admin from "./components/Admin";


const Router = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={StartingPage}/>
                <Route path="/download" exact component={DownloadPage}/>
                <Route path="/admin" exact component={Admin}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Router;