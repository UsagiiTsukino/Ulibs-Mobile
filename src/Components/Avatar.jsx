import React from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'

function Avatar(props) {
  const { size, source, style } = props
  return (
    <View>
      <Image
        source={source}
        resizeMode="cover"
        style={[
          {
            width: size,
            height: size,
            borderRadius: 200,
          },
          style,
        ]}
      />
    </View>
  )
}

export default Avatar
