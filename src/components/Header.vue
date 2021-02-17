<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar>
      <q-item clickable class="flex items-center">
        <div><span class="text-weight-bold">{{$t('cooperation')}}</span> UE-Cuba</div>
      </q-item>
      <q-space/>
      <q-item clickable class="text-weight-bold flex items-center">Mapa de proyectos</q-item>
      <q-item clickable class="flex items-center">{{$t('coopDiag')}}</q-item>
      <q-item clickable class="flex items-center">ODS
        <q-badge color="transparent" text-color="dark">
          <q-icon name="info"/>
        </q-badge>
      </q-item>
      <q-btn-dropdown flat :icon="`img:${currentLang}`">
        <q-list>
          <q-item dense clickable v-close-popup v-for="f in flags" :key="f">
            <q-item-section>
              <q-icon :name="`img:${f}`"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script>
  import { ES, US } from 'round-flags'

  export default {
    // name: 'ComponentName',
    data () {
      return {
        currentLang: ES,
        flags: [
          ES, US
        ]
      }
    }
  }
</script>
