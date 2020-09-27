import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EsqueciSenha from '../pages/EsquecerSenha';
import SiginIn from '../pages/SiginIn';
import SiginUp from '../pages/SiginUp';
import Perfil from '../pages/Perfil';
import Cadastrar from '../pages/cadastrar';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SiginIn} />
        <Route path="/register" component={SiginUp} />
        <Route path="/forgot" component={EsqueciSenha} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/cadastrar" component={Cadastrar} />
    </Switch>
)

export default Routes;