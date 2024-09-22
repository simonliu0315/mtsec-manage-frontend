<style scoped lang="scss">
</style>

<template>
  <!--begin::App Main-->
  <main class="app-main">
    <!--begin::App Content Header-->
    <div class="app-content-header">
      <!--begin::Container-->
      <div class="container-fluid">
        <!--begin::Row-->
        <div class="row">
          <div class="col-sm-6">
            <h3 class="mb-0">
              <img
                src="/assets/NCHCLogo.png"
                alt="NCHC Logo"
                class="brand-image img-circle elevation-3"
                width="30px"
                height="30px"
                style="opacity: 0.8"
              />{{ $t('dashboard.TWARENMonitoringBashboard') }}
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">TWAREN監控儀錶板</li>
            </ol>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content Header-->
    <!--begin::App Content-->
    <div class="app-content">
      <!--begin::Container-->
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="callout callout-warning" style="padding-top: 0rem; padding-bottom: 0rem">
              <h5>{{ $t('dashboard.infomation') }}</h5>
              <p>
                <marquee width="100%" direction="up" height="30px" scrolldelay="200">
                  1. 設備維修通知-臺北主節點光設備進行更換，預估於2024/06/19
                  01:00進行維護，預估影響至2024/06/19 03:00，影響範圍台北區網<br />
                  2. 系統更版通知-整合式網管系統進行更版，預估於2024/06/19
                  01:00:00進行維護，預估影響至2024/06/19 03:00，影響範圍:客服人員
                </marquee>
              </p>
            </div>
          </div>
        </div>
        <!--begin::Row-->
        <div class="row">
          <!--begin::Col-->
          <div class="col-lg-3 col-6 col-sm-6">
            <!--begin::Small Box Widget 1-->
            <div class="small-box" style="background-color: rgba(241, 69, 69, 0.6)">
              <div class="inner" style="padding: 0px; padding-left: 10px">
                <h3 style="margin: 0rem">
                  15 <span style="font-size: 1rem">{{ $t('dashboard.item') }}</span>
                </h3>
                <p style="font-size: 1rem">{{ $t('dashboard.seriousEvents') }}</p>
              </div>
              <div class="small-box-icon" style="top: 0px">
                <i class="bi bi-exclamation-diamond-fill"></i>
              </div>
              <a
                href="#"
                class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
              >
                {{ $t('dashboard.seeMore') }} <i class="bi bi-link-45deg"></i>
              </a>
            </div>
            <!--end::Small Box Widget 1-->
          </div>
          <!--end::Col-->
          <div class="col-lg-3 col-6 col-sm-6">
            <!--begin::Small Box Widget 2-->
            <div class="small-box" style="background-color: rgba(241, 69, 69, 0.6)">
              <div class="inner" style="padding: 0px; padding-left: 10px">
                <h3 style="margin: 0rem">
                  2 <span style="font-size: 1rem">{{ $t('dashboard.lostDevice') }}</span
                  ><sub style="font-size: 1rem">/40</sub>
                </h3>

                <p style="font-size: 1rem">{{ $t('dashboard.domesticBackbone') }}</p>
              </div>
              <div class="small-box-icon" style="top: 0px">
                <i class="bi bi-activity"></i>
              </div>
              <a
                href="#"
                class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
              >
                {{ $t('dashboard.seeMore') }} <i class="bi bi-link-45deg"></i>
              </a>
            </div>
            <!--end::Small Box Widget 2-->
          </div>
          <!--end::Col-->
          <div class="col-lg-3 col-6 col-sm-6">
            <!--begin::Small Box Widget 3-->
            <div class="small-box" style="background-color: rgba(0, 165, 114, 0.6)">
              <div class="inner" style="padding: 0px; padding-left: 10px">
                <h3 style="margin: 0rem">
                  0 <span style="font-size: 1rem">{{ $t('dashboard.lostDevice') }}</span
                  ><sub style="font-size: 1rem">/10</sub>
                </h3>

                <p style="font-size: 1rem">{{ $t('dashboard.internationalBackbone') }}</p>
              </div>
              <div class="small-box-icon" style="top: 0px">
                <i class="bi bi-airplane-fill"></i>
              </div>
              <a
                href="#"
                class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover"
              >
                {{ $t('dashboard.seeMore') }} <i class="bi bi-link-45deg"></i>
              </a>
            </div>
            <!--end::Small Box Widget 3-->
          </div>
          <!--end::Col-->
          <div class="col-lg-3 col-6 col-sm-6">
            <!--begin::Small Box Widget 4-->
            <div class="small-box" style="background-color: rgba(247, 207, 7, 0.8)">
              <div class="inner" style="padding: 0px; padding-left: 10px">
                <h3 style="margin: 0rem">
                  1 <span style="font-size: 1rem">{{ $t('dashboard.lostDevice') }}</span
                  ><sub style="font-size: 1rem">/15</sub>
                </h3>

                <p style="font-size: 1rem">{{ $t('dashboard.softwareResources') }}</p>
              </div>
              <div class="small-box-icon" style="top: 0px">
                <i class="bi bi-pie-chart-fill"></i>
              </div>
              <a
                href="#"
                class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
              >
                {{ $t('dashboard.seeMore') }} <i class="bi bi-link-45deg"></i>
              </a>
            </div>
            <!--end::Small Box Widget 4-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
        <div class="row">
          <!-- Start col -->
          <div class="col-lg-6 connectedSortable">
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">
                  {{ $t('dashboard.topologyCard') }}
                </h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="d-md-flex">
                  <div class="p-1 flex-fill">
                    <img
                      id="mapclick"
                      src="/assets/eyesee_mtsec.png"
                      style="width: 100%; height: 100%"
                    />
                  </div>
                </div>
                <!-- /.d-md-flex -->
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-sm-3 col-6">
                    <div class="description-block text-center border-end">
                      <span class="description-percentage text-success"
                        ><i class="bi bi-arrow-up"></i> 1%</span
                      >
                      <h5 class="description-header text-danger" style="font-size: 18px">
                        5<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-exclamation-circle-fill" style="color: #dc3545"></i
                        >Critical Event</span
                      >
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-3 col-6">
                    <div class="description-block text-center border-end">
                      <span class="description-percentage text-danger"
                        ><i class="bi bi-arrow-down"></i> 2%</span
                      >
                      <h5 class="description-header text-warning" style="font-size: 18px">
                        50<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-exclamation-triangle-fill" style="color: #ffc107"></i>Minor
                        Event</span
                      >
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-3 col-6">
                    <div class="description-block text-center border-end">
                      <span class="description-percentage text-success"
                        ><i class="bi bi-arrow-up"></i> 0%</span
                      >
                      <h5 class="description-header text-success" style="font-size: 18px">
                        0<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-check" style="color: #28a745"
                          ><span class="btn-tool"></span></i
                        >Normal Event</span
                      >
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-3 col-6">
                    <div class="description-block text-center border-end">
                      <span class="description-percentage text-danger"
                        ><i class="bi bi-arrow-down"></i> 1%</span
                      >
                      <h5 class="description-header" style="font-size: 18px">
                        55<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text">Total Event</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-footer -->
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">
                  {{ $t('dashboard.masterTrafficCard') }}
                </h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody></tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card-body -->
            </div>
          </div>
          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">截至今日尚未結案事件單</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-circle-fill"
                          style="font-size: 20px; color: #dc3545"
                        ></i>
                        <span class="btn-tool">{{ innerEventLogForm.criticalCnt }}</span>
                      </th>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-triangle-fill"
                          style="font-size: 20px; color: #ffc107"
                        ></i>
                        <span class="btn-tool">{{ innerEventLogForm.minorCnt }}</span>
                      </th>
                      <th style="text-align: center">
                        <i class="icon bi bi-check" style="font-size: 20px; color: #28a745"></i>
                        <span class="btn-tool">{{ innerEventLogForm.normalCnt }}</span>
                      </th>
                    </tr>
                  </thead>
                </table>
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody>
                      <tr v-for="(item, key) in innerEventLogForm.results?.content" :key="key">                        
                        <td v-if="item.level == 'Critical'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon bi bi-exclamation-circle-fill" style="font-size: 20px; color: #dc3545"></i>
                        </td>
                        <td v-if="item.level == 'Minor'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon bi bi-exclamation-triangle-fill" style="font-size: 20px; color: #ffc107"></i>
                        </td>
                        <td v-if="item.level == 'Normal'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon icon bi bi-check" style="font-size: 20px; color: #28a745"></i>
                        </td>
                        <!--td style="background-color: rgba(241, 69, 69, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-circle" style="color:#dc3545"></i><br/></td-->
                        <!--td style="background-color:#dc3545; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-circle" style="color:#fff"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">{{ item.id }}</span><br />
                          類別 <span style="color: dodgerblue">{{ item.transactionType }}</span>設備/單位
                          <span style="color: dodgerblue">{{ item.deviceId }}</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue"
                              >{{ item.description }}</span
                            >
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          <br />
                          {{ $filters.formatDate(item.occurredAt) }}<br />
                          <div style="font-size: 14px; float: right">{{ $filters.getRelativeTime(item.occurredAt) }}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer bg-light">
                <network-pagination portal :data="innerEventLogForm.results" @page="findInnerEventLogNotClosed" />
              </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">外部監控事件告警列表</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-circle-fill"
                          style="font-size: 20px; color: #dc3545"
                        ></i
                        ><span class="btn-tool">{{ outterEventLogForm.criticalCnt }}</span>
                      </th>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-triangle-fill"
                          style="font-size: 20px; color: #ffc107"
                        ></i
                        ><span class="btn-tool">{{ outterEventLogForm.minorCnt }}</span>
                      </th>
                      <th style="text-align: center">
                        <i class="icon bi bi-check" style="font-size: 20px; color: #28a745"></i
                        ><span class="btn-tool">{{ outterEventLogForm.normalCnt }}</span>
                      </th>
                    </tr>
                  </thead>
                </table>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody>
                      <tr v-for="(item, key) in outterEventLogForm.results?.content" :key="key">
                        <td v-if="item.level == 'Critical'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon bi bi-exclamation-circle-fill" style="font-size: 20px; color: #dc3545"></i>
                        </td>
                        <td v-if="item.level == 'Minor'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon bi bi-exclamation-triangle-fill" style="font-size: 20px; color: #ffc107"></i>
                        </td>
                        <td v-if="item.level == 'Normal'" style="text-align: center; vertical-align: middle; padding-left: 0.75rem">
                          <i class="icon icon bi bi-check" style="font-size: 20px; color: #28a745"></i>
                        </td>
                        <!--td style="background-color:#ffc107; text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-triangle" style="color:#fff"></i><br/></td-->
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem;"><i class="icon fas fa-exclamation-triangle" style="color:#ffc107"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">{{ item.id }}</span><br />
                          類別 <span style="color: dodgerblue">{{ item.transactionType }}</span>設備/單位
                          <span style="color: dodgerblue">{{ item.deviceId }}</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue">{{ item.description }}</span>
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          {{ $filters.formatDate(item.occurredAt) }}<br />
                          <div style="font-size: 14px; float: right">{{ $filters.getRelativeTime(item.occurredAt) }}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer bg-light">
                <network-pagination portal :data="outterEventLogForm.results" @page="findOutterEventLogNotClosed" />
              </div>
            </div>
          </div>
        </div>
        <!-- /.row (main row) -->
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content-->
  </main>
  <!--end::App Main-->
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'
//import { Sortable } from 'sortablejs-vue3'

