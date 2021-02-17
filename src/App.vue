<template>
  <div class="column" id="q-app">
    <router-view class="col-12 column"/>
  </div>
</template>
<script>

  export default {
    name: 'App',
    components: {},
    created () {
      this.$i18n.locale = 'es-es'
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  #q-app {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
</style>
