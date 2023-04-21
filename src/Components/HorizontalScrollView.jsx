import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import UtilScrollViewList from './UtilScrollViewList'

function HorizontalScrollView() {
  const width = Dimensions.get('window').width
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View width={800} style={styles.itemList}>
          <UtilScrollViewList style={styles.item} />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
  itemList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 2,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  item: {
    width: 75, // Chiều rộng của mỗi item
    height: 90, // Chiều cao của mỗi item
    marginHorizontal: 16, // Khoảng cách giữa các item
    marginVertical: 16,
    backgroundColor: '#fff', // Màu nền của item
  },
})
export default HorizontalScrollView
