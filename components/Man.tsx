import React, { useState } from 'react'
import { View, Image } from 'react-native';
import { Button } from '@ui-kitten/components';

const images = [
  require(`../assets/images/man/0.jpg`),  
  require(`../assets/images/man/1.jpg`),  
  require(`../assets/images/man/2.jpg`),  
  require(`../assets/images/man/3.jpg`),  
  require(`../assets/images/man/4.jpg`),  
  require(`../assets/images/man/5.jpg`),  
  require(`../assets/images/man/6.jpg`),  
  require(`../assets/images/man/7.jpg`),  
]

const Man = React.memo(({ 
  // position = 2
}) => {
  const [position, setPosition] = useState(0)



  return (
    <View>
        <Image
          style={{width: 400, height: 300}}
          source={images[position]}
        />
        <Button onClick={() => setPosition((position + 1) % images.length)}>Siguiente</Button>
    </View>
  )
})

export default Man
