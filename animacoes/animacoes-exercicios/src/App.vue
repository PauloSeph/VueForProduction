<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>

    <hr />
    <FadeUm />

    <hr />
    <Slide />

    <hr />
    <TransitionMaisAnimation />

    <hr />
    <AnimateCSS />

    <hr />
    <NomesAtributosDinamicos />

    <hr />
    <TransicionarMultiplosElem />

    <hr />
    <AnimandoCompDinamico />

	<hr>
	<TransitionGroup></TransitionGroup>

    <br />
	<!-- JavaScript -->
	<h1 class="sel">JavaScript</h1>
	<UsandoJavaScript></UsandoJavaScript>

	<p>Só isso =D</p>

  </div>
</template>

<script>
import FadeUm from "./FadeUm.vue";
import Slide from "./Slide.vue";
import AnimateCSS from "./AnimateCSS.vue";
import TransitionMaisAnimation from "./TransitionMaisAnimation.vue";
import NomesAtributosDinamicos from "./NomesAtributosDinamicos.vue";
import TransicionarMultiplosElem from "./TransicionarMultiplosElem";
import AnimandoCompDinamico from "./AnimandoCompDinamico.vue";
import TransitionGroup from "./TransitionGroup"
import UsandoJavaScript from './UsandoJavaScript'

export default {
  components: {
	TransitionGroup,
    AnimandoCompDinamico,
    FadeUm,
    Slide,
    TransitionMaisAnimation,
    AnimateCSS,
    NomesAtributosDinamicos,
	TransicionarMultiplosElem,
	UsandoJavaScript,
  },
  data() {
    return {
      alunos: ["Ana", "Alfred", "Italo", "Bruna"],
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo"
    };
  },

  }

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.sel {
	color: red;
}




/* Transicoes feito CSS */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
