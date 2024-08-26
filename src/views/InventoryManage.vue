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
              <img src="@/assets/NCHCLogo.png" alt="NCHC Logo" class="brand-image img-circle elevation-3" width="30px"
                height="30px" style="opacity: 0.8" />{{
                  $t('dashboard.TWARENMonitoringBashboard') }}
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">國內骨幹流量狀況</li>
            </ol>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title">資產管理</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool"> 
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
                        <input
                              class="form-control"
                              type="search"
                              :placeholder="$t('pagination.search')"
                              aria-label="Search"
                            />
                            <button
                              class="bi bi-search input-group-text"
                              type="submit"></button
                            >
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
                        <th style="width: 130px">檢查時間</th>
                        <th>備註</th>
                        <th>操作
                            <span class="fs-4 mb-3"><a href="#" @click="showeditModal()" >
                              <i class="bi bi-plus"></i></a>
                            </span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="align-middle" v-for="(item, key) in searchForm.results?.content" :key="key">
                        <td> 
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        <td>{{ item.deviceName }}</td>
                        <td>{{ item.deviceInterface }}</td>
                        <td>{{ item.interfaceDescription }}</td>
                        <td>{{ item.checkTime }}</td>
                        <td>{{ item.remarks }}</td>
                        <td>
                          <div class="fs-4 mb-3">
                            <a href="#" @click="showeditModal(item.id)" ><i class="bi bi-pencil"></i></a>
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
        <div>
            <div class="form-group row">
                <label for="deviceName" class="col-sm-3 col-form-label">設備名稱</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceName" placeholder="設備名稱" v-model="saveForm.deviceName">
              </div>
            </div>
            <div class="form-group row">
                <label for="deviceInterface" class="col-sm-3 col-form-label">介面</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceInterface" placeholder="介面" v-model="saveForm.deviceInterface">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">介面描述</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="介面描述" v-model="saveForm.interfaceDescription">
              </div>
            </div>
        </div>
      </template>
      <template #footer>
        <button class="btn btn-primary" @click="edit(saveForm.id)">確認</button>
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

import { InventoryControllerApi } from '@/ts/openapi'

import type {PageInventoryDto} from '@/ts/openapi'

import { useEInvAxios } from "@/ts/container/axios-container";
//import axios from 'axios';
const axios = useEInvAxios();

import Modal from "@/components/modal.vue";

let thisModal= ref(null);
search();

function search(page?: number, size?: number) {
  const api = new InventoryControllerApi(undefined,'http://localhost:8081', axios)
  api.findAllRes(searchForm, page, size).then(({ data }) => {
      console.log(data)
      searchForm.results =  data.inventoryDto;
    }).finally(() => {
     
    });
}

const saveForm = reactive<{
  id: string | undefined;
  deviceName: string | undefined;
  deviceInterface: string | undefined;
  interfaceDescription: string | undefined;
}>({
  id: undefined,
  deviceName: undefined,
  deviceInterface: undefined,
  interfaceDescription: undefined,
});

function add() {
  const api = new InventoryControllerApi(undefined,'http://localhost:8081', axios)  
  api.update(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function edit(id) {
  console.log(id)
  const api = new InventoryControllerApi(undefined,'http://localhost:8081', axios)
  console.log(saveForm)
  
  api.update(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function remove(id) {
  console.log(id)
  const api = new InventoryControllerApi(undefined,'http://localhost:8081', axios)
  saveForm.id = id
  api.deleteOne(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
}
function showeditModal(id) {
    if (id == undefined) {
      saveForm.id = undefined
      saveForm.deviceName = undefined
      saveForm.deviceInterface = undefined
      saveForm.interfaceDescription = undefined

    } else {
      const api = new InventoryControllerApi(undefined,'http://localhost:8081', axios)
      searchForm.id = id
      api.findOneRes(searchForm).then(({ data }) => {
      console.log(data)
      console.log(data.inventoryDto?.id)
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


