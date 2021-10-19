import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/index';


const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route path = "/main" component = {Main} />
            </Switch>
        </BrowserRouter>
    )   
}

export default Routes;

