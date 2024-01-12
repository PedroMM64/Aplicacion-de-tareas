import React from "react";
import '../hojas-de-estilo/tarea.css';
import { AiFillDelete } from "react-icons/ai";

function Tarea ({ texto, completada }) {
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto">
                { texto }
            </div>
            <div className="icono-contenedor">
                <AiFillDelete className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;