<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        
		<!-- Input do tipo text - email -->
        <Rotulo nome="E-mail">
          <input type="text" v-model="usuario.email" />
        </Rotulo>

        <!-- Input do tipo Password -->
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </Rotulo>

        <!-- Input Tipo number -->
        <Rotulo nome="Idade">
          <input type="number" v-model="usuario.idade" />
        </Rotulo>

        <!-- TextArea -->
        <Rotulo nome="Mensagem">
          <textarea name cols="30" rows="5" v-model="mensagem"></textarea>
        </Rotulo>

        <!-- CheckBox -->
        <Rotulo nome="Características do Problema">
          <span class="mr-4">
            <input type="checkbox" v-model="caracteristicas" value="reproduzivel" /> Reproduzível
          </span>
          <span>
            <input type="checkbox" v-model="caracteristicas" value="intermitente" /> Intermitente
          </span>
        </Rotulo>

        <!-- Radio -->
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input type="radio" value="web" v-model="produto" /> Web
          </span>
          <span class="mr-4">
            <input type="radio" value="mobile" v-model="produto" /> Mobile
          </span>
          <span>
            <input type="radio" value="outro" v-model="produto" /> Outro
          </span>
        </Rotulo>

        <!-- Select / Option -->
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="prioridade in prioridades"
              :key="prioridade.codigo"
              :value="prioridade.codigo"
              :selected="prioridade.codigo === 1"
            >{{prioridade.codigo}} - {{prioridade.nome}}</option>
          </select>
        </Rotulo>

        <!-- Input personalizado -->
        <Rotulo nome="Primeira Reclamação?">
          <Escolha  v-model="escolha"/>
        </Rotulo>

        <!-- Submit -->
        <hr />
        <button @click.prevent="enviar">Enviar</button>


      <!-- testando -->
      <hr>
      <Escolha v-model="teste"/>

      </form>

      
        <!-- Reenderizando os valores passados nos inputs -->
      
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <!-- Resultado do tipo text - email -->
        <Rotulo nome="E-mail">
          <span>{{usuario.email}}</span>
        </Rotulo>

        <!-- Resultado do Password -->
        <Rotulo nome="Senha">
          <span>{{usuario.senha}}</span>
        </Rotulo>

        <!-- Resultado do tipo Number -->
        <Rotulo nome="Idade">
          <span>{{usuario.idade}}</span>
        </Rotulo>

        <!-- Resultado do tipo textarea-->
        <Rotulo nome="Mensagem">
          <span style="white-space: pre;">{{mensagem}}</span>
        </Rotulo>

        <!-- Resultado do tipo checkbox -->
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li v-for="c in caracteristicas" :key="c">{{c}}</li>
            </ul>
          </span>
        </Rotulo>

        <!-- Resultado do tipo Radio -->
        <Rotulo nome="Qual produto?">
          <span>{{produto}}</span>
        </Rotulo>

        <!-- Resultado Select - Option -->
        <Rotulo nome="Prioridade">
          <span>{{prioridade}}</span>
        </Rotulo>
	
        <Rotulo nome="Primeira Reclamação?">
          <span>{{escolha}}</span>
          <span>{{teste}}</span>
        </Rotulo>
	


      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  methods: {
    enviar() {
      this.enviado = true
    }
  },
  data() {
    return {
      mensagem: "",
      caracteristicas: [],
      produto: "web",
      prioridade: 1,
      teste: 'SEILA',
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Moderada" },
        { codigo: 3, nome: "Alta" }
      ],
      usuario: {
        email: "",
        senha: "",
        idade: 25
      },
      escolha: true,
      enviado: false,
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
