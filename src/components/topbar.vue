<template>
  <!--begin::Header-->
  <nav
    class="app-header navbar navbar-expand bg-body"
    style="background: linear-gradient(to right, #fff, #c6ac77)"
  >
    <!--begin::Container-->
    <div class="container-fluid">
      <!--begin::Start Navbar Links-->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button" id="sidebar">
            <i class="bi bi-list"></i>
          </a>
        </li>
      </ul>
      <!--end::Start Navbar Links-->

      <!--begin::End Navbar Links-->
      <ul class="navbar-nav ms-auto">

        <!--begin::User Menu Dropdown-->
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="rounded-circle shadow bi bi-translate"></i>
            <span class="d-none d-md-inline">{{ $t('topbar.language') }}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <!--begin::User Image-->
            <li class="header">
                <!--a href="#" class="nav-link" @click="$i18n.locale = 'zh'"-->
                <a href="#" class="nav-link"  @click.prevent="changeLocale()">
                  <i class="bi bi-translate"></i>
                  中文
                </a>
            </li>
            <li class="header">
                <!--a href="#" class="nav-link" @click="$i18n.locale = 'en'"-->
                <a href="#" class="nav-link"  @click.prevent="changeLocale()">
                  <i class="bi bi-alphabet-uppercase"></i>
                  英文
                </a>
            </li>
          </ul>
        </li>
        <!--end::User Menu Dropdown-->
        <!--begin::Fullscreen Toggle-->
        <li class="nav-item">
          <a class="nav-link" href="#" data-lte-toggle="fullscreen" id="fullscreen">
            <i data-lte-icon="maximize" class="bi bi-arrows-fullscreen"></i>
            <i data-lte-icon="minimize" class="bi bi-fullscreen-exit" style="display: none"></i>
          </a>
        </li>
        <!--end::Fullscreen Toggle-->

        <!--begin::Notifications Dropdown Menu-->
      <li class="nav-item dropdown">
        <a class="nav-link" data-bs-toggle="dropdown" href="#">
          <i class="bi bi-bell-fill"></i>
          <span class="navbar-badge badge text-bg-warning">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" @click="notification()">
            <i class="bi bi-envelope me-2"></i> 4 new messages
            <span class="float-end text-secondary fs-7">3 mins</span>
          </a>                    
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
      <!--end::Notifications Dropdown Menu-->
        <!--begin::User Menu Dropdown-->
        <li class="nav-item dropdown user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i data-lte-icon="maximize" class="rounded-circle shadow bi bi-person-circle"></i>
            <span class="d-none d-md-inline">Administrator</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <!--begin::User Image-->
            <li class="user-header text-bg-primary">
              <i data-lte-icon="maximize" class="rounded-circle shadow bi bi-person-circle"></i>
              <p>
                Administrator
                <small>Member since Nov. 2023</small>
              </p>
            </li>
            <!--end::User Image-->
            <!--end::Menu Body-->
            <!--begin::Menu Footer-->
            <li class="user-footer">
              <a href="#" class="btn btn-default btn-flat">Profile</a>
              <a href="#" class="btn btn-default btn-flat float-end">Sign out</a>
            </li>
            <!--end::Menu Footer-->
          </ul>
        </li>
        <!--end::User Menu Dropdown-->
      </ul>
      <!--end::End Navbar Links-->
    </div>
    <!--end::Container-->
  </nav>
  <!--end::Header-->
</template>

<script setup lang="ts">
import { installStatusCodes } from "@/i18n";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();

const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;
installStatusCodes(VITE_NETWORK_API_URL);

function changeLocale() {
  locale.value = locale.value === "en" ? "zh" : "en";
  localStorage.setItem("locale", locale.value);
}


function notification() {
    console.log("notification");
    const audio = new Audio('/audio/6005.wav');
          audio.play();
}
/*
import  PushMenu from '@/ts/adminlte'
import { FullScreen } from '@/ts/adminlte'
import { ref, onMounted, onUnmounted } from 'vue'

const el = ref(null)

const observer = new IntersectionObserver((entries, observer) => {
  //console.log(entries)
})

onMounted(() => {
  //console.log(document.querySelector('.nav-link'))
  //const nodeList = <HTMLElement>document.querySelector('[data-lte-toggle="fullscreen"]')
  //observer.observe(nodeList)
  //sconsole.log(nodeList)
  //new FullScreen(nodeList, undefined).inFullScreen()
})
//data-lte-toggle="fullscreen"

//console.log(document.querySelector<HTMLElement>('[data-lte-icon="maximize"]'))
//let a = document.querySelectorAll('[data-lte-toggle="fullscreen"]')
//console.log(a)
//new FullScreen(a, undefined).toggleFullScreen()
*/
</script>