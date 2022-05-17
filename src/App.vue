<template>
  <div>
    <h1 class="mx-auto">Tienda 32 Bits</h1>
    <h3>Lista de juegos</h3>
    <table cellpadding="0" border="3px">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="(game, i) in games" :key="i" :style="{color: game.color }">
          <td>{{ game.codigo }} </td> 
          <td>{{ game.nombre }} </td>
          <td>{{ game.stock }} </td>
          <td>${{parseInt(game.precio).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState(['games']),
    },
  }
</script>

