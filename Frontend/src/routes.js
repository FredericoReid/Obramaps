import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login/index'
import Main from './pages/Main/index';
import Sobre from './pages/Sobre/index';
import Pedidos1 from './pages/Pedidos/index';
import Cabecalho from './components/Cabecalho/index';
import Rodape from './components/Rodape/index';

const Routes = () => {
    return (

        <BrowserRouter>
            <Cabecalho />
            <Switch>
                <Route exact path = "/" component = {Login} />
                <Route path = "/main" component = {Main} />
                <Route path = "/sobre" component = {Sobre} />
                <Route path = "/pedidos" component = {Pedidos1} />
            </Switch>
            <br />
            <Rodape />
        </BrowserRouter>
    )   
}

export default Routes;

