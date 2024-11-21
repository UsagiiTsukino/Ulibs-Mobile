import React from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Banner from '../Components/Banner'
import Avatar from '../Components/Avatar'
import { Badge, Avatar as _Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

export default function Personal({ navigation }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.root.user)
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Banner
            imagePath={require('../assets/pastel-background-goo.jpg')}
            height={250}
          />
          <Avatar
            size={180}
            source={{ uri: user.avatar_img }}
            style={styles.avatar}
          />
          <View style={styles.nameSection}>
            <Text style={styles.user_name}>{user.displayName}</Text>
            <TouchableOpacity>
              <LinearGradient
                colors={['#FFE53B', '#00FFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.edit_btn}
              >
                <Icon name="edit" color={'#000'} size={20} />
                <Text style={{ fontSize: 16 }}>
                  Chỉnh sửa thông tin cá nhân
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.saleSection}>
          <View style={styles.saleSection_Header}>
            <_Avatar.Image
              source={require('../assets/5-5_SaleIcon.png')}
              size={30}
              style={{
                resizeMode: 'cover',
                backgroundColor: '#fff',
                marginRight: 12,
              }}
            />
            <Text>5.5 ULibs ưu đãi shock. Tưng bừng mua sắm</Text>
            <View style={{ flexDirection: 'row' }}>
              <Badge style={{ marginLeft: 8 }}>Mới</Badge>
            </View>
          </View>
          <View style={styles.saleContent}>
            <View style={styles.saleContent_Item}>
              <_Avatar.Image
                source={require('../assets/5-5_SaleIcon.png')}
                size={45}
                style={{
                  resizeMode: 'cover',
                  backgroundColor: '#fff',
                }}
              />
              <Text>5.5</Text>
              <Text style={{ color: 'gray' }}>Sale khủng</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <_Avatar.Image
                source={require('../assets/FlashSale_Icon.png')}
                size={45}
                style={{
                  resizeMode: 'cover',
                  backgroundColor: '#fff',
                }}
              />
              <Text>Khung giờ</Text>
              <Text style={{ color: 'gray' }}>Săn sale</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <_Avatar.Image
                source={require('../assets/shockPrice_Icon.png')}
                size={45}
                style={{
                  resizeMode: 'cover',
                  backgroundColor: '#fff',
                }}
              />
              <Text>Sách hay</Text>
              <Text style={{ color: 'gray' }}>Giá tốt</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <_Avatar.Image
                source={require('../assets/voucherXtra_Icon.png')}
                size={45}
                style={{
                  resizeMode: 'cover',
                  backgroundColor: '#fff',
                }}
              />
              <Text>Voucher</Text>
              <Text style={{ color: 'gray' }}>Xtra</Text>
            </View>
          </View>
        </View>
        <View style={styles.saleSection}>
          <View style={styles.saleSection_Header}>
            <Icon
              name="shopping-bag"
              size={30}
              style={{
                marginRight: 12,
                color: 'blue',
              }}
            />
            <Text>Theo Dõi Đơn Hàng</Text>
          </View>
          <View style={styles.saleContent}>
            <View style={styles.saleContent_Item}>
              <Icon
                name="credit-card"
                size={30}
                style={{
                  backgroundColor: '#fff',
                }}
              />
              <Text style={{ fontSize: 11 }}>Chờ xác nhận</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <Icon
                name="package"
                size={30}
                style={{
                  backgroundColor: '#fff',
                }}
              />
              <Text style={{ fontSize: 11 }}>Chờ lấy hàng</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <Icon
                name="truck"
                size={30}
                style={{
                  backgroundColor: '#fff',
                }}
              />
              <Text style={{ fontSize: 11 }}>Đang giao</Text>
            </View>
            <View style={styles.saleContent_Item}>
              <Icon
                name="star"
                size={30}
                style={{
                  backgroundColor: '#fff',
                }}
              />
              <Text style={{ fontSize: 11 }}>Đánh giá</Text>
            </View>
          </View>
        </View>
        <View style={styles.featureList}>
          <View
            style={[
              styles.feature,
              {
                backgroundColor: '#ffe7df',
              },
            ]}
          >
            <View style={[styles.col]}>
              <Icon name="home" size={20} color={'#fc5931'} />
              <Text style={{ marginLeft: 16, color: '#fc5931' }}>
                Trở thành người bán
              </Text>
            </View>
            <View style={styles.col}>
              <Text style={{ fontSize: 12, color: 'gray' }}>
                Đăng kí miễn phí
              </Text>
              <Icon name="chevron-right" size={20} color={'#ccc'} />
            </View>
          </View>
        </View>
        <View style={styles.featureList}>
          <View style={styles.feature}>
            <View style={styles.col}>
              <Icon name="award" size={20} />
              <Text style={{ marginLeft: 16 }}>Khách hàng thân thiết</Text>
            </View>
            <View style={styles.col}>
              <Text style={{ fontSize: 12, color: 'gray' }}>
                Thành viên Bạc
              </Text>
              <Icon name="chevron-right" size={20} color={'#ccc'} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            navigation.navigate('RegisterScreen')
          }}
        >
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  background: {},
  avatarContainer: {
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  avatar: {
    marginTop: -80,
    borderColor: '#fff',
    borderWidth: 10,
  },
  nameSection: {
    // backgroundColor: 'brown',
    marginTop: -80,
    marginLeft: 180,
  },
  user_name: {
    fontSize: 21,
    textAlign: 'center',
  },
  edit_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 5,
  },
  saleSection: {
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  saleSection_Header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
  },
  saleContent: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  saleContent_Item: {
    width: '20%',
    height: '100%',

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  featureList: {
    marginTop: 8,
  },
  feature: {
    padding: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtn: {
    marginTop: 8,
    width: '100%' /* chiều rộng */,
    backgroundColor: '#fb5831' /* màu nền */,
    paddingVertical: 10 /* độ dày dọc */,
    alignItems: 'center' /* căn giữa theo chiều ngang */,
    justifyContent: 'center' /* căn giữa theo chiều dọc */,
    borderRadius: 5 /* bo tròn viền */,
  },
  logoutText: {
    fontSize: 18 /* cỡ chữ */,
    fontWeight: 'bold' /* độ đậm */,
    color: '#fff' /* màu chữ */,
  },
})
