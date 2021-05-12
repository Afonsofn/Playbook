<!-- Funções globais que todos os componentes tenham acesso - MIXIN -->
<template>
  <div>
    <p>{{counter}}</p>
    <button @click="addMaisUm()"></button>
  </div>
</template>

<script>
import mixinComponent from '../mixins/mixinComponent'

export default {
  name: 'Component',
  mixins: [mixinComponent],
  data (){
    return {
      counter: 1
    }
  },
}
</script>
