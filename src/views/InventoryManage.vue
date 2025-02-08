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
                        <th style="width: 230px">設備名稱</th>
                        <th style="width: 130px">管理IP</th>
                        <th style="width: 230px">設備類別</th>
                        <th style="width: 130px">納管時間</th>
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
                        <td>{{ item.manageIp }}</td>
                        <td>{{ item.deviceType }}</td>
                        <td>{{ $filters.formatDate(item.createdAt) }}</td>
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
    <Modal :title="saveForm.title" ref="thisModal">
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
                    v-model="saveForm.manageIp">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="deviceType" class="col-sm-2 col-form-label text-start fw-bold">類別</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.deviceType">
                    <option value="switch" selected="true">交換器</option>
                    <option value="router">路由器</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="vendor" class="col-sm-2 col-form-label text-start fw-bold">廠牌</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.vendor">
                    <option value="CISCO" selected="true">CISCO</option>
                    <option value="JUNIPER">JUNIPER</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="model" class="col-sm-2 col-form-label text-start fw-bold">型號</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="model" placeholder="型號" v-model="saveForm.model">
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="location" class="col-sm-2 col-form-label text-start fw-bold">位置</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.location">
                    <option selected="true">科技大樓</option>
                    <option>台北主節點</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="snmpFrequency" class="col-sm-2 col-form-label text-start fw-bold">SNMP監控頻率</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.snmpFrequency">
                    <option selected="true" value="5">五分鐘</option>
                    <option value="10">十分鐘</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="pingFrequency" class="col-sm-2 col-form-label text-start fw-bold">Ping監控頻率</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.pingFrequency">
                    <option value="5" selected="true">五分鐘</option>
                    <option value="10">十分鐘</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="groupId" class="col-sm-2 col-form-label text-start fw-bold">所屬群組</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.groupId">
                    <option value="1234545" selected="true">測試群組一</option>
                    <option value="432424">測試群組二</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2">
                <label for="exporterType" class="col-sm-2 col-form-label text-start fw-bold">使用收集器</label>
                <div class="col-sm-9">
                  <select class="form-select" v-model="saveForm.exporterType">
                    <option value="snmp" selected="true">SNMP Exporter</option>
                    <option value="windows">Windows Exporter</option>
                  </select>
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
                <div class="col-sm-8 text-start">
                  {{ saveForm.manageIp }}
                  <button class="btn btn-info" @click="testPing()">測試連線</button>
                  <i v-if="icmpForm.successFlag == true" class="icon bi bi-check" style="color:green">連線成功 (已傳送={{ icmpForm.statistics.sent }}，已收到={{  icmpForm.statistics.received }}，已遺失={{  icmpForm.statistics.lost }})</i> 
                  <i v-if="icmpForm.successFlag == false" class="icon bi bi-x" style="color:red">連線失敗</i> 
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
                    <input type="radio" class="btn-check" name="snmpProtocol" id="on" autocomplete="off" value="on" v-model="saveForm.snmpProtocol" checked>
                    <label class="btn btn-outline-primary" for="on">ON</label>

                    <input type="radio" class="btn-check" name="snmpProtocol" id="off" autocomplete="off" value="off" v-model="saveForm.snmpProtocol">
                    <label class="btn btn-outline-primary" for="off">OFF</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on'">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label text-start fw-bold">IP</label>
                <div class="col-sm-10 col-form-label text-start">
                {{ saveForm.manageIp }} 
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Port</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" value="161" v-model="saveForm.snmpPort">
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">SNMP版本</label>
                <div class="col-sm-10 text-start">
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="snmpVersion" id="v2c" autocomplete="off" value="v2c" v-model="saveForm.snmpVersion" checked>
                    <label class="btn btn-outline-primary" for="v2c">v2c</label>
                    <input type="radio" class="btn-check" name="snmpVersion" id="v3" autocomplete="off" value="v3" v-model="saveForm.snmpVersion">
                    <label class="btn btn-outline-primary" for="v3">v3</label>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v2c'">
                <label for="community" class="col-sm-2 col-form-label text-start fw-bold">Read Community</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="community" placeholder="Read Community" v-model="saveForm.snmpCommunity">
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">安全層級</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="true">Privacy</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">帳號</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入型號">
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Auth.
                  Protocol</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="true">Privacy</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Auth.
                  Password</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入密碼">
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Privacy
                  Protocol</label>
                <div class="col-sm-10">
                  <select class="form-select">
                    <option selected="true">DES</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Privacy
                  Password</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入密碼">
                </div>
              </div>
              <div class="form-group row mb-2" v-show="saveForm.snmpProtocol == 'on' && saveForm.snmpVersion == 'v3'">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label text-start fw-bold">Context
                  Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="請輸入Context Name">
                </div>
              </div>
            </div>
          </template>
          <template #3>
            <vue3-datatable  ref="datatable" :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows" :pageSize="params.pagesize" 
            :hasCheckbox="true" :search="params.search"  :isServerMode="true" 
            @rowSelect="rowSelect" @change="changeServer" :paginationInfo="'顯示 {0} 到 {1} 共 {2} 筆'">
            <template #oid="data">
                {{ data.value.oid + '/' + data.value.ifName }}
            </template>
            <template #ifOperStatus="data">
                <div v-if="data.value.ifOperStatus == '1'">UP</div>
                <div v-if="data.value.ifOperStatus == '2'">DOWN</div>
                <div v-if="data.value.ifOperStatus == '6'">notPresent</div>
            </template>
            </vue3-datatable>
          </template>
        </Steppy>
      </template>
      <!--template #footer>
        <button class="btn btn-primary" @click="edit(saveForm.id)">確認</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </template-->
    </Modal>
    <!--end:: Modal-->
  </main>
  <!--end::App Main-->
