import { light as lightTheme, mapping } from '@eva-design/eva'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApplicationProvider } from '@ui-kitten/components'
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import ApolloProvider from './apollo/ApolloProvider'
import useLinking from './navigation/useLinking'
import CategoryScreen from './screens/CategoryScreen'
import GameScreen from './screens/GameScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const { getInitialState } = useLinking(containerRef)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <ApolloProvider>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={HomeScreen} />
                <Stack.Screen name="Categories" component={CategoryScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </ApplicationProvider>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
