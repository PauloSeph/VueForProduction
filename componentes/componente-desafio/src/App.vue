<template>

  <v-app>
    <menu-comp></menu-comp>

    <toolbar-comp></toolbar-comp>

    <carrocel-comp></carrocel-comp>

    <footer-comp />
  </v-app>
</template>

<script>
import Footer from "./Footer.vue";
import Carrocel from "./Carrocel.vue";
import Toolbar from "./Toolbar.vue";
import Menu from "./Menu.vue";

export default {
  components: {
    FooterComp: Footer,
    CarrocelComp: Carrocel,
    ToolbarComp: Toolbar,
    MenuComp: Menu
  }
};
</script>
