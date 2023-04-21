import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CountDown from 'react-native-countdown-component'
import Icon from 'react-native-vector-icons/Ionicons'

function FlashSaleSection() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/flash_sale.png')}
            style={styles.image}
          />
          <CountDown
            size={8}
            until={1000}
            // onFinish={() => {}}
            digitStyle={{
              backgroundColor: '#FFF',
              borderWidth: 2,
              borderColor: '#1CC625',
            }}
            digitTxtStyle={{ color: '#1CC625' }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: '#1CC625' }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
            style={styles.CountDown}
          />
        </View>
        <View style={styles.more}>
          <Text style={styles.text}>Xem tất cả</Text>
          <Icon
            name="chevron-forward-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.contentContaier}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollProduct}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/cay-cam-ngot.jpg')}
              style={styles.productImage}
            />
          </View>
          <View style={styles.productItem}></View>
          <View style={styles.productItem}></View>
        </ScrollView>
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
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 25,
    resizeMode: 'contain',
  },
  CountDown: {
    height: 20,
    width: 100,
  },
  more: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },
  text: {
    fontSize: 13,
    color: 'gray',
    marginLeft: 110,
  },
  icon: {},
  contentContaier: {},
  scrollProduct: {
    height: 200,
    width: 900,
    backgroundColor: 'brown',
  },
  productItem: {
    width: 140,
    height: 200,
    backgroundColor: '#fff',
    marginLeft: 16,
  },
})
export default FlashSaleSection
