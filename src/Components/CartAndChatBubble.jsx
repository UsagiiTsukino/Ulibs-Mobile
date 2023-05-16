import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

function CartAndChatBubble(props) {
  const { iconColor } = props
  return (
    <>
      <TouchableOpacity
        // onPress={onCartPress}
        style={styles.iconContainer}
      >
        <Icon
          name="cart-outline"
          size={26}
          color={iconColor}
          style={styles.icon}
        />
        <Badge style={styles.badge}>4</Badge>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={onChatPress}
        style={styles.iconContainer}
      >
        <Icon
          name="chatbubbles-outline"
          size={26}
          color={iconColor}
          style={styles.icon}
        />

        <Badge style={styles.badge}>25</Badge>
      </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 8,
    position: 'relative',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: 2,
  },
})

export default CartAndChatBubble
