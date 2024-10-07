<style scoped lang="scss">
.chart-10 {
  height: 10vh;
}

.chart-20 {
  height: 20vh;
}

.chart-30 {
  height: 30vh;
}

.steppy-pane {
  color: #333;
  text-align: left;
  background-color: var(--backgroundColor);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 0 10px #0000004d;
  margin: 60px 0 20px;
}
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
              <img src="/assets/NCHCLogo.png" alt="NCHC Logo" class="brand-image img-circle elevation-3" width="30px"
                height="30px" style="opacity: 0.8" />資產管理
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">監控項目管理</li>
              <li class="breadcrumb-item">資料管理</li>
              <li class="breadcrumb-item active" aria-current="page">資產管理</li>
            </ol>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title"></h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" @click="search()">
                    <i class="bi bi-arrow-clockwise"></i>
                  </button>
                  <div class="btn-group">
                    <button type="button" class="btn btn-tool dropdown-toggle" data-bs-toggle="dropdown">
                      <i class="bi bi-download"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" role="menu">
                      <a href="#" class="dropdown-item"><i class="bi bi-filetype-csv"></i>CSV</a>
                      <a href="#" class="dropdown-item"><i class="bi bi-filetype-xls"></i>EXCEL</a>
                    </div>
                  </div>
                </div>
              </div> <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-sm-9 col-md-9"></div>
                  <div class="col-sm-3 col-md-3">
                    <div class="text-right mt-2 mb-1">
                      <div class="input-group mb-3 d-flex" role="search">
                        <input class="form-control" type="search" :placeholder="$t('pagination.search')"
                          aria-label="Search" v-model="searchForm.filter" />
                        <button class="bi bi-search input-group-text" @click="search()"></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>
                        <th style="width: 230px">設備</th>
                        <th style="width: 130px">介面</th>
                        <th style="width: 530px">介面描述</th>
                        <th style="width: 130px">更新時間</th>
                        <th>備註</th>
                        <th>操作
                          <span class="fs-4 mb-3"><a href="#" @click="showEditModal()">
                              <i class="bi bi-plus"></i></a>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="align-middle" v-for="(item, key) in searchForm.results?.content" :key="key">
                        <td>
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        <td>{{ item.deviceName }}</td>
                        <td>{{ item.deviceInterface }}</td>
                        <td>{{ item.interfaceDescription }}</td>
                        <td>{{ $filters.formatDate(item.updatedAt) }}</td>
                        <td>{{ item.remarks }}</td>
                        <td>
                          <div class="fs-4 mb-3">
                            <a href="#" @click="showEditModal(item.id)"><i class="bi bi-pencil"></i></a>
                            <a href="#" @click="remove(item.id)"><i class="bi bi-trash"></i></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> <!-- /.card-body -->
              <div class="card-footer bg-light">
                <!--ul class="pagination pagination-sm float-end">
                  <li class="page-item"> <a class="page-link" href="#">&laquo;</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">2</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                  <li class="page-item"> <a class="page-link" href="#">&raquo;</a> </li>
                </ul-->
                <network-pagination portal :data="searchForm.results" @page="search" />
                <!--vue-awesome-paginate :total-items="50" v-model="currentPage1" :items-per-page="5" :max-pages-shown="5"/-->
              </div>
            </div> <!-- /.card -->
          </div> <!-- /.col -->
        </div>
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content Header-->
    <!--begin::App Content-->
    <div class="app-content">
      <!--begin::Container-->
      <div class="container-fluid">
        <!--begin::Row-->
        <div class="row">
        </div>
        <!--end::Row-->
        <!-- /.row (main row) -->
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content-->
    <!--start::Modal -->
    <Modal title="新增" ref="thisModal">
      <template #body>
        <Steppy v-model:step="step" :loading="loading" :finalize="finalize" :tabs="tab" primaryColor1="#007bff"
          :backText="$t('action.back')" :nextText="$t('action.next')" :doneText="$t('action.done')">
          <template #1>
            <div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">設備名稱</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="deviceName" placeholder="設備名稱"
                    v-model="saveForm.deviceName">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="manageIp" class="col-sm-2 col-form-label text-start fw-bold">管理IP</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="manageIp" placeholder="管理IP"
                    v-model="saveForm.deviceIP">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">類別</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceIP">
                    <option selected="selected">交換器</option>
                    <option>路由器</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">廠牌</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceIP">
                    <option selected="selected">CISCO</option>
                    <option>JUNIPER</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">型號</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="deviceName" placeholder="型號" v-model="saveForm.deviceIP">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">位置</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceIP">
                    <option selected="selected">科技大樓</option>
                    <option>台北主節點</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">SNMP監控頻率</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceIP">
                    <option selected="selected">五分鐘</option>
                    <option>十分鐘</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceName" class="col-sm-2 col-form-label text-start fw-bold">Ping監控頻率</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceIP">
                    <option selected="selected">五分鐘</option>
                    <option>十分鐘</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceInterface" class="col-sm-2 col-form-label text-start fw-bold">介面</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="deviceInterface" placeholder="介面"
                    v-model="saveForm.deviceInterface">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="interfaceDescription" class="col-sm-2 col-form-label text-start fw-bold">介面描述</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="interfaceDescription" placeholder="介面描述"
                    v-model="saveForm.interfaceDescription">
                </div>
              </div>
            </div>
          </template>
          <template #2>
            <div id="information-part" class="content active dstepper-block" role="tabpanel"
              aria-labelledby="information-part-trigger">
              <div class="form-group row mb-2">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label text-start fw-bold">ICMP Ping</label>
              </div>
              <div class="form-group row justify-content-center">
                <div class="col-sm-2 col-form-label text-end ">
                  IP
                </div>
                <div class="col-sm-4 text-start">
                  127.0.0.1
                  <button class="btn btn-info">測試連線</button>
                  <i class="icon bi bi-check"
                  style="color:green"></i> 連線成功
                </div>
                <div class="col-sm-4 text-start">
                  
                </div>
                <div class="col-sm-2 text-start">
                </div>
              </div>
              <hr>
              <div class="form-group row mb-2">
                <div class="col-sm-2 text-start">
                  SNMP通訊協定
                </div>
                <div class="col-sm-10 text-start">
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="SNMPProtocol" id="on" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="on">ON</label>

                    <input type="radio" class="btn-check" name="SNMPProtocol" id="off" autocomplete="off">
                    <label class="btn btn-outline-primary" for="off">OFF</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label text-start fw-bold">IP</label>
                <div class="col-sm-10 col-form-label text-start">
                  127.0.0.1
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Port</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" value="161">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">SNMP版本</label>
                <div class="col-sm-10 text-start">
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="SNMPVersion" id="v2c" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="v2c">v2c</label>

                    <input type="radio" class="btn-check" name="SNMPVersion" id="v3" autocomplete="off">
                    <label class="btn btn-outline-primary" for="v3">v3</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">安全層級</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="selected">Privacy</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">帳號</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入型號">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Auth.
                  Protocol</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="selected">Privacy</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Auth.
                  Password</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入密碼">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Privacy
                  Protocol</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="selected">DES</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Privacy
                  Password</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入密碼">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Context
                  Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入Context Name">
                </div>
              </div>
            </div>
          </template>
          <template #3>Etiam in turpis erat. Vestibulum auctor vel nibh eget vehicula. Integer
            finibus libero a ex vehicula pharetra. Suspendisse dapibus ipsum elit, nec
            euismod sapien laoreet ac. Proin ex arcu, commodo nec faucibus ac,
            pellentesque sed purus. Maecenas vitae ullamcorper nunc. Fusce dapibus
            lacinia dolor non tristique. Sed eu volutpat enim. Donec nisi nulla,
            eleifend quis mollis eu, posuere nec lorem. Donec id libero ex. Aliquam ut
            massa dolor.</template>
          <template #4>Etiam in turpis erat. Vestibulum auctor vel nibh eget vehicula. Integer
            finibus libero a ex vehicula pharetra. Suspendisse dapibus ipsum elit, nec
            euismod sapien laoreet ac. Proin ex arcu, commodo nec faucibus ac,
            pellentesque sed purus. Maecenas vitae ullamcorper nunc. Fusce dapibus
            lacinia dolor non tristique. Sed eu volutpat enim. Donec nisi nulla,
            eleifend quis mollis eu, posuere nec lorem. Donec id libero ex. Aliquam ut
            massa dolor.</template>
        </Steppy>
      </template>
      <template #footer>
        <button class="btn btn-primary" @click="edit(saveForm.id)">確認</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </template>
    </Modal>
    <!--end:: Modal-->
  </main>
  <!--end::App Main-->
