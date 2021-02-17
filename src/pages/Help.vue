<template>
  <q-page padding class="row flex items-stretch">
    <iframe class="col-12" :src="helpUrl"/>
  </q-page>
</template>

<script>
  import endpoints from 'src/ajax/endpoints'

  export default {
    name: 'PageName',
    data () {
      return {
        helpUrl: endpoints.docsEndpoint
      }
    }
  }
</script>
