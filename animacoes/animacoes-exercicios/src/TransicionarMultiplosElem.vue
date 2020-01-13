<template>
  <div>
    <h2>Transicionar Multiplos Elementos </h2>

    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Transicionar</b-button>

    <!-- Usando input do tipo select, quando clicar em uma das options
    ele vai passar o valor para tipoAnimacao que será chamado a transicao -->
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg2 }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tipoAnimacao: 'slide',
            msg: 'Selecionado foi o fade',
            msg2: 'Selecionado foi o Slide',
            exibir: false,
        }
    }
};
</script>

<style>
</style>