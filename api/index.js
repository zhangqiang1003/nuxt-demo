// import axios from 'axios'
import request from '~/service/axios'

export function getArticleList(params) {
  return request
    .get('/tapi/v1/get_entry_by_rank', params)
    .then(res => {
      console.log(res)
      return Promise.resolve(res)
    })
    .catch(e => {
      console.log(e)
      return Promise.reject(e)
    })
}

export function ljbInventory() {
  return request
    .get('/qapi/api/activity/ljb_inventory')
    .then(res => {
      console.log(res)
      return Promise.resolve(res)
    })
    .catch(e => {
      console.log(e)
      return Promise.reject(e)
    })
}

// 极验证 get_captcha
export function getCaptcha() {
  return request
    .post('/qapi/api/front/get_captcha')
    .then(data => {
      return Promise.resolve(data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}

// 极验证 captcha_valid
export function captchaValid(geeParams) {
  return request
    .post('/qapi/api/front/captcha_valid', geeParams)
    .then(data => {
      return Promise.resolve(data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}

// 注册接口
export function register(info) {
  return request
    .post('/qapi/api/front/register', info)
    .then(data => {
      return Promise.resolve(data)
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
