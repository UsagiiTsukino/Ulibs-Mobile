import React from 'react'
import { View, Image, Text } from 'react-native'
import { Avatar } from 'react-native-paper'

function CategoryItem(props) {
  const { source, title } = props
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 8,
      }}
    >
      <Image
        source={source}
        style={{
          resizeMode: 'contain',
          height: 65,
          width: 65,
          borderRadius: 200,
          backgroundColor: '#e3e3e3',
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 11,
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default CategoryItem
