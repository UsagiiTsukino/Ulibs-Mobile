import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ImageBackground, StyleSheet, Text } from 'react-native'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/pastel-background-goo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
