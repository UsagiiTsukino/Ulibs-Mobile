import React from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function Personal({ navigation }) {
  return <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})
