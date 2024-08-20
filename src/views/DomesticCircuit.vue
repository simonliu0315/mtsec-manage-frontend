<style scoped lang="scss">
.chart {
  height: 20vh;
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
                <h3 class="card-title">電路狀態-國內骨幹電路狀態</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body p-0">
                <v-chart class="chart" :option="option" autoresize />
              </div>
            </div>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title">電路狀態-國內骨幹電路狀態</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse"> 
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i> 
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i> 
                  </button>                      
                  <div class="btn-group"> 
                    <button type="button" class="btn btn-tool dropdown-toggle" data-bs-toggle="dropdown"> 
                      <i class="bi bi-download"></i> 
                    </button>                        
                    <div class="dropdown-menu dropdown-menu-end" role="menu"> 
                      <a href="#" class="dropdown-item">CSV</a> 
                      <a href="#" class="dropdown-item">EXCEL</a> 
                    </div>  
                  </div> 
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove"> 
                    <i class="bi bi-x-lg"></i> 
                  </button>
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
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>
                        <th style="width: 530px">設備</th>
                        <th style="width: 130px">介面</th>
                        <th style="width: 1030px">介面描述</th>
                        <th style="width: 530px">檢查時間</th>
                        <th style="width: 530px">Input使用量<br />(每分鐘平均值)</th>
                        <th style="width: 530px">Output使用量<br />(每分鐘平均值)</th>
                        <th>備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="align-middle" v-for="(item, key) in results.data" :key="key">
                        <td>1.</td>
                        <td>{{ item.equipmentName }}</td>
                        <td>{{ item.equipmentInterface }}</td>
                        <td>{{ item.equipmentDescript }}</td>
                        <td>{{ item.checkDate }}</td>
                        <td>{{ item.equipmentNetworkTrafficIn }}</td>
                        <td>{{ item.equipmentNetworkTrafficOut }}</td>
                        <td>{{ item.note }}</td>
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
                <network-pagination portal :data="results" @page="retrieveDefaultData" :sizeOptions="results.sizeOptions"/>
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
<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'light');

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['正常數', '異常數', '不告警數'],
  },
  series: [
    {
      name: '國內骨幹電路狀態',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '正常數' },
        { value: 310, name: '異常數' },
        { value: 234, name: '不告警數' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});
</script>
<script >
import {  defineComponent } from 'vue';
import NetworkPagination from "@/components/network-pagination.vue"
export default {
  name: "domestic-circuit",
  data() {
    return {
      currentPage1 : ref(1),
      results: { data: [{
        equipmentId: "",
        equipmentName: "",
        equipmentInterface: "",
        equipmentDescript: "",
        checkDate: "",
        equipmentNetworkTrafficIn: "",
        equipmentNetworkTrafficOut: "",
        note: ""
      }],
      title: "",
      pageSize: 10,
      sizeOptions: [10, 20, 50, 100],
      totalElements : 8,
      totalPages : 4,
      number : 0,
      size : 2,
      first : true,
      last : false,
      numberOfElements : 2,
      empty : false,
      }
    };
      
  },
  methods: {
    retrieveDefaultData() {
      //let jsonArrayObject = [];
      this.results.data = [];
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.data.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A"
      });
      this.results.sizeOptions= [10, 20, 50, 100]
      this.results.totalElements = 8
      this.results.totalPages = 4
      this.results.number = 2
      this.results.size = 10
      this.results.first= true
      this.results.last= false
      this.results.numberOfElements = 2
      this.results.empty = false
      console.log(this.results)
    },
    page(page, size) {
      if (size !== this.results.pageSize) {
        page = 0;
      }
      this.results.pageSize = size;

    },
    refreshList() {

    },
    setActiveTutorial() {

    },
    removeAllTutorials() {

    },
    searchTitle() {

    }
  },
  mounted() {
    this.page(0, 20);
    this.retrieveDefaultData();
  }
};
</script>
