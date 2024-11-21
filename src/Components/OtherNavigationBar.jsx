import React, { useRef } from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import CartAndChatBubble from './CartAndChatBubble'
import { Animated } from 'react-native'

export default function NavigationBar(props) {
  const { style } = props
  // const [searchQuery, setSearchQuery] = React.useState('');

  // const onChangeSearch = query => setSearchQuery(query);
  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <View style={[styles.container, style]}>
      {/* <View style={styles.container}> */}
      <View style={styles.leftContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder={'NGÀY HỘI SIÊU SALE 50%'}
          placeholderTextColor="#fb5831"
          fontSize={13}
        />
      </View>
      <View style={styles.rightContainer}>
        <CartAndChatBubble iconColor={'#fb5831'} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  placeholder: {
    color: 'orange',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  rightContainer: {
    flexDirection: 'row',
  },
})
