<template>
  <div>table</div>
</template>

<script>
export default {
  name: 'v-table',
  props: {
    data: Object
  },
  created () {
    console.log(22, this.data)
  }
}
</script>