import Modal from "@/components/modal.vue";
import NetworkPagination from "@/components/network-pagination.vue"

import { DomesticDashboardApi } from 'mtsec-manage-client'

import type { PageEventLog } from 'mtsec-manage-client'

import { useNetworkAxios } from "@/ts/container/axios-container";
const axios = useNetworkAxios();
const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;


const innerEventLogForm = reactive<{
  filter: string | undefined;
  results: PageEventLog | undefined;
  criticalCnt: number;
  minorCnt: number;
  normalCnt: number;
}>({
  filter: '',
  results: undefined,
  criticalCnt: 0,
  minorCnt: 0,
  normalCnt: 0
});

const outterEventLogForm = reactive<{
  filter: string | undefined;
  results: PageEventLog | undefined;
  criticalCnt: number;
  minorCnt: number;
  normalCnt: number;
}>({
  filter: '',
  results: undefined,
  criticalCnt: 0,
  minorCnt: 0,
  normalCnt: 0
});

findInnerEventLogNotClosed()
findOutterEventLogNotClosed()

function findInnerEventLogNotClosed(page: number = 0, size: number = 10) {
  const api = new DomesticDashboardApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findDomesticDashboardInnerEventLogNotClosed(innerEventLogForm, page, size).then(({ data }) => {
      console.log(data)
      innerEventLogForm.results = data.eventLog      
      innerEventLogForm.criticalCnt = data.criticalCnt;
      innerEventLogForm.minorCnt = data.minorCnt;
      innerEventLogForm.normalCnt = data.normalCnt;
    }).finally(() => {
     
    });
}

