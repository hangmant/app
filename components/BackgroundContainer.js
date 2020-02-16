import React from 'react'
import {  ImageBackground, View, StyleSheet } from 'react-native'

const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground 
      source={require('../assets/images/background_home.png')} 
      style={{width: '100%', height: '100%'}}>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  childrenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    justifyContent: 'space-between',
  }
})

export default BackgroundContainer