</template>
<script setup lang="ts">
import { ref, provide, reactive, onMounted } from 'vue';
import NetworkPagination from "@/components/network-pagination.vue"

const searchForm = reactive<{
  filter: string | undefined;
  results: PageInventoryDto | undefined;
}>({
  filter: undefined,
  results: undefined,
});

import { InventoryMaintenanceApi } from 'mtsec-manage-client'

import type { PageInventoryDto } from 'mtsec-manage-client'

import { useNetworkAxios } from "@/ts/container/axios-container";
//import axios from 'axios';
const axios = useNetworkAxios();
const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;

import Modal from "@/components/modal.vue";

let thisModal = ref(null);
search();

function search(page: number = 0, size: number = 10) {
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findInventoryMaintenanceAllInventory(searchForm, page, size).then(({ data }) => {
    console.log(data)
    searchForm.results = data.inventoryDto;
    api.pingDevice(saveForm)
  }).finally(() => {

  });
}

const saveForm = reactive<{
  id: string | undefined;
  deviceName: string | undefined;
  deviceIP: string | undefined;
  category: string | undefined;
  brand: string | undefined;
  model: string | undefined;
  location: string | undefined;
  SNMPFrequency: string | undefined;
  PingFrequency: string | undefined;
  deviceInterface: string | undefined;
  interfaceDescription: string | undefined;
}>({
  id: undefined,
  deviceName: undefined,
  deviceIP: undefined,
  category: undefined,
  brand: undefined,
  model: undefined,
  location: undefined,
  SNMPFrequency: undefined,
  PingFrequency: undefined,
  deviceInterface: undefined,
  interfaceDescription: undefined,
});

