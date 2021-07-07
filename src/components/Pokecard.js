import React from 'react';
import '../styling/Pokecard.css';

// const POKE_API = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/`;

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

const Pokecard = ({id, name, type, exp}) => {
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
        <div className="pokecard-container">
            <h1 className="pokecard-title">{name}</h1>
            <div className="pokecard-image">
                <img src={imgSrc} alt={name}/>
            </div>
            <div className="pokecard-data">Type: {type}</div>
            <div className="pokecard-data">EXP: {exp}</div>
        </div>
    );
}

export default Pokecard;