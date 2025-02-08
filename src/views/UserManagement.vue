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
                height="30px" style="opacity: 0.8" />使用者管理
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">資料管理</li>
              <li class="breadcrumb-item active" aria-current="page">使用者管理</li>
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
                        <th style="width: 5%">#</th>
                        <th style="width: 10%">帳號</th>
                        <th style="width: 10%">使用者名稱</th>
                        <th style="width: 20%">電子郵件</th>
                        <th style="width: 15%">角色</th>
                        <th style="width: 15%">備註</th>
                        <th style="width: 25%">操作
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
                        <td>{{ item.userId }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.role }}</td>
                        <td></td>
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
                <label for="deviceName" class="col-sm-3 col-form-label">帳號</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceName" placeholder="帳號" v-model="saveForm.userId">
              </div>
            </div>
            <div class="form-group row">
                <label for="deviceName" class="col-sm-3 col-form-label">使用者名稱</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceName" placeholder="使用者名稱" v-model="saveForm.username">
              </div>
            </div>
            <div class="form-group row">
                <label for="deviceInterface" class="col-sm-3 col-form-label">電子郵件</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceInterface" placeholder="電子郵件" v-model="saveForm.email">
              </div>
            </div>
            <div class="form-group row">
                <label for="interfaceDescription" class="col-sm-3 col-form-label">角色</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="interfaceDescription" placeholder="角色" v-model="saveForm.role">
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

import { UserMaintenanceApi } from 'mtsec-manage-client'

import type {PageUserDto} from 'mtsec-manage-client'

import { useNetworkAxios } from "@/ts/container/axios-container";
const axios = useNetworkAxios();
const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;

import Modal from "@/components/modal.vue";

let thisModal= ref(null);
search();

function search(page: number = 0, size: number = 10) {
  const api = new UserMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findUserMaintenanceAllUser(searchForm, page, size).then(({ data }) => {
      console.log(data)
      searchForm.results =  data.userDto;
    }).finally(() => {
     
    });
}

const saveForm = reactive<{
  id: number | undefined;
  userId: string | undefined;
  username: string | undefined;
  email: string | undefined;
  role: string | undefined;
}>({
  id: undefined,
  userId: undefined,
  username: undefined,
  email: undefined,
  role: undefined,
});

function add() {
  const api = new UserMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)  
  api.updateUserMaintenanceUser(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function edit(id) {
  const api = new UserMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateUserMaintenanceUser(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
  
}

function remove(id) {
  const api = new UserMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  saveForm.id = id
  api.deleteUserMaintenanceOneUser(saveForm).then(({ data }) => {}).finally(() => {
    thisModal.value.hide();
    search();
  });
}
function showEditModal(id) {
    if (id == undefined) {
      saveForm.id = undefined
      saveForm.userId = undefined
      saveForm.username = undefined
      saveForm.email = undefined
      saveForm.role = undefined
    
    } else {
      const api = new UserMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
      saveForm.id = id
      api.findUserMaintenanceOneUser(saveForm).then(({ data }) => {
        console.log(data)
        saveForm.id = data.userDto?.id
        saveForm.userId = data.userDto?.userId
        saveForm.username = data.userDto?.username
        saveForm.email = data.userDto?.email
        saveForm.role = data.userDto?.role
        
      }).finally(() => {
     
      });
    }
    
    thisModal.value.show();
}

</script>


