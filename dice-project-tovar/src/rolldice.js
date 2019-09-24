import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props){
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        //pick two new rolls
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        //set state with new rolls
        this.setState({die1: newDie1, die2: newDie2, rolling: true});
        //Wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    render(){
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling 
                    ? "Rolling..."
                    : "Roll Dice"}</button>
            </div>
        )
    }
}

export default RollDice;

























/* failed code 

import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {
    render(){
        let num, num2;
        switch (Math.floor(Math.random() * 6 ) +1){
            case 1: num = "one";
                break;
            case 2: num = "two";
                break;
            case 3: num = "three";
                break;
            case 4: num = "four";
                break;
            case 5: num = "five";
                break;
            case 6: num = "six"
                break;
        }
        switch (Math.floor(Math.random() * 6 ) +1){
            case 1: num2 = "one";
                break;
            case 2: num2 = "two";
                break;
            case 3: num2 = "three";
                break;
            case 4: num2 = "four";
                break;
            case 5: num2 = "five";
                break;
            case 6: num2 = "six"
                break;
        }
        function newRoll(num, num2){
            num = Math.floor(Math.random() * 6 ) +1;
            num2 = Math.floor(Math.random() * 6 ) +1;
            switch (num){
                case 1: num = "one";
                break;
            case 2: num = "two";
                break;
            case 3: num = "three";
                break;
            case 4: num = "four";
                break;
            case 5: num = "five";
                break;
            case 6: num = "six"
                break;
            }
            switch (num2){
                case 1: num = "one";
                break;
            case 2: num = "two";
                break;
            case 3: num = "three";
                break;
            case 4: num = "four";
                break;
            case 5: num = "five";
                break;
            case 6: num = "six"
                break;
            }
        }
        return (
            <div>
                <Die face={num}/>
                <Die face={num2}/>
                <br />
                <button onClick={this.newRoll}>New Roll!</button>
            </div> 
        )
    }
}

export default RollDice;

*/