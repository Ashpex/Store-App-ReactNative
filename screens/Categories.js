import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

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
        {
          id: '6',
          name: 'Nintendo',
          image: require('./assets/nintendo.png'),
        },
        {
          id: '7',
          name: 'Google Play/Itunes',
          image: require('./assets/google-play.png'),
        },
        {
          id: '8',
          name: 'Services',
          image: require('./assets/movies.png'),
        },


      ],
    };
  }

  render() {

    const {navigation} = this.props;
    const {categories} = this.state;
    return (

      <FlatList paddingLeft={20} paddingRight={20}
        data={categories} 
        renderItem={({item}) => 
        <CategoryListItem 
            category={item} 
            onPress={() => navigation.navigate('Category', {category: item})}
            />
        } 
        keyExtractor={item => `${item.id}`} 
        contentContainerStyle={styles.container}
        
      />
        
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },

  text: {
    fontSize: 30,
    color: 'red',
  }
});