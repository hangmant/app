import React from 'react'
import { View, StyleSheet, ScrollView, ColorPropType } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { useQuery } from 'react-apollo'
import { GET_CATEGORIES } from '../apollo/queries'
import get from 'lodash.get'
import { Category } from '../interfaces/Category'
import { useNavigation } from '@react-navigation/native'
import color from 'color'

const CategoryScreen = () => {
  const { data } = useQuery(GET_CATEGORIES)
  const navigation = useNavigation()

  const categories: Category[] = [
    {
      _id: undefined,
      name: 'Todas',
      color: '#e91e63',
    },
  ].concat(get(data, 'categories', []))

  const handlePressCategory = categoryId => () => {
    navigation.replace('Game', { categoryId })
  }

  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            style={
              [
                {
                  backgroundColor: category.color,
                  borderColor: color(category.color).darken(0.2),
                },
              ] as any
            }
            onPress={handlePressCategory(category._id)}
          >
            {category.name}
          </Button>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  button: {},
})

export default CategoryScreen
