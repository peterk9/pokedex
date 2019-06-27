import React, { Component } from 'react';
import './Pokedex.css'
import Pokecard from '../pokecard/Pokecard';

class Pokedex extends Component {

    render() {
        const { pokemonIds } = this.props;
        const pokecards = []
        for (let id = 0; id < pokemonIds; id++) {
            pokecards.push(<Pokecard key={id} id={id} />)
        }
        return (
            <div className='Pokedex'>
                <h1> Pokedex </h1>
                {pokecards}
            </div>
        )
    }
}

export default Pokedex;