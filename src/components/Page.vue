<template>
  <div>page</div>
</template>

<script>
export default {
  name: 'page',
  props: {
    data: Object
  },
  created () {
    console.log(this.data)
  }
}
</script>
