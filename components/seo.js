export default {
  name: 'SEO',
  props: {
    meta: {
      type: Object,
      default: () => ({})
    }
  },
  head () {
    return (typeof this.meta === 'function') ? this.meta() : this.meta
  },
  render: h => h(null)
}
