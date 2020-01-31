const token = localStorage.getItem('crmifc')

export default {
  user: {
    token: token,
    isAuthenticated: token ? true : false
  }
}
