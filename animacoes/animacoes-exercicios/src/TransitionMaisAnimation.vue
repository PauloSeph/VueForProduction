<template>
  <div>
      <h2>Misturando Transition com Animation</h2>
      <b-button variant="primary" class="mb-4"
		@click="exibir = !exibir">Transition + Animation</b-button>

        <transition name="slide" type="animation">
        <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
        </transition>

        
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Transtion com Animation a mistura',
            exibir: false
        }
    }
}
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
    transition: opacity 2s;
}

.slide-leave-active {
    animation: slide-out 2s ease;
    transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
}

</style>