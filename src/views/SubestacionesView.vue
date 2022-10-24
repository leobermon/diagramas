<template>
  <div class="about">

    {{checkGabinete(id)}}

    <div v-if="dynamicComponentName == ''" class="text-center">
      <br><br><br>

      Selecciona Subestacion

      <select @change="mostrarDiagramaSubestacion" class="form-select" aria-label="Default select example">
        <option selected disabled value="0">Elige la Subestacion </option>
        <option v-for="(sub, key) in listaSubestaciones" :key="key" :value="sub.id">{{sub.nickname}} - {{sub.nombre}}
        </option>
      </select>

      <h1 style="color:darkgrey;">Seleccione Subestacion de la lista</h1>
    </div>

    <template v-if="dynamicComponentName != ''">
      <component :is="dynamicComponentName"></component>
    </template>

  </div>

</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import { shallowRef } from 'vue'

import NIZ from './PlanoCivil/NIZ.vue';
import RMY from './PlanoCivil/RMY.vue';
import DEF from './PlanoCivil/DEFAULT.vue';

const nNIZ = shallowRef(NIZ)
const nRMY = shallowRef(RMY)
const nDEF = shallowRef(DEF)

export default {
  name: 'SubsView',
  props: ['id'],
  components: {
    nNIZ, nRMY, nDEF
  },
  specificGabinet: false,
  data() {

    return {
      dynamicComponentName: '',
      listaSubestaciones: [
        { nombre: 'NIZUC', nickname: 'NIZ', id: 1 },
        // { nombre: 'BALAM', nickname: 'BLM', id: 2 },
        // { nombre: 'RIVIERA MAYA', nickname: 'RMY', id: 3 },
        // { nombre: 'PLAYA DEL CARMEN', nickname: 'PLC', id: 4 }
      ]

    }
  },
  methods: {
    mostrarDiagramaSubestacion(e) {
      this.$router.push('/subestaciones/' + e.target.value)
    },

    checkGabinete(opc) {

      if (opc > 0) {
        ///aqui es donde revisamos que este la subestacion  

        if (_.find(this.listaSubestaciones, function (o) { return o.id == opc; })) {
          this.asignarPlano(parseInt(opc));
        }


      } else {
        this.dynamicComponentName = ''
      }

    },
    asignarPlano(id) {
      switch (id) {
        case 0:
          this.dynamicComponentName = ''
          break;
        case 1:
          this.dynamicComponentName = nNIZ
          break;
        case 3:
          this.dynamicComponentName = nRMY
          break;

        default:
          this.dynamicComponentName = nDEF
          break;
      }

    }
  }
}
</script>
