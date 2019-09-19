import React, {Component} from 'react';
import './Pokecard.css';

const frontUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
    render(){
        let zeroFilled = (`000${this.props.id}`.substr(-3))
        let imgSrc = `${frontUrl}${zeroFilled}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} />
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;