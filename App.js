import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Register from './src/Screens/Register'
import ResetPassword from './src/Screens/ResetPassword'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './src/core/theme'
import MainScreen from './src/Screens/'
import Login from './src/Screens/Login'
import Cart from './src/Screens/Cart'
import Product from './src/Screens/Product'
import { store } from './src/redux/store'
import Payment from './src/Screens/Payment'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegisterScreen" component={Register} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPassword} />
          <Stack.Screen name="HomeScreen" component={MainScreen} />
          <Stack.Screen name="CartScreen" component={Cart} />
          <Stack.Screen name="ProductScreen" component={Product} />
          <Stack.Screen name="PaymentScreen" component={Payment} />
        </Stack.Navigator>
        {/* <MainScreen />  */}
      </NavigationContainer>

      {/* <Cart /> */}
      {/* <Product /> */}
      {/* <Payment /> */}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
