import React from 'react';
import Pokecard from './Pokecard';
import '../styling/Pokedex.css';


const Pokedex  = () => {
    const pokemon = [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 7, name: 'Squirtle', type: 'fire', base_experience: 62},
            { id: 11, name: 'Metapod', type: 'fire', base_experience: 62},
            { id: 12, name: 'Butterfree', type: 'fire', base_experience: 62},
            { id: 25, name: 'Pikachu', type: 'fire', base_experience: 62},
            { id: 39, name: 'Jigglypuff', type: 'fire', base_experience: 62},
            { id: 94, name: 'Gengar', type: 'fire', base_experience: 62},
            { id: 133, name: 'Eevee', type: 'fire', base_experience: 62},
            { id: 6, name: 'Charizard', type: 'fire', base_experience: 69}
        ]

    return (
        <div className="pokedex-container">
            <h1>Pokedex!</h1>
            <div className="pokedex-cards">
                {pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;