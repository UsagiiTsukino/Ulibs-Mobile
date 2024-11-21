import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ProductCard from './ProductCard'

import { getProduct } from '../redux/Reducer/book.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

function SuggestList(props) {
  const { bookList } = props
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Gợi ý hôm nay</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {bookList.map((book) => (
          <TouchableOpacity
            key={book.slug}
            onPress={() => {
              navigation.navigate('ProductScreen', { book })
            }}
            style={{
              width: '48%',
              height: 250,
              marginVertical: 4,
              marginHorizontal: 4,
              backgroundColor: '#fff',
            }}
          >
            <ProductCard
              imgSource={book.image}
              productName={book.bookName}
              productPrice={book.price}
            />
          </TouchableOpacity>
        ))}
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
    flexWrap: 'wrap',
  },
})

export default SuggestList
