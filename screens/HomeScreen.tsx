import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import LogoHome from '../components/LogoHome'

export default function HomeScreen() {
  const navigation = useNavigation()

  console.log('Dante: HomeScreen -> navigation', navigation)

  const handlePressPlay = () => {
    navigation.navigate('Categories')
    console.log('clickeado')
  }
  return (
    <View style={styles.container}>
      <BackgroundContainer>
        <Text>Score: 123</Text>
        <LogoHome />
        <Button onPress={handlePressPlay} size="giant">
          PLAY NOW!
        </Button>
      </BackgroundContainer>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
