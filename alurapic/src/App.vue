<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    // Função padrão que retorna dados
    return {
      titulo: "Alurapic",
      fotos: [],
    };
  },
  created() {
    // Executa assim que o componente é criado || LifeCycle Hooks
    this.$http // No proprio componente, acessamos a propriedade http
      .get("http://localhost:3000/v1/fotos") // API
      .then((response) => response.json())
      .then((dados) => (this.fotos = dados));
  },
};
</script>
<style>
</style>
