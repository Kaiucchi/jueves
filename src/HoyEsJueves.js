import React from 'react';
import './HoyEsJueves.css';
import sapomiercoles from './sapomiercoles.png';


const date = new Date().getDay();
const diasNombre = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const diaSemana = diasNombre[date];



const HoyEsJueves = () => {
   
    if (date == 0 || date === 1 || date === 2 || date === 5 || date === 6){
        return(
            <div className={`background ${diaSemana}`}>
                <h1>Hoy es <span className="txt anim-text-flow">jueves?</span></h1>
                <h2>No, hoy es {diaSemana}</h2>
            </div>
        );
    }
    if (date == 3){
        return(
            <div className={`background ${diaSemana}`}>
                <h1>Hoy es <span className="txt anim-text-flow">jueves?</span></h1>
                <h2>No, hoy es {diaSemana}</h2>
                <img src={sapomiercoles} alt=""/>
            </div>
        );
    }

    else{
        return(
            <div className={`background ${diaSemana}`}>
                <h1>Hoy es jueves?</h1>
                <h2>SÍ, A ROCKEAR GIORGIOS</h2>
            </div>
        );
    };
    
}

export default HoyEsJueves;