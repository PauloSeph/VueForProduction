<template>
  <div>
      <h2>Animate CSS </h2>
        <!-- Lembrando que tem que importar a CDN no html para ter acesso a essas classes -->
         <b-button variant="warning" class="mb-4"
		@click="exibir = !exibir">Animate CSS</b-button>

        <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake">
        <b-alert variant="info" show v-show="exibir">{{msg}}></b-alert>
        </transition>

  </div>
</template>

<script>
export default {
    data() {
        return {
            exibir: false,
            msg: "Usando classes do Animate CSS"
        }
    }
}
</script>

<style>

</style>