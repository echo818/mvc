export default {
  name: 'app',
  data () {
    return {
      page: {}
    }
  },
  template: '<component is="layout" :data="page"/>'
}
