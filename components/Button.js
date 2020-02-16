import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components';

const GameButton = ({ children, ...props}) => {
  return (
    <Button {...props} underlayColor={'blue'} textStyle={styles.text} style={styles.button}>
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fd9712',
    minHeight: 44,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#5c5c5c57',
    borderWidth: 4,
    
    textShadowColor: '#7b7b7b40',
    textShadowOffset: {width:0, height: 0},
    textShadowRadius: 3,

    // boxShadow: '0px 0px 0px 3px #7b7b7b40',
    height: 44,
    borderRadius: 14,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: '#5c5c5c69',
    textShadowOffset: {width:2, height: 2},
    textShadowRadius: 0
  }
})

export default GameButton
