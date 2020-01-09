<template>
  <div id="app">
    <span>
      <button @click="componenteCores = 'Vermelho'" class="vermelho">Carregar Componente</button>
      <button @click="componenteCores = 'Verde'" class="verde">Carregar Componente Verde</button>
      <button @click="componenteCores = 'Azul'" class="azul">Carregar Componente Azul</button>

      <keep-alive>
      <component :is="componenteCores">
        <span slot="conteudo">Conteúdo do Componente é <strong>{{componenteCores}}</strong></span>
      </component>
      </keep-alive>


    </span>
  </div>
</template>

<script>
import Vermelho from "./components/Vermelho.vue";
import Verde from "./components/Verde.vue";
import Azul from "./components/Azul.vue";

export default {
  name: "app",
  components: { Vermelho, Verde, Azul },
  data() {
        return { 
        componenteCores: ""
       }
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
}

button {
  padding: 10px;
  color: #fff;
  font-size: 1.3rem;
}

.caixa {
  color: #fff;
  font-size: 1.8rem;
  padding: 25px;
  margin: 10px 0px;
}

.vermelho {
  border: 2px solid red;
  background-color: #f54235;
}

.verde {
  border: 2px solid green;
  background-color: #49b057;
}

.azul {
  border: 2px solid blue;
  background-color: #2594f0;
}
</style>
