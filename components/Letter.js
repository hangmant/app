import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components';

const Letter = ({ children, ...props}) => {
  return (
    <Button {...props} underlayColor={'blue'} textStyle={styles.text} style={styles.button}>
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5fdff',
    minHeight: 38,
    height: 38,
    minWidth: 32,
    width: 32,
    marginHorizontal: 4,
    marginVertical: 4,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#5c5c5c57',
    borderWidth: 2,
    boxShadow: '0px 0px 0px 2px #7b7b7b40',
    paddingHorizontal: 0,
    borderRadius: 8,
  },
  text: {
    fontSize: '16px',
    fontWeight: '500',
    marginHorizontal: 0,
    color: '#6b7073'
  }
})

export default Letter
