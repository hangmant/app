import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const LogoHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>😔 Hangman</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },  
  text: {
    fontWeight: 'bold',
    color: '#795548',
    fontSize: 50
  }
})

export default LogoHome
