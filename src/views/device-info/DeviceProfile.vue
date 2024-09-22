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
                  height="30px" style="opacity: 0.8" />設備資料設定檔
              </h3>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-end">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">設備資料</li>
                <li class="breadcrumb-item active" aria-current="page">設備資料設定檔</li>
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
                          <th style="width: 530px">設備類別</th>
                          <th style="width: 130px">設備名稱</th>
                          <th style="width: 1030px">GigaPop</th>
                          <th style="width: 530px">OOB IP</th>
                          <th style="width: 530px">IPv4</th>
                          <th style="width: 530px">IPv6</th>
                          <th style="width: 1030px">聯絡資訊</th>
                          <th>Config</th>
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
                          <td> 
                            <div class="fs-4 mb-3">
                              <a href="/device-info/device-configuration" ><i class="bi bi-search"></i></a>
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
  //import axios from 'axios';
  const axios = useNetworkAxios();
  const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;
  
  search();
  
  function search(page: number = 0, size: number = 10) {
    const api = new OperationTeamMaintenanceApi(searchForm, VITE_NETWORK_API_URL, axios)
    api.findOperationTeamMaintenanceAllOperationTeam(searchForm, page, size).then(({ data }) => {
        console.log(data)
        searchForm.results =  data.operationTeamDto;
      }).finally(() => {
       
      });
  }
  
  </script>
  
  
  