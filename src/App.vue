<style lang="scss">
@import '@/assets/scss/adminlte.scss';
</style>

<template>
  <!--begin::App Wrapper-->
  <div class="app-wrapper">
    <Topbar />
    <Sidenav />
    <!--Sidenav path={path} mainPage={mainPage} page={page} /-->
    <router-view />
    <Footer />
  </div>
  <!--end::App Wrapper-->
</template>

<script setup name="app" lang="ts">
import Topbar from '@/components/topbar.vue'
import Sidenav from '@/components/sidenav.vue'
import Footer from '@/components/footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

onMounted(() => {
  import('../src/ts/adminlte').then((m) => {
    // use my library here or call a method that uses it

    const toastTriggerList = document.querySelectorAll(
        '[data-bs-toggle="toast"]',
      );
      console.log("onMounted");
      console.log(toastTriggerList)
  })
})
</script>
