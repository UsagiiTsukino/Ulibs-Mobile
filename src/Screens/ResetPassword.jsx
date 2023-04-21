import React, { useState } from 'react'

import { emailValidator } from '../helpers/emailValidator'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import BackButton from '../Components/BackButton'
export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Quên mật khẩu</Header>
      <TextInput
        label="Địa chỉ E-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="   Hãy nhập đúng địa chỉ Email để nhận được OTP"
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Gửi mã OTP
      </Button>
    </Background>
  )
}
