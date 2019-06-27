import React, { Component } from 'react';
import './Pokecard.css';
import PokeballLoader from '../pokeball-loader/pokeballLoader';

class Pokecard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemon: {},
            isLoading: true
        }
    }

    componentDidMount() {
        var url = `https://pokeapi.co/api/v2/pokemon/${this.props.id + 1}`;
        fetch(url)
            .then((response) => response.json())
            .then((pokemondata) => {
                const id = pokemondata.id
                const name = pokemondata.name;
                const base_experience = pokemondata.base_experience;
                const type = pokemondata.types[0].type.name;
                const pokemon = { id, name, base_experience, type }
                this.setState({
                    pokemon: pokemon,
                    isLoading: false
                })
            }).catch((error) => console.log(error));
    }


    modifyId(id) {
        if (`${id}`.length === 1) return `00${id}`;
        else if (`${id}`.length === 2) return `0${id}`;
        else if (`${id}`.length === 3) return `${id}`;
    }

    render() {

        const { id, name, type, base_experience, isLoading } = this.state.pokemon;
        const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.modifyId(id)}.png`;
        return (
            <div className="Pokecard">
                <h3> {name} </h3>
                <img src={imageUrl} alt={name} />
                <p> Type: {type} </p>
                <p> Exp: {base_experience}</p>
            </div>
        );

    }
}

export default Pokecard;