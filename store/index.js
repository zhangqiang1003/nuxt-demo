export const state = () => ({
  locales: ['EN', 'CN'],
  locale: 'CN',
  indexSwiperStatus: false
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  handleIndexSwiper(state, status) {
    state.indexSwiperStatus = status
  }
}
