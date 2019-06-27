import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {

    componentWillMount() {
        var url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    pokemon: data
                })
                console.log(this.state.pokemon)
            }).catch((error) => console.log(error));
    }


    modifyId(id) {
        if (`${id}`.length === 1) return `00${id}`;
        else if (`${id}`.length === 2) return `0${id}`;
        else if (`${id}`.length === 3) return `${id}`;
    }

    render() {
        const { id, name, type, base_experience } = this.props;
        const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.modifyId(id)}.png`;
        return (
            <div className="Pokecard">
                <h3> {name} </h3>
                <img src={imageUrl} alt={name} />
                <p> Type: {type}</p>
                <p> Exp: {base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;