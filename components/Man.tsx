import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native';

const images = [
  require(`../assets/images/man/7.png`),  
  require(`../assets/images/man/6.png`),  
  require(`../assets/images/man/5.png`),  
  require(`../assets/images/man/4.png`),  
  require(`../assets/images/man/3.png`),  
  require(`../assets/images/man/2.png`),  
  require(`../assets/images/man/1.png`),  
  require(`../assets/images/man/0.png`),  
]

interface ManProps {
  lives: number
}

const Man: React.FC<ManProps> = React.memo(({ 
  lives
}) => (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images[lives]}
      />
    </View>
))


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: 73,
    borderLeftColor: '#61463c',
    paddingLeft: 30,
    borderTopColor: '#61463c',
    borderLeftWidth: 8,
    borderTopWidth: 8,
    height: 195
  }
})

export default Man
