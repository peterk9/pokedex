import React, { Component } from 'react';
import './pokeballLoader.css';

class PokeballLoader extends Component {
    render() {
        return (
            <div className="center-on-page">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>
            </div>
        )
    }
}

export default PokeballLoader;