import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '@ui-kitten/components'
// import { BoxShadow } from 'react-native-shadow'

const GameButton = ({ children, ...props }) => {
  const shadowOpt = {
    width: 400,
    height: 50,
    color: '#000',
    flex: 1,
    border: 2,
    radius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    opacity: 0.2,
    x: 0,
    y: 0,
    style: {
      marginVertical: 0,
    },
  }

  return (
    // <BoxShadow setting={shadowOpt}>
    <Button {...props} textStyle={styles.text} style={styles.button}>
      {children}
    </Button>
    // </BoxShadow>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fd9712',
    minHeight: 44,
    // width: 700,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#5c5c5c57',
    borderWidth: 4,
    textShadowColor: '#7b7b7b40',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,

    // boxShadow: '0px 0px 0px 3px #7b7b7b40',
    height: 44,
    borderRadius: 14,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: '#5c5c5c69',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
})

export default GameButton
