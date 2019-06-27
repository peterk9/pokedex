import React, { Component } from 'react';
import './Pokedex.css'
import Pokecard from '../pokecard/Pokecard';

class Pokedex extends Component {

    render() {
        const { pokemon } = this.props;
        return (
            <div className='Pokedex'>
                <h1> Pokedex </h1>
                {
                    pokemon.map((pokemon) => {
                        const { id, name, type, base_experience } = pokemon;
                        return <Pokecard key={id} id={id} name={name} type={type} base_experience={base_experience} />
                    })
                }
            </div>
        )
    }
}

export default Pokedex;