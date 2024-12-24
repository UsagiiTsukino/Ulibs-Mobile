import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CartAndChatBubble from './CartAndChatBubble'
import { Animated } from 'react-native'

export default function NavigationBar({ scrollY }) {
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > 50) {
        setBackgroundColor('orange')
      } else {
        setBackgroundColor('transparent')
      }
    })
    return () => {
      scrollY.removeListener(listener)
    }
  }, [scrollY])

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <View style={styles.leftContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={'NGÀY HỘI SIÊU SALE 50%'}
          placeholderTextColor="#fb5831"
          fontSize={13}
        />
      </View>
      <View style={styles.rightContainer}>
        <CartAndChatBubble iconColor={'#fff'} />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'fixed',
    top: 35,
    left: 0,
    right: 0,
    zIndex: 1,
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
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
})
