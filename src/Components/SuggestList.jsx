import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductCard from './ProductCard'

function SuggestList() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Gợi ý hôm nay</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    marginTop: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerText: {
    textTransform: 'uppercase',
    color: '#fb5831',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: '#efefef',
    flex: 1,
    flexDirection: 'row',
    flexWrap: true,
  },
})

export default SuggestList
