import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calculatorContainer: {
    width: '90%',
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
    height: 70,
    fontWeight: 500,
    fontSize: '60px',
    textAlign: 'right',
    color: 'white'
  },
  buttonsContainer:{
    padding: '3%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  button:{
    width: '19%',
    height: 60,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    border: 'none',
    borderRadius: '60px',
    backgroundColor: '#454545',
  },
  key:{
    color: 'white',
    fontWeight: 500,
    fontSize: '24px',
    margin: 'auto'
  },
});

export default styles;
