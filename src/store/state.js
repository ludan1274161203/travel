let defaultCity = '杭州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert('localStroage is not exist')
}
export default {
  city: defaultCity
}
