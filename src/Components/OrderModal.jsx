import React from 'react'
import { Dimensions, Platform } from 'react-native'
import Modal from 'react-native-modal'

function OrderModal() {
  const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height
  const [isModalVisible, setModalVisible] = useState(true)

  return (
    <Modal
      isVisible={isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={{ flex: 1 }}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  )
}

export default OrderModal
