import React from 'react'
import{
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native'

export default function CategoryListItem(props) {
    const {category, onPress} = props;
  return (
      <TouchableOpacity activeOpacity={0.5} 
        onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.categoryImage} source={category.image} />
        </View>
    </TouchableOpacity>
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
        elevation: 3,
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
