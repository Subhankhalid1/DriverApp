import React , {useState, useEffect}from 'react'
import {SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import SplashScreen from './src/screens/Splash'
import Signup from './src/components/Signup/Signup'
import Login from './src/components/Login/Login'
import Home from './src/components/Home/Home'
import DrawerContent from './src/screens/DrawerContent'
import Orders from './src/components/Orders/Orders'
import Profile from './src/components/Profile/Profile'
import Alerts from './src/components/Alerts/Alerts'
import Messages from './src/components/Messages/Message'
import AsyncStorage from '@react-native-async-storage/async-storage'
const DrawerScreen = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}
export const AuthContext = React.createContext()
const App = () => {
  const [auth, setauth] = useState(null)
  useEffect(async () => {
    const jsonValue = await AsyncStorage.getItem('driver')
    jsonValue != null ? JSON.parse(jsonValue) : null
    setauth(jsonValue)
  }, [])

  const Stack = createStackNavigator()
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 1000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.09,
      restSpeedThreshold: 0.09,
    },
  }
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{auth, setauth}}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Splash'
              headerMode='none'
              screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}>
              {auth == null ? (
                <>
                  <Stack.Screen name='Splash' component={SplashScreen} />
                  <Stack.Screen name='Register' component={Signup} />
                  <Stack.Screen name='Login' component={Login} />
                </>
              ) : (
                <>
                  <Stack.Screen name='Home' component={DrawerScreen} />
                  <Stack.Screen name='Orders' component={Orders} />
                  <Stack.Screen name='Profile' component={Profile} />
                  <Stack.Screen name='Alerts' component={Alerts} />
                  <Stack.Screen name='Messages' component={Messages} />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>
    </SafeAreaProvider>
  )
}

export default App
