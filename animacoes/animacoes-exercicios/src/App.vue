<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4"
			@click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<h1>Fade</h1>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

			<h1>Slide</h1>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>

		
		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
 
		<hr>

		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>
		



		<!-- JavaScript -->
			<b-h1 class="mb-4">Fazendo com JavaScript</b-h1>
		<hr>
	

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



	<!-- Com dois componentes fazendo o fade -->
	<hr>
	<div class="mb-4">
	<b-button variant="primary" class="mr-2"
    @click="componenteSelecionado = 'AlertaInfo'">Alerta Info</b-button>
	<b-button variant="secundary" 
	@click="componenteSelecionado = 'AlertaAdvertencia'">Alerta Advertencia</b-button>
	</div>
	<transition name="fade" mode="out-in"> 
			<component :is="componenteSelecionado"></component>
	</transition>

	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'
export default {
	components: {
		AlertaAdvertencia,
		AlertaInfo,
	},
	data() {
		return {
			msg: 'Uma mensagem de informacao para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		//Enter

		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if (rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		// afterEnter(el) {
		// 	console.log('afterEnter')
		// },
		// enterCancelled() {
		// 	console.log('enterCancelled')
		// },

		// Leave
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

/* Definindo para exemplo no JavaScript */
.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}






/* Transicoes feito CSS */
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {transform: translateY(40px);}
	to {transform: translateY(0)}
}

@keyframes slide-out {
	from { transform: translateY(0);}
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
