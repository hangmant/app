import React, { useState } from 'react'
import { Text, Modal, Layout, Button } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'

const ResultGame = ({
  visible = true,
  win = true,
  onClose = () => {},
  onClickNext = () => {},
  onClickBack = () => {},
}) => {
  return (
    <>
      <Modal backdropStyle={styles.backdrop} onBackdropPress={onClose} visible={visible}>
        <Layout level='3' style={styles.modalContainer}>
          <Text style={styles.resultText}>{win ? 'You win' : 'You loose'}</Text>
          <View style={styles.actionsContainer}>
            <View style={styles.buttonContainer}>
              <Button onPress={onClickBack} appearance='outline'>
                Back To Menu
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={onClickNext}>Next Word</Button>
            </View>
          </View>
        </Layout>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 6,
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: 300,
    padding: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 28,
    marginVertical: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
})

export default ResultGame
