import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { useQuery } from 'react-apollo'
import { GET_CATEGORIES } from '../apollo/queries'
import get from 'lodash.get'
import { Category } from '../interfaces/Category'
import { useNavigation } from '@react-navigation/native'


const CategoryScreen = () => {
  const { data } = useQuery(GET_CATEGORIES)
  const navigation = useNavigation()
  
  const categories: Category[] = get(data, 'categories', [])

  const handlePressCategory = (categoryId) => () => {
    navigation.navigate('Game', { categoryId })
  }

  return (
    <ScrollView style={styles.container}>
      {
        categories.map(category => (
          <View key={category._id} style={styles.buttonContainer}>
            <Button 
              style={[
                styles.button, 
                { 
                  backgroundColor: category.color,
                  borderColor: category.color 
                }
              ]}
              onPress={handlePressCategory(category._id)}
             >{category.name}</Button>
          </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  buttonContainer: {
    paddingVertical: 10
  },
  button: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})

export default CategoryScreen
