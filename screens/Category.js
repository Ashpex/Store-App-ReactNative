import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class Category extends React.Component {
    static navigationOptions = {
        title: 'Category',
    };

  render() {

    const {categories} = this.state;
    return (
        
        <View>
            <Text>Category</Text>
        </View>
        
    );
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