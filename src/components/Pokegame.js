import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = () => {

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
    ];

    let hand1 = [];
    let hand2 = [...pokemon];

    while(hand1.length < hand2.length){
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

    hand1.pop();


    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0);

    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0);

    return (
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
        </div>
    )
}

export default Pokegame;