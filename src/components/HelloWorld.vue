<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>  Obtenga una ficha tecnica del equipo</p>
    <p>Puede seleccionar entre diferentes subestaciones y gabinetes</p>

    <a href="subestaciones/0">Ir a la lista de subestaciones </a>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
