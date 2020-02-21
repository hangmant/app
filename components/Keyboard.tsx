import React from 'react'
import { View, StyleSheet } from 'react-native'
import Letter from './Letter'
import { useLanguageLetters } from '../hooks/useLanguageLetters'
import { noop } from '../utils/miscellaneous'

const Keyboard = React.memo(({
  onPressKey = noop
}) => {
  const letterColumns = useLanguageLetters()

  const handleClickKey = (key) => () => onPressKey(key)

  return (
    <View>
      {
        letterColumns.map(letters => {
          return (
            <View style={styles.letterColumn}>
              {
                letters.map(letter => <Letter onPress={handleClickKey(letter)}>{letter}</Letter>)
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
