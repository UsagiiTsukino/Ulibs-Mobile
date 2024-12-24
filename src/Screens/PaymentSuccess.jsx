import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function PaymentSuccess({ navigation }) {
  return (

    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Đặt hàng thành công</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/green-tick.gif')} style={styles.image} />
        <Text style={styles.message}>Cảm ơn bạn đã đặt hàng và sử dụng dịch vụ ULibs</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Tiếp tục mua sắm cùng ULibs</Text>
        </TouchableOpacity>
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
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fb5831',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default PaymentSuccess
