<template>
  <div>
    <h2>Nomes e Atributos Dinamicos</h2>

    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Atributos Dinamicos</b-button>

    <!-- Usando input do tipo select, quando clicar em uma das options
    ele vai passar o valor para tipoAnimacao que será chamado a transicao -->
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" >
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tipoAnimacao: 'fade',
            msg: 'Selecionado foi o fade',
            exibir: false,
        }
    }
};
</script>

<style>
</style>