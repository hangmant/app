import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const Filler = ({ wordToFill }) => {
  return (
    <View>
      <Text style={styles.text}>{wordToFill}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#545454',
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
})

export default Filler
