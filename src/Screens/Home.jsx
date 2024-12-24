import React, { useEffect, useRef } from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import NavigationBar from '../Components/NavigationBar'
import HomeCarousel from '../Components/HomeCarousel'
import HorizontalScrollView from '../Components/HorizontalScrollView'
import Banner from '../Components/Banner'
import FlashSaleSection from '../Components/FlashSaleSection'

import HotSearch from '../Components/HotSearch'
import SuggestList from '../Components/SuggestList'
import { Animated } from 'react-native'

import { getProduct } from '../redux/Reducer/book.slice'
import { useDispatch, useSelector } from 'react-redux'
export default function Home({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current
  const dispatch = useDispatch()
  const bookList = useSelector((state) => state.root.book)
  useEffect(() => {
    const promise = dispatch(getProduct())
    return () => {
      promise.abort()
    }
  }, [])
  return (
    <Animated.ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{ position: 'relative' }}
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: true,
        }
      )}
      scrollEventThrottle={16}
    >
      <NavigationBar scrollY={scrollY} />
      <HomeCarousel />
      <HorizontalScrollView />
      <Banner
        imagePath={require('../assets/Carousel/slide1.webp')}
        height={150}
      />
      <FlashSaleSection bookList={bookList} />
      <HotSearch bookList={bookList} />
      <SuggestList bookList={bookList} />
    </Animated.ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
