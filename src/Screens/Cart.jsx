import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from 'expo-checkbox'
import { Badge } from 'react-native-paper'
import NumericInput from 'react-native-numeric-input'
import formatPrice from '../helpers/formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../redux/Reducer/order.slice'

function Cart({ navigation }) {
  const [isSelected, setSelection] = useState(false)

  const dispatch = useDispatch()
  const orderList = useSelector((state) => state.root.order)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    // Tính tổng giá từ orderList
    const calculateTotalPrice = () => {
      let totalPrice = 0
      for (const order of orderList) {
        totalPrice += order.quantity * order.price
      }
      setTotalPrice(totalPrice)
    }

    calculateTotalPrice()
  }, [orderList])

  const handleQuantityChange = (index, value) => {
    const newOrderList = [...orderList]
    newOrderList[index].quantity = value
    dispatch(updateOrder(newOrderList))
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            marginLeft: -75,
          }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name="chevron-back-outline" size={40} color={'#ccc'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, textAlign: 'center', marginLeft: 120 }}>
          Giỏ hàng
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 60,
          }}
        >
          <TouchableOpacity
            // onPress={onCartPress}
            style={styles.iconContainer}
          >
            <Text style={{ fontSize: 18, color: '#fb5831' }}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={onChatPress}
            style={styles.iconContainer}
          >
            <Icon
              name="chatbubbles-outline"
              size={26}
              color={'#fb5831'}
              style={styles.icon}
            />

            <Badge style={styles.badge}>25</Badge>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.orderContainer}>
        <View style={styles.orderList}>
          {orderList.map((order, index) => (
            <View style={styles.orderItem} key={order.productName}>
              <View>
                <Image
                  source={{ uri: order.image }}
                  style={{
                    height: 250,
                    width: 120,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 16,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    marginTop: 8,
                  }}
                >
                  {order.productName}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'red',
                    padding: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    width: 141,
                    marginTop: 8,
                  }}
                >
                  7 Ngày Miễn Phí Trả Hàng
                </Text>
                <Text
                  style={{
                    color: '#fb5831',
                    fontWeight: 'bold',
                    marginTop: 8,
                  }}
                >
                  {formatPrice(order.price)} đ
                </Text>
                <View
                  style={{
                    marginTop: 8,
                  }}
                >
                  <NumericInput
                    value={order.quantity}
                    onChange={(value) => handleQuantityChange(index, value)}
                    totalWidth={100}
                    totalHeight={30}
                    iconSize={25}
                    step={1}
                    minValue={1}
                    valueType="integer"
                    rounded
                    textColor="#B0228C"
                    iconStyle={{ color: 'white' }}
                    rightButtonBackgroundColor="#EA3788"
                    leftButtonBackgroundColor="#E56B70"
                    editable={false}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <View style={styles.footerItem_title}>
            <Icon
              name="tablet-landscape-outline"
              size={26}
              color={'#fb5831'}
              style={styles.icon}
            />
            <Text style={{ fontSize: 16 }}>ULibs Voucher</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: 'gray',
              }}
            >
              Chọn hoặc nhập mã
            </Text>
            <Icon name="chevron-forward-outline" size={20} color={'#ccc'} />
          </View>
        </View>
        <View
          style={[
            styles.footerItem,
            {
              borderBottomWidth: 0,
            },
          ]}
        >
          <View style={styles.footerItem_title}>
            <Text style={{ fontSize: 14 }}>Tổng thanh toán</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#fb5831',
                fontWeight: 'bold',
              }}
            >
              {formatPrice(`${totalPrice}`)} đ
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 16,
              }}
              onPress={() => {
                navigation.navigate('PaymentScreen')
              }}
            >
              <Text
                style={{
                  color: '#fff',

                  width: 100,
                  backgroundColor: '#fb5831',
                  textAlign: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                }}
              >
                Mua hàng
              </Text>
            </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#efefef',
    height: '100%',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    // justifyContent: 'space-between',
    marginLeft: 80,
  },
  iconContainer: {
    paddingHorizontal: 8,

    position: 'relative',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    // backgroundColor: 'brown',
  },
  footerItem: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footerItem_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderContainer: {},
  orderList: {},
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
  },
})
export default Cart
