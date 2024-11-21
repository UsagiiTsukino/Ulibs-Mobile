import { Text } from 'react-native'
import { StyleSheet, Image, View } from 'react-native'
import formatPrice from '../helpers/formatPrice'

function ProductCard(props) {
  const { imgSource, productName, productPrice } = props
  return (
    <>
      <>
        <Image source={{ uri: imgSource }} style={styles.productImage} />
        <View style={styles.productBody}>
          <Text style={styles.title} numberOfLines={2}>
            {productName || 'Bị lỗi'}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {`${formatPrice(productPrice)}` || '0'}
            </Text>
            <Text style={styles.sold}>Đã bán 5.2k</Text>
          </View>
        </View>
      </>
    </>
  )
}
const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    height: 250,
    marginVertical: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
  },
  productBody: {
    padding: 8,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80,
  },
  title: {
    fontSize: 12.5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    textAlign: 'center',
    color: '#fb5831',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sold: {
    fontSize: 11,
    color: '#8d9bad',
  },
})
export default ProductCard
