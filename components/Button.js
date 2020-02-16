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
    boxShadow: '0px 0px 0px 3px #5c5c5c33',
    height: 44,
    borderRadius: 14,
    '&:hover': {
      backgroundColor: '#ff930',
    }
  },
  text: {
    fontSize: '22px',
    fontWeight: 'bold',
    textShadowColor: '#f08d08',
    textShadowOffset: {width:2, height: 2},
    textShadowRadius: 0
  }
})

export default GameButton
