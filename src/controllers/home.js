export default {
  name: 'home',
  data () {
    return {
      page: {
        name: 'echo'
      }
    }
  },
  template: '<component is="page" :data="page"/>'
}
