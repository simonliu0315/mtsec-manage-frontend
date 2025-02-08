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
  <!--登入頁版型-->
  <div class="app-wrapper d-flex justify-content-center align-items-center" v-if="!useAuthStore().isAuthorized" style="background-image: url('src/assets/images/background.jpg');background-repeat: no-repeat;background-size: cover;background-attachment: fixed;background-position: top;">
    <Topbar v-if="useAuthStore().isAuthorized"/>
    <Sidenav v-if="useAuthStore().isAuthorized"/> 
    <!--Sidenav path={path} mainPage={mainPage} page={page} /-->
    <router-view />
    <Footer v-if="useAuthStore().isAuthorized"/>
  </div>
  <!--一般頁版型-->
  <div class="app-wrapper" v-else>
    <a href="#" class="back">TOP</a>
    <Topbar v-if="useAuthStore().isAuthorized"/>
    <Sidenav v-if="useAuthStore().isAuthorized"/>
    <!--Sidenav path={path} mainPage={mainPage} page={page} /-->
    <router-view />
    <Footer v-if="useAuthStore().isAuthorized"/>
  </div>
  <!--end::App Wrapper-->
  </network-app>
</template>

<script setup name="app" lang="ts">
import Topbar from '@/components/topbar.vue'
import Sidenav from '@/components/sidenav.vue'
import Footer from '@/components/footer.vue'
import { ref, onMounted, reactive, onUnmounted, computed } from 'vue'

import { useAuthStore } from "@/stores/auth";

import NetworkApp from "@/components/network-app.vue";
const ENV = reactive<{
  MODE: string | undefined;
}>({
  MODE: import.meta.env.VITE_ENV_MODE,
});
console.log("MODE EEEEEE", ENV.MODE =='DEV')
onMounted(() => {
  import('../src/ts/adminlte').then((m) => {
    // use my library here or call a method that uses it
  })
})
const currentLayout = computed(() => {
  console.log('computed')
  console.log(this.$store)
  return this.$store.state.auth.user;
})
</script>
