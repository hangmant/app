import React from 'react'
import { StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'
import Man from '../components/Man'
import { useWordManager } from '../hooks/useWordManager'

const GameScreen = ({
  categoryId
}) => {
  const handlePressKey = (key) => {
    nextWord()
    console.log('Key  pressed: ', key)
  }


  const { word, nextWord, loading } = useWordManager({})
  console.log("Dante: nextWord", nextWord)
  console.log("Dante: loading", loading)
  console.log("Dante: word", word)


  return (
    <View style={styles.container}>
      <BackgroundContainer>
        <Man/>
        <Keyboard onPressKey={handlePressKey}/>
      </BackgroundContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default GameScreen
