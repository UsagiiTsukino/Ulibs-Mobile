import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function HotSearch() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tìm kiếm hàng đầu</Text>
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
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
          {/* San pham */}
          <View style={styles.productItem}>
            <Image
              source={require('../assets/mock/nha-gia-kim.jpg')}
              style={styles.productImage}
            />
            <View style={styles.productBody}>
              <Text style={styles.title}>Nhà giả kim</Text>
              <Text style={styles.sold}>Đã bán 4.5k</Text>
            </View>
            <View style={styles.badge}>
              <Icon name="trophy" size={13} color="#fff" style={styles.icon} />
              <Text style={styles.badgeText}>Bán chạy nhất</Text>
            </View>
          </View>
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
  headerText: {
    textTransform: 'uppercase',
    color: '#fb5831',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContaier: {},
  scrollProduct: {},
  productItem: {
    width: 140,
    backgroundColor: '#fff',
    marginLeft: 16,
    borderWidth: 1,
    borderColor: '#ebebeb',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productBody: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80,
  },
  title: {},
  sold: {
    fontSize: 11,
    color: '#8d9bad',
  },
  badge: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fb5831',
    padding: 2,
  },
  badgeText: {
    fontSize: 11,
    marginLeft: 4,
    color: '#fff',
  },
})
export default HotSearch
