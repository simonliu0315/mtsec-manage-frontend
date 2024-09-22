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
                  height="30px" style="opacity: 0.8" />設備資料設定檔 - 設備組態
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
                  <h3 class="card-title">歷史備份紀錄TWAREN-TRCT-ASR9006-01</h3>
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
                          <th style="width: 530px">狀態</th>
                          <th style="width: 130px">建立時間</th>
                          <th style="width: 1030px">操作</th>                       
                        </tr> 
                      </thead>
                      <tbody>
                        <tr class="align-middle" v-for="(item, key) in searchForm.results?.content" :key="key">
                          <td> 
                            {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.company }}</td>
                          <td> 
                            <div class="fs-4 mb-3">
                              <a href="./device-info/device-configuration" ><i class="bi bi-eye"></i></a>
                              <a href="./device-info/device-configuration" ><i class="bi bi-download"></i></a>
                              <a href="./device-info/device-configuration" ><i class="bi bi-trash"></i></a>
                            </div>
                            <div class="fs-4 mb-3">
                              <a href="./device-info/device-configuration" ><i class="bi bi-eye"></i></a>
                              <a href="./device-info/device-configuration" ><i class="bi bi-download"></i></a>
                              <a href="./device-info/device-configuration" ><i class="bi bi-trash"></i></a>
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
                  <network-pagination portal :data="searchForm.results" @page="search"/>
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
            <div v-html="prettyHtml" />
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
  import { ref, provide, reactive, onMounted, computed } from 'vue';
  import NetworkPagination from "@/components/network-pagination.vue"


  const searchForm = reactive<{
    filter: string | undefined;
    results: PageInventoryDto | undefined;
  }>({
    filter: '',
    results: undefined,
  });
  
  import { OperationTeamMaintenanceApi, DeviceConfigurationApi } from 'mtsec-manage-client'
  
  import type {PageInventoryDto} from 'mtsec-manage-client'
  
  import { useNetworkAxios } from "@/ts/container/axios-container";
  //import axios from 'axios';
  const axios = useNetworkAxios();
  const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;
  
  search();
  
  function search(page: number = 0, size: number = 10) {
    const api = new OperationTeamMaintenanceApi(searchForm, VITE_NETWORK_API_URL, axios)
    console.log(page, size)
    api.findOperationTeamMaintenanceAllOperationTeam(searchForm, page, size).then(({ data }) => {
        console.log(data)
        searchForm.results =  data.operationTeamDto;
      }).finally(() => {
       
      });
  }

  const diffForm = reactive<{
    filter: string | undefined;
    diffs: PageInventoryDto | undefined;
  }>({
    filter: '',
    diffs: '',
  });
  let diffs = "";
  
  import * as Diff2Html from 'diff2html';
  import diff2html  from 'diff2html';
  import 'diff2html/bundles/css/diff2html.min.css';
const oldContent = 'const a = 1;\nconst b = 2;';
const newContent = 'const a = 2;\nconst b = 2;';

const configuration = { drawFileList: true, matching: 'lines' };
//const diff2htmlUi = new Diff2HtmlUI(targetElement, diffString, configuration);
//diffs = '--- a/server/vendor/golang.org/x/sys/unix/zsyscall_linux_mipsle.go\n+++ b/server/vendor/golang.org/x/sys/unix/zsyscall_linux_mipsle.go\n@@ -1035,6 +1035,17 @@ func Prctl(option int, arg2 uintptr, arg3 uintptr, arg4 uintptr, arg5 uintptr) (\n \n // THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n \n+func Pselect(nfd int, r *FdSet, w *FdSet, e *FdSet, timeout *Timespec, sigmask *Sigset_t) (n int, err error) {\n+\tr0, _, e1 := Syscall6(SYS_PSELECT6, uintptr(nfd), uintptr(unsafe.Pointer(r)), uintptr(unsafe.Pointer(w)), uintptr(unsafe.Pointer(e)), uintptr(unsafe.Pointer(timeout)), uintptr(unsafe.Pointer(sigmask)))\n+\tn = int(r0)\n+\tif e1 != 0 {\n+\t\terr = errnoErr(e1)\n+\t}\n+\treturn\n+}\n+\n+// THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n+\n func read(fd int, p []byte) (n int, err error) {\n \tvar _p0 unsafe.Pointer\n \tif len(p) > 0 {\n'
 //diffs = '--- original-file.txt\n+++ new-file.txt\n@@ -1,1 +1,1 @@\n-this is a test\n+this is a testfile\n';
 const prettyHtml = computed(() => {
    return Diff2Html.html(diffForm.diffs,{
        drawFileList: true,
        matching: 'lines',
        outputFormat: 'side-by-side',
      });
  });
  const api2 = new DeviceConfigurationApi(diffForm, VITE_NETWORK_API_URL, axios)
  api2.findDeviceConfigurationDiff(searchForm, 0, 10).then(({ data }) => {
        console.log(data)
        diffForm.diffs = data.diffString
      }).finally(() => {
       
      });
  </script>
  
  
  