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
          <div class="col-md-6" >
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title">國內骨幹電路狀態監控統計圖</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-md-12 float-left mt-1">
                    <v-chart class="chart-20"  ref="pie" :option="option1" autoresize />
                  </div>
                  <!--div class="col-md-4 float-left mt-5">
				            正常數: 
                    <a href="" style="font-size:14pt; color:#00a65a">322</a>
                    <small class="text-success ms-2">
                      <i class="bi bi-arrow-up"></i>
                      2%
                    </small>
                    <br/>
				            異常數: 
                    <a href="" style="font-size:22pt; color:#f56954">17</a>
                    <small class="text-danger ms-2">
                      <i class="bi bi-arrow-down"></i>
                      3%
                    </small>
                    <br/>
				            不告警數: 
                    <a href="" style="font-size:14pt; color:#f39c12">128</a>
                    <small class="text-success ms-2">
                      <i class="bi bi-arrow-up"></i>
                      2%
                    </small>
                    <br/>
                    總監控數: 
                    <a href="" style="font-size:14pt; color:#6c757d">467</a>
                  </div-->
                </div>
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-sm-3 col-6">
                    <div class="description-block text-center border-end">
                      <span class="description-percentage text-success"
                        ><i class="bi bi-arrow-up"></i> 1%</span
                      >
                      <h5 class="description-header text-danger" style="font-size: 18px">
                        17<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-exclamation-circle-fill" style="color: #dc3545"></i
                        >異常數</span
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
                        128<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-exclamation-triangle-fill" style="color: #ffc107"></i>不告警數</span
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
                        332<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text"
                        ><i class="bi bi-check" style="color: #28a745"
                          ><span class="btn-tool"></span></i
                        >正常數</span
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
                        467<small class="text-dark mr-1">件</small>
                      </h5>
                      <span class="description-text">總監控數</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-footer -->
            </div>
          </div>
          <div class="col-md-6 card-group">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title">國內骨幹電路狀態監控歷史統計</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body p-0">
                  <div class="row text-end">
                    <div class="form-group col-sm-3">
                    </div>
                    <div class="form-group col-sm-3">
                    </div>
                    <div class="form-group col-sm-6">
                        <div class="row">
                        <div class="col-sm-7 text-end">
                          <select class="form-select">
                          <option>過去30分鐘</option>
                          <option>過去1小時</option>
                          <option>過去3小時</option>
                          <option>過去6小時</option>
                          </select>
                        </div>
                        <div class="col-sm-5 text-start">
                        <input class="form-check-input" type="checkbox" name="checkboxes" id="checkboxes-0" value="1" checked>
                        <label class="col-md-8 checkbox-inline" for="checkboxes-0">
                        與過去比較
                        </label>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 float-left mt-4">
                      <v-chart class="chart-20"  ref="pie" :option="option2" autoresize />
                    </div>
                  </div>
              </div>
               <!-- /.card-body -->
              <!--div class="card-footer">
                <div class="row"></div>
              </div-->
               <!-- /.card-footer -->
            </div>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-title">國內骨幹電路狀態</h3>
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
                        <th style="width: 10px"></th>
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
                      <tr class="align-middle" v-for="(item, key) in searchForm.results.grid" :key="key">
                        <td v-if="item.warnLevel =='danger'" style="background-color: rgba(248, 215, 218, 0.8);"> 
                          <i
                          class="icon bi bi-exclamation-circle-fill"
                          style="font-size: 20px; color: #dc3545"></i></td>
                        <td v-if="item.warnLevel =='warning'" style="background-color: rgba(255, 243, 205, 0.8);"> 
                          <i
                          class="icon bi bi-exclamation-triangle-fill"
                          style="font-size: 20px; color: #ffc107"></i></td>
                        <td v-if="item.warnLevel =='normal'" style="background-color: rgba(212, 237, 218, 0.8);"> 
                          <i
                          class="icon bi bi-check"
                          style="font-size: 20px; color: #28a745"></i></td>
                        <td v-if="item.warnLevel =='danger'" style="background-color: rgba(248, 215, 218, 0.8);"> 
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        <td v-if="item.warnLevel =='warning'" style="background-color: rgba(255, 243, 205, 0.8);"> 
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        <td v-if="item.warnLevel =='normal'" style="background-color: rgba(212, 237, 218, 0.8);"> 
                          {{ (searchForm.results.number * searchForm.results.size) + key + 1 }}</td>
                        
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
                <network-pagination portal :data="searchForm.results" @page="search" :sizeOptions="searchForm.results.sizeOptions"/>
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
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent 
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, reactive, onMounted } from 'vue';
import NetworkPagination from "@/components/network-pagination.vue"

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  LineChart,
  GridComponent 
]);

provide(THEME_KEY, 'light');

