import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 110,
    marginBottom: 8,
  },
})
