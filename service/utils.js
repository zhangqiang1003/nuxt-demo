export default {
  // 校验是否是虚拟商手机号
  checkVirtualPhone: function(phone) {
    let re = /^(170)/
    return re.test(phone) ? false : true // false - 不是虚拟商手机号 | true - 是虚拟商手机号
  },
  // 校验手机号
  checkMobilePhone: function(phone) {
    const re = /^(0|86|17951)?(12[0-9]|13[0-9]|15[012356789]|166|17[0-9]|18[0-9]|14[0-9]|19[0-9])[0-9]{8}$/
    return re.test(phone) ? true : false // true - 手机号正确 | false - 手机号错误
  },
  // 校验邮箱
  checkEmail: function(email) {
    const re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return re.test(email) ? true : false // true - 邮箱正确 | false - 邮箱错误
  },
  // 校验密码是否有特殊字符(键盘不能输出的字符)
  checkPassword: function(pass) {
    const re = /[^a-zA-Z0-9,\.<>/?;:'\"\[\]\{\}\|\\`~!@#\$%\^&\*\(\)_\+-=]+/
    return re.test(pass) ? false : true // true - 密码合法 | false - 密码不合法
  }
}