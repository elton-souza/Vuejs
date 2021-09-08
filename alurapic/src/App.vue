<template>
  <div class="corpo">
    <h1 class="texto-centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value"/>
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" :key="foto.id" class="lista-fotos-item">
        <!-- tudo que estiver no componente 'meu-painel' será adicionado no slot -->
        <meu-painel :titulo="foto.titulo">
          <img :src="foto.url" :alt="foto.titulo" class="imagem-responsiva" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";
export default {
  components: {
    "meu-painel": Painel,
  },
  data() {
    // Função padrão que retorna dados
    return {  
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
    };
  },
  created() {
    // Executa assim que o componente é criado || LifeCycle Hooks
    this.$http // No proprio componente, acessamos a propriedade http
      .get("http://localhost:3000/v1/fotos") // API
      .then((response) => response.json())
      .then((dados) => (this.fotos = dados));
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
};
</script>
<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.texto-centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
  display: flex;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
