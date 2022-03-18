import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: '1',
          name: 'Consoles',
          image: require('./assets/console.png'),
        },
        {
          id: '2',
          name: 'Steam',
          image: require('./assets/steam.png'),
        },
        {
          id: '3',
          name: 'Steam Wallet',
          image: require('./assets/steamwallet.png'),
        },
        {
          id: '4',
          name: 'Xbox',
          image: require('./assets/xbox.png'),
        },
        {
          id: '5',
          name: 'Plalystation',
          image: require('./assets/playstation.png'),
        },
      ],
    };
  }

  render() {

    const {categories} = this.state;
    return (
        
    

      <FlatList 
        data={categories} 
        renderItem={({item}) => <CategoryListItem category={item} />} 
        keyExtractor={item => item.id} 
        containerStyle={{padding: 16}}
        
      />
        
    );
  }
}


const tyles = StyleSheet.create({
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