</template>
<script setup lang="ts">
import { ref, provide, reactive, onMounted, watch } from 'vue';
import NetworkPagination from "@/components/network-pagination.vue"
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

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
  }).finally(() => {
    step.value = 1
    icmpForm.successFlag = undefined
  });
}

const saveForm = reactive<{
  title: string | undefined;
  id: string | undefined;
  deviceName: string | undefined;
  manageIp: string | undefined;
  deviceType: string | undefined;
  vendor: string | undefined;
  model: string | undefined;
  location: string | undefined;
  snmpFrequency: string | undefined;
  pingFrequency: string | undefined;
  deviceInterface: string | undefined;
  interfaceDescription: string | undefined;
  groupId: string | undefined;
  exporterType: string | undefined;
  snmpProtocol: string | undefined;
  snmpPort: string | undefined;
  snmpVersion: string | undefined;
  snmpCommunity: string | undefined;
  interfaces: Object | undefined;
}>({
  title: "新增",
  id: undefined,
  deviceName: undefined,
  manageIp: undefined,
  deviceType: undefined,
  vendor: undefined,
  model: undefined,
  location: undefined,
  snmpFrequency: undefined,
  pingFrequency: undefined,
  deviceInterface: undefined,
  interfaceDescription: undefined,
  groupId: undefined,
  exporterType: undefined,
  snmpPort: '161',
  snmpProtocol: 'on',
  snmpVersion: 'v2c',
  snmpCommunity: 'public',
  interfaces: undefined,
});
const icmpForm = reactive<{
  successFlag: boolean | undefined;
  statistics: object | undefined;
}>({ 
  successFlag: undefined,
  statistics: {received: 0, sent: 0, lost: 0}
});
function testPing() {
  console.log("ping ", saveForm)
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.pingDevice(saveForm).then(({ data }) => { 
    console.log(data)
    icmpForm.successFlag = data.icmpPingResponse.successFlag
    icmpForm.statistics = data.icmpPingResponse.statistics
  }).finally(() => {
  
  });
}
function add() {
  saveForm.interfaces = pageSelectedItems.flat();
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateInventoryMaintenanceInventory(saveForm).then(({ data }) => { }).finally(() => {
    pageSelectedItems = []
    thisModal.value.hide();
    search();
  });

}

