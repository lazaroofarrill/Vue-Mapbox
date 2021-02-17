<template>
  <q-footer class="bg-white text-dark q-pa-md">
    <q-toolbar class="flex justify-between">
      <div class="col-4 row">
        <span class="col-12 text-h6">Delegation of the European Union to Cuba</span>
        <div class="col-12 row items-center">
          <a href="link_to_page">https://eeass/europa.eu/delegations/cuba_en</a>
          <q-btn flat dense icon="facebook" to="https://facebook.com"/>
          <q-btn flat dense :icon="`img:${flickr}`"/>
        </div>
      </div>
      <div>Disclaimer, there is a short text in here</div>
      <div class="col-4"><p>5th Avenue No 2007 esq. 22, Miramar, Havana, Cuba<br/>
        +53 70204 0327 <br/>
        DELEGATION-CUBA@eeas.europa.eu
      </p></div>
    </q-toolbar>
  </q-footer>
</template>

<script>
  import flickr from 'assets/flickr.svg'
  export default {
    // name: 'ComponentName',
    data () {
      return {
        flickr
      }
    }
  }
</script>
<style>
  a {
    color: inherit;
    text-decoration: none;
  }
</style>