function findOutterEventLogNotClosed(page: number = 0, size: number = 10) {
  const api = new DomesticDashboardApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findDomesticDashboardOutterEventLogNotClosed(outterEventLogForm, page, size).then(({ data }) => {
      console.log(data)
      outterEventLogForm.results = data.eventLog
      outterEventLogForm.criticalCnt = data.criticalCnt;
      outterEventLogForm.minorCnt = data.minorCnt;
      outterEventLogForm.normalCnt = data.normalCnt;   
    }).finally(() => {
     
    });
}


onMounted(() => {
  import('../../node_modules/sortablejs/Sortable').then((m) => {
    // use my library here or call a method that uses it
    const connectedSortables = document.querySelectorAll('div.connectedSortable')
    console.log(connectedSortables)
    connectedSortables.forEach((connectedSortable) => {
      let sortable = new Sortable(connectedSortable, {
        group: 'shared',
        handle: '.card-header'
      })
      console.log(sortable)
    })
    const cardHeaders = document.querySelectorAll('.connectedSortable .card-header')
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.cursor = 'move'
    })
  })
})
  

//import '@/components/dashboard3.vue'
//import { Sortable } from 'sortablejs-vue3'
//import '@/ts/adminlte.ts'

//import * as Sortable from 'sortablejs'
//import { Swap } from 'sortablejs/modular/sortable.core.esm'
//SortableJs.mount(new Swap())
/*
const connectedSortables = document.querySelectorAll('div.connectedSortable')
console.log(connectedSortables)
connectedSortables.forEach((connectedSortable) => {
  let sortable = new Sortable(connectedSortable, {
    group: 'shared',
    handle: '.card-header'
  })
  console.log(sortable)
  //let sortable = new Sortable(connectedSortable, {
  //
  //});
})
const cardHeaders = document.querySelectorAll('.connectedSortable .card-header')
cardHeaders.forEach((cardHeader) => {
  cardHeader.style.cursor = 'move'
})
*/
</script>
