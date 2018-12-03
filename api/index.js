// import axios from 'axios'
import request from '~/service/axios'

export function getArticleList(params) {
  // return Axios.post('/cgi-bin/luci', loginInfo)
  //   .then(res => {
  //     if (parseInt(res.ret) === 0) {
  //       return Promise.resolve(res.token)
  //     } else {
  //       return Promise.reject(res)
  //     }
  //   })
  //   .catch(e => {
  //     return Promise.reject(e.message || e)
  //   })

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
