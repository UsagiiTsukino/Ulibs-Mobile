import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native'
import NavigationBar from '../Components/OtherNavigationBar'
import { ScrollView } from 'react-native'
import HomeCarousel from '../Components/HomeCarousel'
import Icon from 'react-native-vector-icons/Ionicons'
import CategoryItem from '../Components/CategoryItem'
import SuggestList from '../Components/SuggestList'

export default function Explore({ navigation }) {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView
        vertical
        // contentContainerStyle={styles.scrollCategory}
        showsHorizontalScrollIndicator={false}
      >
        <NavigationBar />
        <View
          style={{
            marginTop: 8,
          }}
        >
          <HomeCarousel />
          <Image
            source={require('../assets/gurantee.jpg')}
            style={styles.guranteeImg}
          />
          <Image
            source={require('../assets/explore_ad_banner.png')}
            style={{
              width: '100%',
              resizeMode: 'contain',
              height: 50,
            }}
          />
        </View>
        <View>
          <View style={styles.categoryContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Danh mục</Text>
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
          <View style={styles.contentContainer}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.scrollCategory}
              showsHorizontalScrollIndicator={false}
            >
              <CategoryItem
                source={require('../assets/Category/SachTiengViet.jpg')}
                title={'Sách Tiếng Việt'}
              />
              <CategoryItem
                source={require('../assets/Category/SachTiengAnh.jpeg')}
                title={'Sách Tiếng Anh'}
              />
              <CategoryItem
                source={require('../assets/Category/SachTieuThuyet.webp')}
                title={'Sách Tiểu Thuyết'}
              />
              <CategoryItem
                source={require('../assets/Category/SachTruyen.jpg')}
                title={'Sách Truyện'}
              />
              <CategoryItem
                source={require('../assets/Category/SachSelfHelp.webp')}
                title={'Sách Self Help'}
              />
            </ScrollView>
          </View>
        </View>
        <SuggestList />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  guranteeImg: {
    resizeMode: 'contain',
    height: 31,
    width: '100%',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: '',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
    marginLeft: 230,
  },
  text: {
    fontSize: 13,
    color: 'gray',
  },
  headerText: {
    textTransform: 'uppercase',
    color: '#fb5831',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollCategory: {
    height: 120,
  },
})
