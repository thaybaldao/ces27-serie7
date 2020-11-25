import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import {set, evaluate, deleteLastEntry, clear} from "../../redux/actions";
import styles from "./styles";

class Root extends Component {
  render() {
    const btns = [ "C", "<-", ".", "/",
                   "7", "8", "9", "*",
                   "4", "5", "6", "-",
                   "1", "2", "3", "+",
                   "0", "="];

    const { set, evaluate, deleteLastEntry, clear} = this.props;

    return (
      <View style={styles.calculatorContainer}>
        <View style={styles.resultContainer}>
          <TextInput style={styles.result} value={this.props.expression} />
        </View>
        <View style={styles.buttonsContainer}>
          {
            // creates keyboard buttons and sets up theirs onClick methods
            btns.map((item, key) => {
              if(item === "C"){
                return(
                  <TouchableOpacity style={[styles.button, {backgroundColor: '#a2a2a2'}]} onPress={ clear.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else if(item === "="){
                return(
                  <TouchableOpacity style={[styles.button, {backgroundColor: '#a2a2a2'}]} onPress={ evaluate.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else if(item === "<-"){
                return(
                  <TouchableOpacity style={[styles.button, {backgroundColor: '#a2a2a2'}]} onPress={ deleteLastEntry.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else if(item === "/" || item === "*" || item === "-" || item === "+" || item === "."){
                return(
                  <TouchableOpacity style={[styles.button, {backgroundColor: '#E69500'}]} onPress={ set.bind(this, item) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else {
                return(
                  <TouchableOpacity style={styles.button} onPress={ set.bind(this, item) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              }
            })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    expression: state.expression
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    set: (key) => dispatch(set(key)),
    evaluate: () => dispatch(evaluate()),
    deleteLastEntry: () => dispatch(deleteLastEntry()),
    clear: () => dispatch(clear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
