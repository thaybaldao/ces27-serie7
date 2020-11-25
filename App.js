import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import configureStore from "./redux/store";
import Root from "./Root";

const ReduxApp = () => (
  <Provider store={configureStore()}>
    <Root />
  </Provider>
);

export default ReduxApp;
