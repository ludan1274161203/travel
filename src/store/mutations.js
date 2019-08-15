export default {
  // eslint-disable-next-line space-before-function-paren
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      alert('localStroage is not exist')
    }
  }
}
