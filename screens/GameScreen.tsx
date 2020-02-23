import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'
import Man from '../components/Man'
import { useWordManager } from '../hooks/useWordManager'
import { Text } from '@ui-kitten/components'
import Filler from '../components/Filler'
import { Word } from '../interfaces/Word'
import { fillWithLetter, areEqualsLowercase } from '../utils/word'
import { usePressedLetters } from '../hooks/usePressedLetters'

const GameScreen = ({
  categoryId
}) => {

  const [wordToFill, setWordToFill] = useState<string>('')
  const {
    correct,
    incorrect,
    addCorrectLetter,
    addIncorrectLetter,
    restartLetters
   } = usePressedLetters()
  
  const { word, nextWord, loading } = useWordManager({})
  console.log("Dante: word", word)
  
  const handlePressKey = (letter: string) => {
    console.log("Dante: handlePressKey -> letter", letter)
    const existsLetter = word.name.split('').some(c => areEqualsLowercase(c, letter))
    if(existsLetter) {
      addCorrectLetter(letter)
      setWordToFill(wordToFill => fillWithLetter(word.name, wordToFill, letter))
    } else {
      addIncorrectLetter(letter)
      // Restar vidas 
    }
  }
  
  useEffect(() => {
    if(word && areEqualsLowercase(word.name, wordToFill)) {
      console.log('Dante: GANASTEEEEEE')
      nextWord()
    }
  }, [wordToFill])

  useEffect(() => {
    if(word) {
      restartLetters()
      setWordToFill(word.name.replace(/[^\s]/gi, '-'))
    }
  },[word])

  return (
    <View style={styles.container}>
      {
        loading ?
        <Text>Loading</Text>:
        <BackgroundContainer>
          <Man/>
          <Filler wordToFill={wordToFill}/>
          <Keyboard 
            onPressKey={handlePressKey}
            correctLetters={correct}
            incorrectLetters={incorrect}/>
        </BackgroundContainer>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default GameScreen
