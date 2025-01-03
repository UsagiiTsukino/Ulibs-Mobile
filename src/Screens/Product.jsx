import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Avatar from '../Components/Avatar'
import Icon from 'react-native-vector-icons/Ionicons'
import formatPrice from '../helpers/formatPrice'
import Modal from 'react-native-modal'
import NumericInput from '../Components/NumbericInput'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../redux/Reducer/order.slice'
function Product({ navigation, route }) {
  const { book } = route.params

  const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height

  const [isModalVisible, setModalVisible] = useState(false)
  const [quatity, setQuatity] = useState(1)

  const order = useSelector((state) => state.root.order)
  const dispatch = useDispatch()

  return (
    <View>
      <View
        style={{
          backgroundColor: '#efefef',
          height: '100%',
          paddingBottom: 50,
        }}
      >
        <ScrollView
          vertical
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{ uri: book.image }}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'contain',
              backgroundColor: '#fff',
            }}
          />
          <View style={{ backgroundColor: '#fff', marginTop: 16, padding: 16 }}>
            <Text style={styles.productName} numberOfLines={2}>
              {book.bookName}
            </Text>
            <Text style={styles.productPrice}>{formatPrice(book.price)}</Text>
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: 'gray',
              }}
            >
              165.000 đ
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 24,
                justifyContent: 'space-between',
                paddingBottom: 24,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Icon name="star" style={styles.starIcon} size={15} />
                <Icon name="star" style={styles.starIcon} size={15} />
                <Icon name="star" style={styles.starIcon} size={15} />
                <Icon name="star" style={styles.starIcon} size={15} />
                <Icon name="star-half" style={styles.starIcon} size={15} />
                <Text
                  style={{
                    marginLeft: 8,
                    fontSize: 16,
                  }}
                >
                  4.5
                </Text>
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: '#ccc',
                    marginLeft: 4,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 4,
                  }}
                >
                  Đã bán 970
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 120,
                }}
              >
                <Icon name="heart-outline" size={27} />
                <Icon name="arrow-redo-outline" size={27} />
                <Icon name="chatbubbles-outline" size={27} color={'#1da1f2'} />
              </View>
            </View>
            <Image
              source={require('../assets/gurantee.jpg')}
              style={styles.guranteeImg}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon name="airplane-outline" size={25} />
              <View
                style={{
                  paddingLeft: 8,
                }}
              >
                <Text>Vận chuyển từ Đà Nẵng</Text>
                <Text>Phí vận chuyển : Miễn phí</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-forward-outline" size={20} color={'#ccc'} />
            </View>
          </View>
          <View
            style={{
              padding: 16,
              backgroundColor: '#fff',
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  source={require('../assets/logo.png')}
                  size={60}
                  style={{
                    resizeMode: 'contain',
                    backgroundColor: '#fff',
                  }}
                />
                <View
                  style={{
                    paddingLeft: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                      }}
                    >
                      ULibs Offical
                    </Text>
                    <Icon
                      name="checkmark-circle"
                      color={'#2e89ff'}
                      size={15}
                      style={{ paddingLeft: 4 }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12.5,
                      }}
                    >
                      Đang trực tuyến
                    </Text>
                    <Icon
                      name="ellipse"
                      color={'#31a24c'}
                      style={{ paddingLeft: 4 }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Icon name="location-outline" color={'gray'} size={15} />
                    <Text
                      style={{
                        color: 'gray',
                      }}
                    >
                      Việt Nam
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Icon name="chevron-forward" color={'#ccc'} size={20} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    color: '#fb5831',
                    fontSize: 12,
                  }}
                >
                  120
                </Text>
                <Text
                  style={{
                    marginLeft: 4,
                    fontSize: 12,
                  }}
                >
                  Sản phẩm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{
                    color: '#fb5831',
                    fontSize: 12,
                  }}
                >
                  4.5 / 5
                </Text>
                <Text
                  style={{
                    marginLeft: 4,
                    fontSize: 12,
                  }}
                >
                  Đánh giá
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{
                    color: '#fb5831',
                    fontSize: 12,
                  }}
                >
                  99%
                </Text>
                <Text
                  style={{
                    marginLeft: 4,
                    fontSize: 12,
                  }}
                >
                  Phản hồi Chat
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 12,
              backgroundColor: '#fff',
              marginTop: 8,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: '500',
                }}
              >
                Mô tả sản phẩm
              </Text>
            </View>
            <View
              style={{
                marginTop: 16,
              }}
            >
              <Text>{book.description}</Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 20,
            left: 0,
          }}
        >
          <TouchableOpacity style={styles.chatBtn}>
            <Icon
              name="chatbubble-ellipses-outline"
              color={'red'}
              size={25}
              style={{
                textAlign: 'center',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 11,
              }}
            >
              Chat ngay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatBtn}
            onPress={() => setModalVisible(true)}
          >
            <Icon
              name="cart-outline"
              color={'red'}
              size={25}
              style={{
                textAlign: 'center',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 11,
              }}
            >
              Thêm vào giỏ hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyBtn}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Mua ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        style={{
          marginTop: 500,
          marginHorizontal: 0,
        }}
        backdropColor="rgba(0, 0, 0, 0.3)"
      >
        <View
          style={{
            backgroundColor: '#fff',
            height: 300,
            padding: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.3,
            }}
          >
            <Image
              source={{ uri: book.image }}
              style={{
                width: 100,
                height: 130,
                resizeMode: 'contain',
              }}
            />
            <View
              style={{
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              <Text style={styles.productName}>{book.bookName}</Text>
              <Text
                style={[
                  styles.productPrice,
                  {
                    fontSize: 15,
                  },
                ]}
              >
                {formatPrice(book.price)} đ
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}
          >
            <Text>Số lượng</Text>
            <NumericInput
              value={quatity}
              onChange={(value) => setQuatity(value)}
              minValue={1}
              step={1}
            />
          </View>
          <TouchableOpacity
            style={{
              marginHorizontal: 8,
              height: 40,
              backgroundColor: '#fb5831',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 5,
              marginTop: 16,
            }}
            onPress={() => {
              dispatch(
                addOrder({
                  productName: book.bookName,
                  image: book.image,
                  price: book.price,
                  quantity: quatity,
                })
              )
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Thêm vào giỏ hàng
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  productName: {
    fontSize: 16,
    fontWeight: '500',
    height: 50,
  },
  productPrice: {
    backgroundColor: '#fff',
    fontSize: 20,
    color: '#fb5831',
    fontWeight: '500',
  },
  starIcon: {
    color: '#f0735a',
  },
  guranteeImg: {
    resizeMode: 'contain',
    height: 31,
    width: '100%',
  },
  chatBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buyBtn: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
})
export default Product
