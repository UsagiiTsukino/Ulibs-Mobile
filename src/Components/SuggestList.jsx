import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductCard from './ProductCard'
import { useAppDispatch } from '../redux/store'
import { getProduct } from '../redux/Reducer/book.slice'
import { useSelector } from 'react-redux'

function SuggestList() {
  const dispatch = useAppDispatch()
  const bookList = useSelector((state) => state.root.book)
  // dispatch(getProduct())
  useEffect(() => {
    const promise = dispatch(getProduct())
    return () => {
      promise.abort()
    }
  }, [])
  console.log('bookList')
  console.log(bookList)

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Gợi ý hôm nay</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {bookList.map((book) => (
          <ProductCard
            imgSource={book.image}
            productName={book.bookName}
            productPrice={book.bookPrice}
          />
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
    flexWrap: true,
  },
})

export default SuggestList
