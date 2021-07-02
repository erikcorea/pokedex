import React from 'react'
import './styling/Pokecard.css'
const POKE_API = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/`;

const Pokecard = ({id, name, type, exp}) => {
    let imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className="pokecard-container">
            <h1>{name}</h1>
            <img src={imgSrc} alt={name}/>
            <div>Type: {type}</div>
            <div>EXP: {exp}</div>
        </div>
    );
}

export default Pokecard;