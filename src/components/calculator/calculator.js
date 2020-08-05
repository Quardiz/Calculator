import React, {Component} from 'react';
import './calculator.scss'
import Badge from 'react-bootstrap/Badge'
import { Button } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as calculatorActions from "../../store/calculator/actions";
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          display: "0"
        };
        this.global_style = {
          display: "grid",
          // gridTemplateAreas: '"buttons buttons buttons operators display"\
          //                     "buttons buttons buttons operators"\
          //                     "buttons buttons buttons operators"',
          grid: "100px auto / auto 96px",
          width: "436px"
      
        };
        this.buttons_style = {
          display: "grid",
          grid: "120px 120px 120px 120px / 120px 120px 120px",
          // gridTemplateColumns: "auto 35px 35px",
        };
        this.operators_style = {
          display: "grid",
          grid: "96px 96px 96px 96px 96px / 96px"
          // display: "flex",
          // flexDirection: "column",
          // backgroundColor: "red",
        }
        this.checkLastChar = this.checkLastChar.bind(this);
        this.checkLastOperator = this.checkLastOperator.bind(this);
        this.getNumber = this.getNumber.bind(this);
        this.clear = this.clear.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.equals = this.equals.bind(this);
        this.addDecimal = this.addDecimal.bind(this);
        this.addCommand = this.addCommand.bind(this);
        this.checkLastMinus = this.checkLastMinus.bind(this);
    }
    getNumber(num) {
      if(this.state.display.length < 20){
        this.setState((state) => ({
          display: state.display + num
        }));
      }
      this.setState((state) => {
        let split = state.display.split(" ");
        if(!split[split.length-1].includes(".")){
          split[split.length-1] = parseFloat(split[split.length-1]).toString();
        }
        return {display: split.join(" ")}
      });
    }
    checkLastChar(){
      var regex = /[0-9]$/;
      return regex.test(this.state.display);
    }
    checkLastOperator(){
      var regex = /[/+x-] $/;
      return regex.test(this.state.display);
    }
    checkLastMinus(){
      var regex = /[-]$/;
      return regex.test(this.state.display);
    }
    add(){
      this.addCommand(" + ");
    }
    subtract() {
      this.addCommand(" - ");
    }
    multiply() {
      this.addCommand(" x ");
    }
    divide() {
      this.addCommand(" / ");
    }
    addCommand(operator){
      if(this.checkLastChar()){
        this.setState((state) => ({
          display: state.display + operator
        }));
      } else if(operator[1] === "-" && this.state.display[this.state.display.length - 1] !== "-") {
        this.setState(state => ({
          display: state.display + "-"
        }));
      } else if(this.checkLastOperator()){
        this.setState(
          (state) => {
            let temp = state.display.split("");
            temp.pop();
            temp.pop();
            temp.pop();
            return {
              display: temp.join("") + operator
            };
          }
        );
      } else if(this.checkLastMinus() && this.state.display.length > 4){
        this.setState(
          (state) => {
            let temp = state.display.split("");
            temp.pop();
            temp.pop();
            temp.pop();
            temp.pop();
            return {
              display: temp.join("") + operator
            };
          }
        );
      }
    }
    clear() {
      this.setState((state) => ({
        display: "0"
      }));
    }
    parseMultiplication(calcArray) {
      for(let i = 0; i < calcArray.length; i++){
          switch(calcArray[i]){
            case "x":   
              calcArray.splice(i-1, 3, calcArray[i-1] * calcArray[i+1]);
              i--;
              break;
            case "/":   
              calcArray.splice(i-1, 3, calcArray[i-1] / calcArray[i+1]);
              i--;
              break;
            default:
                break;
          }
      }
    }
    parseAddition(calcArray){
      for(let i = 0; i < calcArray.length; i++){
          switch(calcArray[i]){
            case "+":   
              calcArray.splice(i-1, 3, parseFloat(calcArray[i-1]) + parseFloat(calcArray[i+1]));
              i--;
              break;
            case "-":   
              calcArray.splice(i-1, 3, calcArray[i-1] - calcArray[i+1]);
              i--;
              break;
            default:
                break;
          }
      }
    }
    equals() {
      if(this.checkLastChar()) {
        let calcArray = this.state.display.split(" ");
        // calcArray.shift();
        this.parseMultiplication(calcArray);
        this.parseAddition(calcArray);
        this.setState({
          display: calcArray[0].toString()
        });
      }
    }
    addDecimal(){
      let arr = this.state.display.split(" ");
      if(!arr[arr.length-1].includes(".")){
        this.setState(state => ({
          display: state.display.split() + "."
        }));
      }
    }
    render() {
      const numbas = [[1, "one"],[2, "two"],[3, "three"],[4, "four"],[5, "five"],[6, "six"],[7, "seven"],[8, "eight"],[9, "nine"]];
      
      const calcButtons = numbas.map(n => <Button variant="outline-primary" id={n[1]} className="buttons rounded-0" onClick={() => this.getNumber(n[0])}>{n[0]}</Button>);
      const operators = [["Clear", "clear", this.clear], ["+", "add", this.add],["-", "subtract", this.subtract],["x", "multiply", this.multiply],["/", "divide", this.divide]];
      const calcOperators = operators.map(n => <Button variant="outline-primary" id={n[1]} className="operators rounded-0" onClick={n[2]}>{n[0]}</Button>);

      return <div style={this.global_style} className="component-calculator">

        <Badge id="display" className="display border border-dark rounded-0" variant="info">{this.state.display}</Badge>

        <div id="numbas" style={this.buttons_style}>
        {calcButtons}
        <div style={{display: "flex", gridColumn: "1/4", justifyContent: "stretch"}}>
          <Button style={{width: "240px"}} variant="outline-primary" className="rounded-0" id="zero" onClick={() => this.getNumber(0)}>0</Button>
          <Button style={{width: "120px"}} variant="outline-primary" id="equals" className="operators rounded-0" onClick={this.equals}>=</Button>
        </div>

        </div>
        <div id="operators" className="operators" style={this.operators_style}>
          {calcOperators}
          <Button id="decimal" variant="outline-primary" className="operators rounded-0" onClick={this.addDecimal}>.</Button>
        </div>

      </div>;


    }
  }
  