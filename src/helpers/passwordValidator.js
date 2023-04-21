export function passwordValidator(password) {
  if (!password) return 'Không được để trống mật khẩu'
  if (password.length < 5) return 'Mật khẩu phải có ít nhất 5 kí tự'
  return ''
}
