import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function Banner(props) {
  const { imagePath, height } = props
  return (
    <View style={styles.container} height={height}>
      <Image
        source={imagePath}
        style={styles.image}
        resizeMode="stretch"
      ></Image>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: '100%',
  },
})
export default Banner
