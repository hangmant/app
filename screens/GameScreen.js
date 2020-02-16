import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'

const GameScreen = () => {

  const handlePressKey = (key) => {
    console.log('Key  pressed: ', key)
  }
  return (
    <View style={styles.container}>
      <BackgroundContainer>
        <Text>JOJOJOJ</Text> 
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
