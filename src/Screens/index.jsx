import React from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import Home from './Home'
import Explore from './Explore'
import Notification from './Notification'
import Personal from './Personal'
import { NavigationContainer } from '@react-navigation/native'
// import { SafeAreaView } from 'react-native-safe-area-context'

export default function MainScreen({ navigation }) {
  const Tabs = AnimatedTabBarNavigator()
  return (
    <View style={styles.droidSafeArea}>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#2F7C6E',
          inactiveTintColor: '#222222',
        }}
        style={styles.tabBar}
      >
        <Tabs.Screen
          name="Trang chủ"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                size={size ? size : 32}
                color={focused ? color : '#222222'}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Khám phá"
          component={Explore}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="compass"
                size={size ? size : 32}
                color={focused ? color : '#222222'}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Thông báo"
          component={Notification}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="bell"
                size={size ? size : 32}
                color={focused ? color : '#222222'}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Cá nhân"
          component={Personal}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="user"
                size={size ? size : 32}
                color={focused ? color : '#222222'}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  )
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})
