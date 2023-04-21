export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return 'Email không được để trống.'
  if (!re.test(email)) return 'Oops! Có vẻ như Email không hợp lệ.'
  return ''
}