const option0 = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    //orient: 'vertical',
    //top: 'top',
    //top: '3%',
    //left: 'left',
    //data: ['正常數', '異常數', '不告警數'],
  },
  series: [
    {
      name: '國內骨幹電路狀態',
      type: 'pie',
      radius: ['30%', '60%'],
      center: ['50%', '60%'],
      startAngle: 0,
      endAngle: 360,
      data: [
        { value: 17, name: '異常數', },
        { value: 128, name: '不告警數' },
        { value: 322, name: '正常數' },
      ],
      label: {
            show: true,
            formatter: "{c}({d}%)", // {b} represents name, {c} represents value {d} represents percent
            position: "inside", // You can adjust the position of the labels
            fontSize: 10,
            textStyle: {
              color: '#000'
            },
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      color: ['rgba(241, 69, 69, 0.6)','rgba(247, 207, 7, 0.8)','rgba(0, 165, 114, 0.6)'],
    },
  ],
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'top',
    feature: {
      saveAsImage: { show: false },
    }
  },
});
const option1 = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    //orient: 'vertical',
    //top: 'top',
    //top: '3%',
    //left: 'left',
    //data: ['正常數', '異常數', '不告警數'],
  },
  series: [
    {
      name: '國內骨幹電路狀態',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      data: [
        { value: 17, name: '異常數', },
        { value: 128, name: '不告警數' },
        { value: 322, name: '正常數' },
      ],
      label: {
            show: true,
            formatter: "{c}({d}%)", // {b} represents name, {c} represents value {d} represents percent
            position: "inside", // You can adjust the position of the labels
            fontSize: 15,
            textStyle: {
              color: '#000'
            },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      color: ['rgba(241, 69, 69, 0.6)','rgba(247, 207, 7, 0.8)','rgba(0, 165, 114, 0.6)'],
    },
  ],
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'top',
    feature: {
      saveAsImage: { show: false },
    }
  },
});
const option2 = ref({
  /*
  title: {
    text: 'Stacked Line'
  },
  */
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['正常數', '異常數', '不告警數']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'top',
    feature: {
      saveAsImage: { show: false },
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30'],
    axisLabel: {
      show: true,
      textStyle: {
              color: '#000'
            },
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '正常數',
      type: 'line',
      //stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 322],
      //areaStyle: {color: 'rgba(0, 165, 114, 0.6)'},
      lineStyle: {color: 'rgba(0, 165, 114, 0.6)'},
      itemStyle: {color: 'rgba(0, 165, 114, 0.6)'},
      //itemStyle: {normal: {areaStyle: {type: 'default'}}},
      label: {
        show: true,
        position: 'top',
      }
    },
    {
      name: '異常數',
      type: 'line',
      //stack: 'Total',
      data: [21, 16, 12, 20, 10, 15, 17],
      //areaStyle: {color: 'rgba(241, 69, 69, 0.6)'},
      lineStyle: {color: 'rgba(241, 69, 69, 0.6)'},
      itemStyle: {color: 'rgba(241, 69, 69, 0.6)'},
      label: {
        show: true,
        position: 'top',
      }
      //itemStyle: {normal: {areaStyle: {type: 'default'}}},
    },
    {
      name: '不告警數',
      type: 'line',
      //stack: 'Total',
      data: [122, 102, 125, 110, 125, 120, 128],
      //areaStyle: {color: 'rgba(247, 207, 7, 0.8)'},
      lineStyle: {color: 'rgba(247, 207, 7, 0.8)'},
      itemStyle: {color: 'rgba(247, 207, 7, 0.8)'},
      label: {
        show: true,
        position: 'top',
      }
      //areaStyle: {},
    },
    
  ],
});

const searchForm = reactive<{
  filter: string | undefined;
  results: {} | undefined;
}>({
  filter: undefined,
  results: undefined,
});

search();
function search(page?: number, size?: number) {
  let data = {};
  let grid = [];
  grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'danger'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'normal'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'danger'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'normal'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'danger'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'warning'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'normal'
      });
      grid.push({
        equipmentId: "TWAREN-TP-ASR9006-01",
        equipmentName: "TWAREN-TP-ASR9006-01",
        equipmentInterface: "Te0/0/0/5.3",
        equipmentDescript: "INT#20_TWAREN-TP-ASR9006-01\nto CHI-4801l 10GE (2671UD80004)",
        checkDate: "2024-06-24 10:00:00",
        equipmentNetworkTrafficIn: "0.342(Mpbs)",
        equipmentNetworkTrafficOut: "0.421(Mpbs)",
        note: "N/A",
        warnLevel: 'warning'
      });
      data.sizeOptions= [10, 20, 50, 100]
      data.totalElements = 8
      data.totalPages = 30
      data.number = 15
      data.size = 10
      data.first= true
      data.last= false
      data.numberOfElements = 1
      data.empty = false
      searchForm.results = data
      searchForm.results.grid = grid
}

import { ODS302WApi, AlertReceiverApi } from '@/ts/openapi'
import { useEInvAxios } from "@/ts/container/axios-container";
import axios from 'axios';
const axios1 = useEInvAxios();
console.log(axios1)
const pet = ref(null);
const api = new ODS302WApi(undefined,'http://localhost:8081', axios1);

    console.log(api)
    //const response = await api.greeting();

    const api2 = new AlertReceiverApi(undefined,'http://localhost:8081', axios);
    api2.findAllRes2().then(({ data }) => {
      console.log(data)
    }).finally(() => {
     
    });
    

</script>


