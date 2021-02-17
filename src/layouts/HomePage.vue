<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <Header/>

    <!-- (Optional) The Footer -->
    <Footer/>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import Header from 'components/Header'
  import Footer from 'components/Footer'

  export default {
    // name: 'LayoutName',

    data () {
      return {
        leftDrawer: true
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>
