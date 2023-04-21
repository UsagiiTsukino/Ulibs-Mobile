import React, { useEffect, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
// import Carousel from 'react-native-snap-carousel'

function HomeCarousel() {
  const width = Dimensions.get('window').width
  const scrollViewRef = useRef(null)
  const data = [
    { id: 1, link: '../assets/Carousel/carousel.jpeg' },
    { id: 2, link: '../assets/Carousel/carousel.jpeg' },
    { id: 3, link: '../assets/Carousel/carousel.jpeg' },
    { id: 4, link: '../assets/Carousel/carousel.jpeg' },
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollViewRef.current) {
        let nextIndex =
          (scrollViewRef.current.contentOffset.x /
            scrollViewRef.current.layoutMeasurement.width +
            1) %
          3
        scrollViewRef.current.scrollTo({
          x: nextIndex * scrollViewRef.current.layoutMeasurement.width,
          animated: true,
        })
      }
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <View style={styles.wrapContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        onLayout={() => {
          // Khởi tạo layoutMeasurement và contentOffset
          scrollViewRef.current.measure((x, y, width, height, pageX, pageY) => {
            scrollViewRef.current.layoutMeasurement = { width, height }
            scrollViewRef.current.contentOffset = { x: pageX, y: pageY }
          })
        }}
      >
        {/* {data.map((item) => (
          // <View key={item.id} style={{ width: width }} width={width}>
          //   <Image
          //     source={require('../assets/Carousel/carousel.jpeg')}
          //     style={{ width: width, height: width / 2, resizeMode: 'stretch' }}
          //   />
          // </View>
        ))} */}
        <View style={{ width: width }} width={width}>
          <Image
            source={require('../assets/Carousel/carousel.jpeg')}
            style={{ width: width, height: width / 2, resizeMode: 'stretch' }}
          />
        </View>
        <View style={{ width: width }} width={width}>
          <Image
            source={require('../assets/Carousel/carousel2.jpeg')}
            style={{ width: width, height: width / 2, resizeMode: 'stretch' }}
          />
        </View>
        <View style={{ width: width }} width={width}>
          <Image
            source={require('../assets/Carousel/carousel3.jpeg')}
            style={{ width: width, height: width / 2, resizeMode: 'stretch' }}
          />
        </View>
        <View style={{ width: width }} width={width}>
          <Image
            source={require('../assets/Carousel/carousel4.jpeg')}
            style={{ width: width, height: width / 2, resizeMode: 'stretch' }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapContainer: {
    marginTop: 0,
  },
  container: {
    paddingHorizontal: 0,
  },
})
export default HomeCarousel
