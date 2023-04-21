import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Label(props) {
  return (
    <View>
      <Text style={styles.label} {...props} />
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
