import React from 'react';
import Pokecard from './Pokecard';
import '../styling/Pokedex.css';


const Pokedex  = ({pokemon, exp, isWinner}) => {

    let title;
    if(isWinner){
        title = <h1 className="pokedex-winner">Winning Hand</h1>;
    } else {
        title = <h1 className="pokedex-loser">Losing Hand</h1>;
    }

    return (
        <div className="pokedex-container">
            {title}
            <h4>Total Experience: {exp}</h4>
            <div className="pokedex-cards">
                {pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;