import React from 'react'
import{
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native'

import consoleImage from '../assets/console.png'


export default function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryListItem</Text>
      <Image style={styles.categoryImage} source={consoleImage} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 2,
        marginBottom: 16,
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    },
})
