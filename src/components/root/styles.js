import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calculatorContainer: {
    width: '100%',
  },
  resultContainer: {
    marginTop: 50,
    padding: '3%',
  },
  result: {
    padding: '3%',
    width: '100%',
    height: 70,
    fontWeight: "500",
    fontSize: 45,
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
    height: 65,
    margin: '3%',
    borderRadius: 65,
    backgroundColor: '#454545',
    justifyContent: 'center',
    alignItems: 'center',
  },
  key:{
    color: 'white',
    fontWeight: "500",
    fontSize: 30,
  },
});

export default styles;
