import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundContainer>
        <Text>JOJOJOJ</Text> 
        <Keyboard/>
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
