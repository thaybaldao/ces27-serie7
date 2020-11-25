import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, View } from 'react-native';
import configureStore from "./src/redux/store";
import Root from "./src/components/root/Root";

const ReduxApp = () => (
  <View style={styles.app}>
    <Provider store={configureStore()}>
      <Root />
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    height: '100%',
  },
});

export default ReduxApp;