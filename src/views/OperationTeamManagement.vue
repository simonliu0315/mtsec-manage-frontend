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
                height="30px" style="opacity: 0.8" />營運團隊管理
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">資料管理</li>
              <li class="breadcrumb-item active" aria-current="page">營運團隊管理</li>
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
                        <input
                              class="form-control"
                              type="search"
                              :placeholder="$t('pagination.search')"
                              aria-label="Search"
                              v-model="searchForm.filter"
                            />
                            <button
                              class="bi bi-search input-group-text"
                              @click="search()"></button
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
                        <th style="width: 100px">姓名</th>
                        <th style="width: 150px">公司</th>
                        <th style="width: 100px">職稱/負責項目</th>
                        <th style="width: 100px"><div>手機電話</div><div>(註:以、區隔)</div></th>
                        <th style="width: 100px"><div>電話號碼</div><div>(註:以、區隔)</div></th>
                        <th style="width: 100px"><div>傳真號碼</div><div>(註:以、區隔)</div></th>
                        <th style="width: 100px">電子郵件</th>
                        <th>備註</th>
                        <th>操作
                            <span class="fs-4 mb-3"><a href="#" @click="showEditModal()" >
                              <i class="bi bi-plus"></i></a>
                            </span>
                        </th>
                      </tr> 
                    </thead>
                    <tbody>
                      <tr class="align-middle" v-for="(item, key) in searchForm.results?.content" :key="key">
                        <td> 
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.company }}</td>
                        <td>{{ item.jobTitle }}</td>
                        <td>{{ item.mobile }}</td>
                        <td>{{ item.telephone }}</td>
                        <td>{{ item.fax }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.remark }}</td>
                        <td>
                          <div class="fs-4 mb-3">
                            <a href="#" @click="showEditModal(item.id)" ><i class="bi bi-pencil"></i></a>
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
                <label for="deviceName" class="col-sm-3 col-form-label">姓名</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceName" placeholder="姓名" v-model="saveForm.name">
              </div>
            </div>
            <div class="form-group row">
                <label for="deviceInterface" class="col-sm-3 col-form-label">公司</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceInterface" placeholder="公司" v-model="saveForm.company">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">職稱/負責項目</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="職稱/負責項目" v-model="saveForm.jobTitle">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">手機電話</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="手機電話" v-model="saveForm.mobile">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">電話號碼</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="電話號碼" v-model="saveForm.telephone">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">傳真號碼</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="傳真號碼" v-model="saveForm.fax">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">電子郵件</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="電子郵件" v-model="saveForm.email">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">備註</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="備註" v-model="saveForm.remark">
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
  filter: '',
  results: undefined,
});

import { OperationTeamMaintenanceApi } from 'mtsec-manage-client'

import type {PageInventoryDto} from 'mtsec-manage-client'

import { useNetworkAxios } from "@/ts/container/axios-container";
const axios = useNetworkAxios();
const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;

import Modal from "@/components/modal.vue";

let thisModal= ref(null);
search();

function search(page: number = 0, size: number = 10) {
  const api = new OperationTeamMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findOperationTeamMaintenanceAllOperationTeam(searchForm, page, size).then(({ data }) => {
      console.log(data)
      searchForm.results =  data.operationTeamDto;
    }).finally(() => {
     
    });
}

const saveForm = reactive<{
  id: string | undefined;
  name: string | undefined;
  company: string | undefined;
  jobTitle: string | undefined;
  mobile: string | undefined;
  telephone: string | undefined;
  fax: string | undefined;
  email: string | undefined;
  remark: string | undefined;
}>({
  id: undefined,
  name: undefined,
  company: undefined,
  jobTitle: undefined,
  mobile: undefined,
  telephone: undefined,
  fax: undefined,
  email: undefined,
  remark: undefined,
});

function add() {
  const api = new OperationTeamMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)  
  api.updateOperationTeamMaintenanceOperationTeam(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function edit(id) {
  const api = new OperationTeamMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateOperationTeamMaintenanceOperationTeam(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function remove(id) {
  const api = new OperationTeamMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  saveForm.id = id
  api.deleteOperationTeamMaintenanceOneOperationTeam(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
}
function showEditModal(id) {
    if (id == undefined) {
      saveForm.id = undefined
      saveForm.name = undefined
      saveForm.company = undefined
      saveForm.jobTitle = undefined
    
      saveForm.mobile = undefined
      saveForm.telephone = undefined
      saveForm.fax = undefined
      saveForm.email = undefined
      saveForm.remark = undefined
    } else {
      const api = new OperationTeamMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
      saveForm.id = id
      api.findOperationTeamMaintenanceOneOperationTeam(saveForm).then(({ data }) => {
        console.log(data)
        saveForm.id = data.operationTeamDto?.id
        saveForm.name = data.operationTeamDto?.name
        saveForm.company = data.operationTeamDto?.company
        saveForm.jobTitle = data.operationTeamDto?.jobTitle
        saveForm.mobile = data.operationTeamDto?.mobile
        saveForm.telephone = data.operationTeamDto?.telephone
        saveForm.fax = data.operationTeamDto?.fax
        saveForm.email = data.operationTeamDto?.email
        saveForm.remark = data.operationTeamDto?.remark
      }).finally(() => {
     
      });
    }
    
    thisModal.value.show();
}

</script>