function edit() {
  saveForm.interfaces = pageSelectedItems.flat();
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateInventoryMaintenanceInventory(saveForm).then(({ data }) => { }).finally(() => {
    thisModal.value.hide();
    pageSelectedItems = []
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
  //loading.value = true;
  edit()
  step.value = 1
};

function showEditModal(id) {
  step.value = 1
  if (id == undefined) {
    saveForm.title = "新增"
    saveForm.id = undefined
    saveForm.deviceName = undefined
    saveForm.deviceInterface = undefined
    saveForm.interfaceDescription = undefined
    saveForm.manageIp = undefined
    saveForm.deviceType = undefined
    saveForm.vendor = undefined
    saveForm.model = undefined
    saveForm.location = undefined
    saveForm.snmpFrequency = undefined
    saveForm.pingFrequency = undefined
    saveForm.groupId = undefined
  } else {
    saveForm.title = "修改"
    const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
    saveForm.id = id
    api.findInventoryMaintenanceOneInventory(saveForm).then(({ data }) => {
      console.log(data)
      saveForm.id = data.inventoryDto?.id
      saveForm.deviceName = data.inventoryDto?.deviceName
      saveForm.deviceInterface = data.inventoryDto?.deviceInterface
      saveForm.interfaceDescription = data.inventoryDto?.interfaceDescription
      saveForm.manageIp = data.inventoryDto?.manageIp
      saveForm.deviceType = data.inventoryDto?.deviceType
      saveForm.vendor = data.inventoryDto?.vendor
      saveForm.model = data.inventoryDto?.model
      saveForm.location = data.inventoryDto?.location
      saveForm.snmpFrequency = data.inventoryDto?.snmpFrequency
      saveForm.pingFrequency = data.inventoryDto?.pingFrequency
      saveForm.groupId = data.inventoryDto?.groupId
    }).finally(() => {

    });
  }

  thisModal.value.show();
}

onMounted(() => {
})

import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
const datatable: any = ref(null);

const cols =
  ref([
    { field: 'oid', title: 'OID', isUnique: true },
    { field: 'ifDescr', title: '介面描述' },
    { field: 'ifType', title: '屬性' },
    { field: 'ifOperStatus', title: '狀態' },
    { field: 'ifSpeed', title: '頻寬' },
    { field: 'ifAlias', title: '別名' },
  ]) || [];
const rows: any = ref(null);
const total_rows = ref(0);

const params = reactive({
  current_page: 1,
  pagesize: 10,
  search: '',
  column_filters: [],
  sort_column: 'oid',
  sort_direction: 'asc'
});
async function changeServer(data: any) {
  params.current_page = data.current_page;
  params.pagesize = data.pagesize;
  params.sort_column = data.sort_column;
  params.sort_direction = data.sort_direction;

  console.log("pageSelectedItems:", pageSelectedItems[params.current_page])
  if (selectedItems[params.current_page] == undefined) {
    selectedItems[params.current_page] = []
  }
  if (pageSelectedItems[params.current_page] == undefined) {
    pageSelectedItems[params.current_page] = []
  }
  onlySelectRow = 0
  await queryInterface(1)

}
/*
const changeServer = (data: any) => {
  console.log('*****changeServer******', data)
  
  params.current_page = data.current_page;
  params.pagesize = data.pagesize;
  params.sort_column = data.sort_column;
  params.sort_direction = data.sort_direction;
  queryInterface(1)
  console.log("pageSelectedItems:", pageSelectedItems[params.current_page])
  if (selectedItems[params.current_page] == undefined) {
    selectedItems[params.current_page] = []
  }
  if (pageSelectedItems[params.current_page] == undefined) {
    pageSelectedItems[params.current_page] = []
  }
  //console.log(handleSelectRows(selectedItems));
  
};
*/

async function queryInterface(changeServerParam) {
  console.log("*************queryInterface*****************")
  onlySelectRow++
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  await api.inventoryInterface(saveForm, params.current_page - 1, params.pagesize).then(({ data }) => {
    console.log("data", data)
    //snmpWalkForm.results = data.snmpWalk;
    rows.value = data.snmpWalk?.content;
    total_rows.value = data.snmpWalk?.totalElements
    if (data.itemSelected.length != 0 && onlySelectRow < 2) {
      //onlySelectRow = 0
      pageSelectedItems = data.itemSelected;
    }
    
    
    /*
  for(var i = 0 ; i < params.pagesize; i++) {
    if (datatable.value.isRowSelected(i)) {
      console.log("***queryInterface current_page isRowSelected="+params.current_page +", i=",i);
      pageSelectedItems[params.current_page][i] = i
      //pageSelectedItems[params.current_page].push(i);
    } else {
      console.log("***queryInterface current_page xxxx="+params.current_page +", i=", i);
      pageSelectedItems[params.current_page][i] = undefined
    }
  }
*/
  }).finally(() => {
   console.log('***********finally**************')
   console.log("**********START SET ROW***************")
    if (pageSelectedItems[params.current_page] == undefined ) {
      pageSelectedItems[params.current_page] = []
    }
    console.log(pageSelectedItems[params.current_page])
  
  for (var i = 0; i < pageSelectedItems[params.current_page].length; i++) {
    console.log("changeServer params.current_page ", params.current_page, pageSelectedItems[params.current_page][i]);
    if (pageSelectedItems[params.current_page][i] != undefined) {
      datatable.value.selectRow(i)
      console.log('set selectRow', i, datatable.value.isRowSelected(i))
    }
  }
  console.log("**********END SET ROW***************")

  });
}
function queryInterface1(changeServerParam) {
  console.log("*************queryInterface*****************")
  onlySelectRow = 1
  const api = new InventoryMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.inventoryInterface(saveForm, params.current_page - 1, params.pagesize).then(({ data }) => {
    console.log("data", data)
    //snmpWalkForm.results = data.snmpWalk;
    rows.value = data.snmpWalk?.content;
    total_rows.value = data.snmpWalk?.totalElements
    

  }).finally(() => {
    console.log("**********START SET ROW***************")
  if (onlySelectRow == 1)
  for (var i = 0; i < pageSelectedItems[params.current_page].length; i++) {
    console.log("changeServer params.current_page ", params.current_page, pageSelectedItems[params.current_page][i]);
    if (pageSelectedItems[params.current_page][i] != undefined) {
      datatable.value.selectRow(i)
      console.log('set selectRow', i, datatable.value.isRowSelected(i))
    }
  }  
  console.log("**********END SET ROW***************")

  for(var i = 0 ; i < params.pagesize; i++) {
    if (datatable.value.isRowSelected(i)) {
      console.log("***queryInterface current_page isRowSelected="+params.current_page +", i=",i);
      pageSelectedItems[params.current_page][i] = i
      //pageSelectedItems[params.current_page].push(i);
    } else {
      console.log("***queryInterface current_page xxxx="+params.current_page +", i=", i);
      pageSelectedItems[params.current_page][i] = undefined
    }
  }
  });
}

// 全局變數，用來儲存所有選取的資料
let selectedItems: any[] = [];
let pageSelectedItems: any[][] = [];
let onlySelectRow: number = 0

const selectedItemIds = new Set<String>();

// selectrows 事件處理函數
function handleSelectRows(items: any[]) {
  // 將 items 轉換成 Set，去除重複
  const uniqueItems = new Set(items.map(item => JSON.stringify(item)));
  // 將 Set 轉回陣列
  const uniqueItemsArray = Array.from(uniqueItems, JSON.parse);

  // 將新選取的資料合併到全局變數
  selectedItems.push(...uniqueItemsArray);

  // 使用 spread 運算子去重
  selectedItems = [...new Set(selectedItems.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

  console.log('所有選取的資料：', selectedItems);
}
function rowSelect(itemAry) {
  console.log('**************rowSelect********')
  console.log('onlySelectRow = ', onlySelectRow)
  selectedItems[params.current_page] = itemAry
  console.log('pageSelectedItems[params.current_page]', pageSelectedItems[params.current_page])
  if (pageSelectedItems[params.current_page] == undefined) {
    console.log('************** pageSelectedItems[params.current_page]********')
    pageSelectedItems[params.current_page] = []
  }
  //handleSelectRows(itemAry)
  console.log('rowSelects selectedItems', selectedItems)
  console.log('rowSelects pageSelectedItems', pageSelectedItems)
  console.log('rowSelects params.current_page', params.current_page)
  console.log('rowSelects pageSelectedItems[params.current_page]', pageSelectedItems[params.current_page])

  
 if (onlySelectRow > 2) {  
  for(var i = 0 ; i < params.pagesize; i++) {
    console.log(datatable.value.getSelectedRows())
    if (datatable.value.isRowSelected(i)) {
      console.log("***current_page isRowSelected="+params.current_page +", i=",i);
      pageSelectedItems[params.current_page][i] = i
      //pageSelectedItems[params.current_page].push(i);
    } else {
      console.log("***current_page xxxx="+params.current_page +", i=", i);
      pageSelectedItems[params.current_page][i] = undefined
    }
  }
 }
  
  onlySelectRow++
}

watch(
  step, function() {
    console.log("step ", step.value)
    if(step.value == 2) {
      //call exporter to get interface information
      onlySelectRow = 0
      pageSelectedItems = []
    }
    if(step.value == 3) {
      //call exporter to get interface information
      queryInterface();
    }
  }
)

const snmpWalkForm = reactive<{
  results: object | undefined;
}>({
  results: undefined,
});
</script>

<style lang="css">
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
.modal-dialog,
.modal-content {
    /* 80% of window height */
    height: 95%;
    width: 120%;
}

.modal-body {
    /* 100% = dialog height, 120px = header + footer */
    max-height: calc(100% - 120px);
    overflow-y: scroll;
}
</style>