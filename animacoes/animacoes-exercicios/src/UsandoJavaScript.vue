<template>
  <div>
    <b-h1 class="mb-4">Fazendo com JavaScript</b-h1>
    <hr/>

    <b-button @click="exibir2 = !exibir2">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
        exibir2: true,
        larguraBase: 0,
        }
    },
    methods: {
    
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    // afterEnter(el) {
    // 	console.log('afterEnter')
    // },
    // enterCancelled() {
    // 	console.log('enterCancelled')
    // },

    // Leave
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    }
    // afterLeave(el) {
    // 	console.log('afterLeave')
    // },
    // LeaveCancelled() {
    // 	console.log('LeaveCancelled')
    // },
    }
}

</script>

<style>

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>