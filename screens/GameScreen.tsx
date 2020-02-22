import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'
import Man from '../components/Man'
import { useQuery } from '@apollo/react-hooks';
import { GET_RANDOM_WORDS } from '../apollo/queries';

const GameScreen = ({
  categoryId
}) => {
  const handlePressKey = (key) => {
    console.log('Key  pressed: ', key)
  }

  const [words, setWords] = useState([])

  const { data } = useQuery(GET_RANDOM_WORDS,  {
    variables: {
      ...(categoryId ? { categoryId } : {})
    }
  })
  console.log("Dante: data", data)


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
