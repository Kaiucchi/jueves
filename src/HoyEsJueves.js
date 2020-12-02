import React from 'react';
import './HoyEsJueves.css';
import sapomiercoles from './sapomiercoles.png';
import esjueves from './esjueves.mp4';
import felizjueves from './felizjueves.mp4';


const date = new Date().getDay();
const diasNombre = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const diaSemana = diasNombre[date];



const HoyEsJueves = () => {
   
    if (date == 0 || date === 1 || date === 2 || date === 5 || date === 6){
        return(
            <div className={`background typewriter ${diaSemana}`}>
                <h1>Hoy es <span className="txt anim-text-flow">jueves?</span></h1>
                <h2>No, hoy es {diaSemana}</h2>
            </div>
        );
    }
    if (date == 3){
        return(
            <div className={`background typewriter ${diaSemana}`}>
                <h1>Hoy es <span className="txt anim-text-flow">jueves?</span></h1>
                <h2>No, hoy es {diaSemana} mis panas</h2>
                <img className="media" src={sapomiercoles} alt=""/>
            </div>
        );
    } 

    else{
        return(
            <div className={`background typewriter ${diaSemana}`}>
                <h1>Hoy es <span className="txt anim-text-flow">jueves?</span></h1>
                <h2><span className="txt anim-text-flow">SÍ, A ROCKEAR GIORGIOS</span></h2>
                <video controls autoplay loop>
                    <source src={esjueves || felizjueves}/>
                </video>
            </div>
        );
    };
    
}

export default HoyEsJueves;