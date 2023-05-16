import React, { useRef } from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import NavigationBar from '../Components/NavigationBar'
import HomeCarousel from '../Components/HomeCarousel'
import HorizontalScrollView from '../Components/HorizontalScrollView'
import Banner from '../Components/Banner'
import FlashSaleSection from '../Components/FlashSaleSection'
import { ScrollView } from 'react-native'
import HotSearch from '../Components/HotSearch'
import SuggestList from '../Components/SuggestList'
import { Animated } from 'react-native'

export default function Home({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <Animated.ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{ position: 'relative' }}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: false,
        }
      )}
      scrollEventThrottle={16}
    >
      <NavigationBar />
      <HomeCarousel />
      <HorizontalScrollView />
      <Banner
        imagePath={require('../assets/Carousel/slide1.webp')}
        height={150}
      />
      <FlashSaleSection />
      <HotSearch />
      <SuggestList />
    </Animated.ScrollView>
  )
}
const styles = StyleSheet.create({})
