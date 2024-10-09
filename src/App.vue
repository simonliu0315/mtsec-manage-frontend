<style lang="scss">
//@import '@/assets/scss/adminlte.scss';
@keyframes reveal {
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0%);
  }
}
.back {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: block;
    width: 3rem;
    border-radius: 100px;
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    color: #fff;
    line-height: 3rem;
    text-align: center;
    text-decoration: none;
    animation: reveal linear;
    animation-timeline: scroll();
    animation-range: 0vh 10vh;
  }
</style>

<template>
  <network-app>
  <!--begin::App Wrapper-->
  <div class="app-wrapper">
    <a href="#" class="back">TOP</a>
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
