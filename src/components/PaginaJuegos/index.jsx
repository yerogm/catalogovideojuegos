import React from "react";
import { juegos } from "../Database/datos";
import "./styles.scss";

export default function PaginaJuegos() {
    return (
        <div>
            <h1>Esta es la pagina de juegos</h1>

            <div className="lista-juegos">
                {juegos.map((juego) => {
                    return (
                        <div className="tarjeta-videojuego">
                            <div className="imagen">
                                <img src={juego.image} />
                            </div>
                            <div className="descripcion">
                                <span className="transparente">{juego.genero}</span>
                                <span className="texto-grande">{juego.nombre}</span>
                                <span>
                                    {juego.precio.toLocaleString("es-CO", {
                                        style: "currency",
                                        currency: "COP",
                                    })}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
