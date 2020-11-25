import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import {set, evaluate, deleteLastEntry, clear} from "../../redux/actions";

class Root extends Component {
  render() {
    const btns = [ "7", "8", "9", "C",
                   "4", "5", "6", "/",
                   "1", "2", "3", "*",
                   "0", ".", "+", "-",
                   "<-", "=" ];

    const { set, evaluate, deleteLastEntry, clear} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <TextInput style={styles.result} value={this.props.expression} />
        </View>
        <View style={styles.buttonsContainer}>
          {
            // creates keyboard buttons and sets up theirs onClick methods
            btns.map((item, key) => {
              if(item === "C"){
                return(
                  <TouchableOpacity style={styles.button} onPress={ clear.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else if(item === "="){
                return(
                  <TouchableOpacity style={styles.button} onPress={ evaluate.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
                )
              } else if(item === "<-"){
                return(
                  <TouchableOpacity style={styles.button} onPress={ deleteLastEntry.bind(this) } key={key}><Text style={styles.key}>{item}</Text></TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: '50px',
  },
  resultContainer: {
    padding: '6%',
  },
  result: {
    padding: '3%',
    display: 'block',
    width: '100%',
    border: 'none',
    height: 50,
    fontWeight: 700,
    fontSize: '30px',
    textAlign: 'right',
    borderRadius: '6px',
    backgroundColor: 'white',
    color: 'black'
  },
  buttonsContainer:{
    padding: '3%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  button:{
    width: '19%',
    height: 55,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    border: 'none',
    borderRadius: '55px',
    backgroundColor: '#666666',
  },
  key:{
    color: 'white',
    fontWeight: 600,
    fontSize: '24px',
    margin: 'auto'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
