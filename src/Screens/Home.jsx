import React from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import NavigationBar from '../Components/NavigationBar'
import HomeCarousel from '../Components/HomeCarousel'
import HorizontalScrollView from '../Components/HorizontalScrollView'
import Banner from '../Components/Banner'
import FlashSaleSection from '../Components/FlashSaleSection'
import { ScrollView } from 'react-native'

export default function Home({ navigation }) {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <NavigationBar />
      <HomeCarousel />
      <HorizontalScrollView />
      <Banner imagePath={require('../assets/Carousel/slide1.webp')} />
      <FlashSaleSection />
    </ScrollView>
  )
}
const styles = StyleSheet.create({})
