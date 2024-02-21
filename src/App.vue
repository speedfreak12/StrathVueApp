<script setup>
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';

</script>

<template>
  <v-app>
    <navbar></navbar>
     <main>
 <RouterView></RouterView>
 </main>
 <footer></footer>
 </v-app>
</template>



