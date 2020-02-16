import React from 'react'
import { View, StyleSheet } from 'react-native'
import Letter from './Letter'
import { useLanguageLetters } from '../hooks/useLanguageLetters'

const Keyboard = React.memo(() => {
  const letterColumns = useLanguageLetters()
  return (
    <View>
      {
        letterColumns.map(letters => {
          return (
            <View style={styles.letterColumn}>
              {
                letters.map(letter => <Letter>{letter}</Letter>)
              }
            </View>
          )
        })
      }
    </View>
  )
})

const styles = StyleSheet.create({
  letterColumn: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Keyboard
