<template>
<div>
    <h2>Fade</h2>
    <b-button variant="primary" class="mb-4"
		@click="exibir = !exibir">Fade Um</b-button>
		
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
</div>

</template>



<script>

export default {
  data() {
    return {
      msg: "Esse é o FadeUm :D",
      exibir: false
    };
  }
};
</script>


<style>
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

</style>