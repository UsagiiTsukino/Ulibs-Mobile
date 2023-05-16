import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native'
import NotiCategoryItem from '../Components/NotiCategoryItem'
import { TouchableOpacity } from 'react-native'

export default function Notification({ navigation }) {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Thông báo</Text>
        </View>
        <View style={styles.notiCategoryList}>
          <NotiCategoryItem
            title="Khuyến mãi"
            icon="pricetag-outline"
            iconColor="orange"
            description="Truyện tranh, sách thiếu nhi, tiểu thuyết, tất cả đều có tại ULibs"
          />
          <NotiCategoryItem
            title="Cập nhật ULibs"
            icon="briefcase-outline"
            iconColor="#fb5831"
            description="Giảm giá 30% toàn bộ sản phẩm tại ULibs"
          />
          <NotiCategoryItem
            title="Phần thưởng ULibs"
            icon="gift-outline"
            iconColor="#543f97"
            description="Bạn nhận được 1 voucher giảm giá 30.000 đ và rất nhiều voucher khác"
          />
        </View>
        <View>
          <View style={styles.notiOrder_Header}>
            <Text style={styles.notiOrder_Title}>Cập nhật đơn hàng</Text>
            <Text style={styles.notiOrder_More}>Xem tất cả</Text>
          </View>
          <View style={styles.notiOrder_Section}>
            <Image
              source={require('../assets/order.png')}
              style={styles.notiOrder_Image}
            />
            <Text style={styles.notiOrder_Description}>
              Bạn hiện chưa có thông báo mới về đơn hàng nào
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    backgroundColor: '#efefef',
    height: '100%',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  notiCategoryList: {
    marginTop: 8,
  },
  notiOrder_Header: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notiOrder_Title: {
    color: 'dimgray',
  },
  notiOrder_More: {
    color: '#989898',
  },
  notiOrder_Section: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 200,
    justifyContent: 'space-evenly',
  },
  notiOrder_Image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  notiOrder_Description: {},
})
