import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { withRouter } from "react-router-dom";
import "./styles.scss";

function AppContainer(props) {
    return (
        <div className="app-container">
            <div className="header">
                <ul className="header-menu">
                    <li>
                        <NavLink to={PATHS.juegos}>Juegos</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATHS.categorias}>Categorias</NavLink>
                    </li>
                </ul>
                <div className="botones">
                    <button>+ Categoria</button>
                    <button>+ Juego</button>
                </div>
            </div>
            <div className="page-contenido">{props.children}</div>
        </div>
    );
}

export default withRouter(AppContainer);
