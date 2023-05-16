import React from 'react'
import { Dimensions, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

function NotiCategoryItem(props) {
  const { title, icon, description, iconColor } = props
  const width = Dimensions.get('window').width
  return (
    <View style={styles.item} width={width}>
      <View style={styles.IconHeader}>
        <Icon name={icon} style={styles.icon} size={20} color={iconColor} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <View style={styles.iconAndBadge}>
        <Badge style={styles.badge}>99+</Badge>
        <Icon name="chevron-forward-outline" size={20} color={'#ccc'} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    marginTop: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
  },
  IconHeader: {
    padding: 5,
    borderWidth: 1,
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#ccc',
  },
  body: {
    width: 300,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  description: {
    fontSize: 11,
    color: 'gray',
  },
  iconAndBadge: {
    flexDirection: 'row',
  },
  badge: {},
})
export default NotiCategoryItem
