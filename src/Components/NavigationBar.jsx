import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

export default function NavigationBar() {
  // const [searchQuery, setSearchQuery] = React.useState('');

  // const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="ios-search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder={'NGÀY HỘI SIÊU SALE 50%'}
          placeholderTextColor="#fb5831"
          fontSize={13}
        />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          // onPress={onCartPress}
          style={styles.iconContainer}
        >
          <Icon
            name="cart-outline"
            size={26}
            color="#fff"
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
            color="#fff"
            style={styles.icon}
          />

          <Badge style={styles.badge}>25</Badge>
        </TouchableOpacity>
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
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 35,
    left: 0,
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
