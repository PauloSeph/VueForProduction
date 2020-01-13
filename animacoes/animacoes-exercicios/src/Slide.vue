<template>
  <div>
    <h2>Slide</h2>
    <b-button variant="primary" class="mb-4"
		@click="exibir = !exibir">Slide</b-button>
    <!-- Se o elemento começa visivel na tela ele não vai fazer o efeito animacao/transicao 
    Mas usando a tag appear dentro de <transition>  
    Assim que a pagina for carregada ele carrega o evento/transicao-->
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Esse é o SLIDE :D",
      exibir: true
    };
  }
};
</script>

<style>

@keyframes slide-in {
    from {transform: translateY(40px);}
    to {transform: translateY(0)}
}

@keyframes slide-out {
    from {transform: translateY(0);}
    to {transform: translateY(40px);}
    }



.slide-enter-active {
    animation: slide-in 2s ease;
}

.slide-leave-active {
    animation: slide-out 2s ease;
}

</style>