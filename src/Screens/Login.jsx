import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import Label from '../Components/Label'
import { theme } from '../core/theme'
import Button from '../Components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/Reducer/user.slice'
import http from '../utils/http'

function Login({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [username, setUsername] = useState({ value: '', error: '' })
  const [error, setError] = useState(false)

  const user = useSelector((state) => state.root.user)
  const dispatch = useDispatch()

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const usernameError = username === '' ? 'Tài khoản không được để trống' : ''
    if (emailError || passwordError || usernameError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setUsername({ ...username, error: usernameError })
      return
    } else {
      try {
        const response = await http.post(
          'login',
          {
            email: email.value,
            username: username.value,
            password: password.value,
          },
          {}
        )
        if (response.data.success == true) {
          dispatch(setUser(response.data.data))
          navigation.navigate('HomeScreen')
        } else {
          setError((prevState) => !prevState)
        }
      } catch (error) {
        if (error.name === 'AxiosError' && error.response?.status === 422) {
          return thunkAPI.rejectWithValue(error.response.data)
        }
        throw error
      }
    }
  }
  return (
    <Background>
      <Logo />
      <Header>ULibs Chào bạn !</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => {
          setEmail({ value: text, error: '' })
          setError(false)
        }}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      {error && (
        <Text style={{ color: 'red' }}>
          * Tài khoản, mật khẩu hoặc email có thể không đúng. Xin hãy nhập lại
        </Text>
      )}
      <TextInput
        label="Tên đăng nhập"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => {
          setUsername({ value: text, error: '' })
          setError(false)
        }}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => {
          setPassword({ value: text, error: '' })
          setError(false)
        }}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Đăng nhập
      </Button>
      <View style={styles.row}>
        <Text>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Đăng kí tại đây</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
export default Login
