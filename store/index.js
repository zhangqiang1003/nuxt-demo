export const state = () => ({
  locales: ['EN', 'CN'],
  locale: 'CN'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
