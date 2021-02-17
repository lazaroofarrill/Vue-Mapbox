<template>
  <q-page padding class="row q-pa-none">
    <!-- content -->
    <q-card id="map" class="basemap bg-black col-12"/>
    <div style="position: absolute;" class="col-12 row q-pa-md items-center q-gutter-md">
      <q-btn-toggle :options="options" v-model="view"
                    color="white"
                    text-color="grey-7"
                    toggle-color="white"
                    toggle-text-color="dark"/>
      <q-space/>
      <q-select use-input dense class="col-3" style="min-width: 30ch; border-radius: 30px"
                bg-color="white" color="dark" filled
                v-model="search" :options="provinces" @filter="filterFn"
                hide-dropdown-icon @input="provinceSelected">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-select>
      <div class="column q-gutter-sm">
        <q-btn zoom dense color="white" text-color="dark" @click="zoom++" icon="add"/>
        <q-btn zoom dense color="white" text-color="dark" @click="zoom--" icon="remove"/>
      </div>
    </div>
    <div style="position: absolute; bottom: 0" class="col-12 row">
      <q-space/>
      <q-card class="row">
        <div>Proyectos: 50</div>
        <div>Financiación: 70 000 000 E</div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import { colors } from 'quasar'

  const stringOptions = [
    {
      label: 'La Habana',
      coords: [-82.36465027716447, 23.127126100613125]
    }, {
      label: 'Matanzas',
      coords: [-81.58441616915941, 23.044968435952327],
      province: 'matanzas'
    }, {
      label: 'Santiago',
      coords: [-75.81872031734503, 20.019966675324625]
    }
  ]

  export default {

    // name: 'PageName',
    components: {},
    data () {
      return {
        accessToken: 'pk.eyJ1IjoibGF6YXJvb2ZhcnJpbGwiLCJhIjoiY2tsOGY5OXdtMjE0czJvbW1ncjJqMGE4dyJ9.LreQLn0dGBYSjtUMcIki3Q',
        options: [
          {
            label: 'Map',
            value: false
          },
          {
            label: 'Satellite',
            value: true
          }],
        search: '',
        map: null,
        style: this.$store.state.maps.style,
        provinces: stringOptions,
        markers: []
      }
    },
    mounted () {
      mapboxgl.accessToken = this.accessToken

      // eslint-disable-next-line no-unused-vars
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        center: [-82.43355430399423, 22.931010633166878],
        zoom: 6
      })

      this.map.on('click', (e) => {
        console.log('Clicked in: ' + e.lngLat + '\n')
      })

      this.map.on('load', () => {
        this.map.addSource('matanzas', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-81.66989562832278, 23.145544596775267],
                  [-80.5963349038268, 23.047936436687706],
                  [-80.75035980992293, 22.872625972009942],
                  [-80.52791892514037, 22.55967063760386],
                  [-80.92659605958717, 22.422645046228027],
                  [-80.89645105611557, 22.217341683715873],
                  [-80.60789777655353, 22.07007205297566],
                  [-80.87032781719662, 22.03695043995876],
                  [-82.14268950457601, 22.377561142640246],
                  [-81.648654707725, 22.568699871284238]
                ]
              ]
            }
          }
        })
      })

      // this.map.addControl(new mapboxgl.NavigationControl({
      //   showCompass: false,
      //   color: colors.getPaletteColor('primary')
      // }))

      // eslint-disable-next-line no-unused-vars
      const marker = new mapboxgl.Marker({
        color: colors.getPaletteColor('primary'),
        draggable: true
      }).setLngLat([-82.36420865563964, 23.12670924664451])
        .addTo(this.map)
      this.markers.push(marker)
    },
    computed: {
      view: {
        get () {
          return this.$store.state.maps.satellite
        },
        set (value) {
          this.$store.commit('maps/changeSatellite', value)
          this.map.setStyle(this.$store.state.maps.style)
        }
      },
      zoom: {
        get () {
          console.log(this.map.getZoom)
          return this.map.getZoom()
        },
        set (value) {
          this.map.setZoom(value)
        }
      }
    },
    methods: {
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            this.provinces = stringOptions

            // with Quasar v1.7.4+
            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          this.provinces = stringOptions.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
        })
      },
      provinceSelected (event) {
        // console.log(event)
        const nMark = new mapboxgl.Marker().setLngLat(event.coords)
        this.markers.push(nMark)

        stringOptions.forEach(x =>
          this.map.removeLayer(x.province)
        )

        this.map.addLayer({
          id: event.province,
          type: 'fill',
          source: 'matanzas',
          layout: {},
          paint: {
            'fill-color': '#088',
            'fill-opacity': 0.3
          }
        })
      }
    }
  }
</script>
