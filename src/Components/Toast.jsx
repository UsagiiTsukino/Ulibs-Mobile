import Toast, { ToastConfig } from 'react-native-toast-message'

export const showToast = (message, type) => {
  Toast.show({
    type: type,
    text1: 'Thông báo',
    text2: message,
    position: 'bottom',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    textStyle: { fontWeight: 'bold' },
  })
}
