import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    
    render(){
        let title;
        if(this.props.isWinner){
            title = <h4 className="Pokedex-winner">Winning Hand!</h4>
        } else {
            title = <h4 className="Pokedex-loser">Losing Hand!</h4>
        }
        
        return (
            <div className="Pokedex">
                {title}
                <h3>EXP of Deck: {this.props.exp}</h3>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                    <Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;




















/*
<p>Total Experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? "Winner" : "Loser"}</p>
                */