function add() {
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateInventoryMaintenanceInventory(saveForm).then(({ data }) => { }).finally(() => {
    thisModal.value.hide();
    search();
  });

}

function edit(id) {
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateInventoryMaintenanceInventory(saveForm).then(({ data }) => { }).finally(() => {
    thisModal.value.hide();
    search();
  });

}

function remove(id) {
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  saveForm.id = id
  api.deleteInventoryMaintenanceOneInventory(saveForm).then(({ data }) => { }).finally(() => {
    thisModal.value.hide();
    search();
  });
}

import { Steppy } from 'vue3-steppy'

const step = ref<number>(1);
const loading = ref<boolean>(false);
const tab = [
  {
    title: "基本設定",
    iconSuccess: null,
    isValid: true,
  },
  {
    title: "連線資訊",
    iconSuccess: null,
    isValid: true,
  },
  {
    title: "進階設定",
    iconSuccess: null,
    isValid: true,
  },
]
const finalize = (): void => {
  loading.value = true;
};

function showEditModal(id) {
  if (id == undefined) {
    saveForm.id = undefined
    saveForm.deviceName = undefined
    saveForm.deviceInterface = undefined
    saveForm.interfaceDescription = undefined
  } else {
    const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
    saveForm.id = id
    api.findInventoryMaintenanceOneInventory(saveForm).then(({ data }) => {
      console.log(data)
      saveForm.id = data.inventoryDto?.id
      saveForm.deviceName = data.inventoryDto?.deviceName
      saveForm.deviceInterface = data.inventoryDto?.deviceInterface
      saveForm.interfaceDescription = data.inventoryDto?.interfaceDescription
    }).finally(() => {

    });
  }

  thisModal.value.show();
}

onMounted(() => {
})

</script>
