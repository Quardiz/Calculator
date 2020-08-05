import React, {Component} from 'react';
import './calcButton.scss'
import Button from 'react-bootstrap/Button'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as calcButtonActions from "../../store/calcButton/actions";
export default class CalcButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <Button variant="outline-primary">{this.props.text}</Button>;
    }
  }
// export default connect(
//     ({ calcButton }) => ({ ...calcButton }),
//     dispatch => bindActionCreators({ ...calcButtonActions }, dispatch)
//   )( calcButton );