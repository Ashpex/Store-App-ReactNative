import React from 'react';
import { StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import CategoryListItem from './components/CategoryListItem';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {

    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  text: {
    fontSize: 30,
    color: 'red',
  }
});