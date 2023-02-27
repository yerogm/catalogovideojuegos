import React from "react";
import { juegos } from "../Database/datos";

export default function PaginaJuegos() {
    return (
        <div>
            <h1>Esta es la pagina de juegos</h1>

            {juegos.map((juego) => {
                return (
                    <div>
                        <h3>Titulo: {juego.nombre}</h3>
                    </div>
                );
            })}
        </div>
    );
}
