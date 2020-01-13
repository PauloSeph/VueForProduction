<template>
<div>
	<div class="mb-4">
        <h2>Animando Component Dinamico</h2>
	<b-button variant="primary" class="mr-2"
    @click="componente = 'AlertaInfo'">Alerta Info</b-button>
	<b-button variant="secundary" 
	@click="componente = 'AlertaAdvertencia'">Alerta Advertencia</b-button>
	</div>

	<transition name="fade" mode="out-in"> 
			<component :is="componente"></component>
	</transition>
</div>

</template>


<script>
import AlertaAdvertencia from './components/AlertaAdvertencia'
import AlertaInfo from './components/AlertaInfo'

export default {
    components: {
        AlertaAdvertencia,
        AlertaInfo
    },
    data() {
        return {
            componente: ''
        }
    }
}
</script>

<style>
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

</style>