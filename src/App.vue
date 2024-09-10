<style lang="scss">
//@import '@/assets/scss/adminlte.scss';
</style>

<template>
  <network-app>
  <!--begin::App Wrapper-->
  <div class="app-wrapper">
    <Topbar />
    <Sidenav />
    <!--Sidenav path={path} mainPage={mainPage} page={page} /-->
    <router-view />
    <Footer />
  </div>
  <!--end::App Wrapper-->
  </network-app>
</template>

<script setup name="app" lang="ts">
import Topbar from '@/components/topbar.vue'
import Sidenav from '@/components/sidenav.vue'
import Footer from '@/components/footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

import NetworkApp from "@/components/network-app.vue";

onMounted(() => {
  import('../src/ts/adminlte').then((m) => {
    // use my library here or call a method that uses it
  })
})
</script>
