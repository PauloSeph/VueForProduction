<template>
  <v-app>
    <Menu></Menu>

    <Toolbar></Toolbar>

    <Carrocel></Carrocel>

    <Footer/>
  </v-app>
</template>

<script>
import Footer from "@/components/template/Footer.vue";
import Carrocel from "@/components/widgets/Carrocel.vue";
import Toolbar from "./components/template/Toolbar.vue";
import Menu from "./components/template/Menu.vue";

export default {
  components: {
    Footer,
    Carrocel,
    Toolbar,
    Menu
  }
};
</script>
