import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { Button } from '@ui-kitten/components'
import slsx from 'slsx'

type LetterProps = {
  disabled: boolean
  isCorrect: boolean
  children: string
  [key: string]: any
}

const Letter = ({ children, disabled, isCorrect, ...props }: LetterProps) => (
  <Button
    {...props}
    disabled={disabled}
    textStyle={styles.text}
    style={slsx(styles.button, {
      [styles.correctButton]: disabled && isCorrect,
      [styles.incorrectButton]: disabled && !isCorrect,
    })}
  >
    {children}
  </Button>
)

const styles = StyleSheet.create<any>({
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
    paddingHorizontal: 0,
    borderRadius: 8,
  },
  correctButton: {
    backgroundColor: '#a3f8a6',
  },
  incorrectButton: {
    backgroundColor: '#ff9393',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7073',
    marginHorizontal: 0,
  },
})

export default Letter
