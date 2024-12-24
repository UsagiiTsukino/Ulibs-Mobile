import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native'

import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import formatPrice from '../helpers/formatPrice'

function Payment({ navigation }) {
  const orderList = useSelector((state) => state.root.order)
  let totalPrice = 0
  for (const order of orderList) {
    totalPrice += order.quantity * order.price
  }
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          stickyHeaderIndices={[0]}
          scrollEventThrottle={16}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 20 }}>Thanh toán</Text>
          </View>
          <View
            style={{
              padding: 8,
              marginTop: 8,
              backgroundColor: '#fff',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon name="location-outline" size={20} color={'#fb5831'} />
              <Text>Địa chỉ nhận hàng : </Text>
            </View>
            <View
              style={{
                marginLeft: 20,
                marginTop: 8,
              }}
            >
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                officiis vel voluptatem eius ipsa excepturi
              </Text>
            </View>
          </View>
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>Đơn hàng</Text>
            {orderList.map((order) => (
              <View
                key={order.productName}
                style={{
                  flexDirection: 'row',
                  borderWidth: 0.3,
                  borderColor: 'green',
                  marginTop: 8,
                }}
              >
                <Image
                  source={{ uri: order.image }}
                  style={{
                    width: 70,
                    height: 100,
                    resizeMode: 'contain',
                    marginHorizontal: 8,
                  }}
                />
                <View
                  style={{
                    marginTop: 12,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontWeight: '500',
                    }}
                  >
                    {order.productName}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12.5,
                      marginTop: 8,
                    }}
                  >
                    Tác giả : Từ Hải
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      fontWeight: '300',
                      marginTop: 12,
                    }}
                  >
                    {formatPrice(`${order.price}`)} đ x {order.quantity}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>Chi tiết đơn hàng</Text>
            <Text style={styles.orderDetails}>
              Tổng tiền hàng: {formatPrice(`${totalPrice}`)}
            </Text>
            <Text style={styles.orderDetails}>
              Tổng chi phí vận chuyển: Miễn phí
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              Tổng tiền phải thanh toán: {formatPrice(`${totalPrice}`)}
            </Text>
          </View>
          <View style={styles.orderContainer}>
            <Text>
              Nhấn nút "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều
              khoản và chính sách của chúng tôi
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 12,
            }}
          >
            <Text>Tổng thanh toán</Text>
            <Text
              style={{
                color: '#fb5831',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {formatPrice(`${totalPrice}`)}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#fb5831',
              paddingVertical: 16,
              paddingHorizontal: 24,
            }}
            onPress={() => navigation.navigate('PaymentSuccess')}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Đặt hàng
            </Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  orderContainer: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
  },
  orderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: 13,
  },
  orderDetails: {
    fontSize: 12,
    marginBottom: 4,
  },
})
export default Payment
