import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { parseJwt, usuarioAutenticado } from "./services/auth";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login/login";
import Administrador from "./pages/Administrador/adm";
import Medico from "./pages/medico/medico";
import Consultas from "./pages/consultas";
import Mapa from "./pages/mapa/mapa";
import home from "./pages/home";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <PermissaoAdm path="/listarConsultas" component={Administrador} />
        <PermissaoAdm path="/mapa" component={Mapa} />
        <PermissaoMedico path="/minhasConsultasMedico" component={Medico} /> */}
        <Route path="/home" component={home} />

        <Route path="/consultas" component={Consultas} />
        <Route exact patch="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
