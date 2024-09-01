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
                height="30px" style="opacity: 0.8" />維運團隊
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">聯絡資料</li>
              <li class="breadcrumb-item active" aria-current="page">維運團隊</li>
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
                        <th style="width: 530px">姓名</th>
                        <th style="width: 130px">公司</th>
                        <th style="width: 1030px">職稱/負責項目</th>
                        <th style="width: 530px"><div>手機電話</div><div>(註:以、區隔)</div></th>
                        <th style="width: 530px"><div>電話號碼</div><div>(註:以、區隔)</div></th>
                        <th style="width: 530px"><div>傳真號碼</div><div>(註:以、區隔)</div></th>
                        <th style="width: 1030px">電子郵件</th>
                        <th>備註</th>
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

import { OperationTeamControllerApi } from '@/ts/openapi'

import type {PageInventoryDto} from '@/ts/openapi'

import { useEInvAxios } from "@/ts/container/axios-container";
//import axios from 'axios';
const axios = useEInvAxios();

search();

function search(page?: number, size?: number) {
  const api = new OperationTeamControllerApi(searchForm,'http://localhost:8081', axios)
  api.findAllOperationTeam(searchForm, page, size).then(({ data }) => {
      console.log(data)
      searchForm.results =  data.operationTeamDto;
    }).finally(() => {
     
    });
}

</script>


