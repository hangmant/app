import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'
import { Word } from '../interfaces/Word'

interface CategoryGameProps {
  word: Word
}

const CategoryGame: React.FC<CategoryGameProps> = ({ word }) => (
  <View style={[styles.container, {
    backgroundColor: word.category.color
  }]}>
    <Text style={styles.categoryName}>{ word.category.name.toUpperCase()}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-end',
    backgroundColor: '#4caf50',
  },
  categoryName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default CategoryGame