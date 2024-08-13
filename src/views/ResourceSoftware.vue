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
              <img
                src="@/assets/EduLogo.png"
                alt="NCHC Logo"
                class="brand-image img-circle elevation-3"
                width="30px"
                height="30px"
                style="opacity: 0.8"
              />TANet監控儀錶板
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">TANet監控儀錶板</li>
            </ol>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content Header-->
    <!--begin::App Content-->
    <div class="app-content">
      <!--begin::Container-->
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="callout callout-warning" style="padding-top: 0rem; padding-bottom: 0rem">
              <h5>通知</h5>
              <p>
                <marquee width="100%" direction="up" height="30px" scrolldelay="200">
                  1. 設備維修通知-臺北主節點光設備進行更換，預估於2024/06/19
                  01:00進行維護，預估影響至2024/06/19 03:00，影響範圍台北區網<br />
                  2. 系統更版通知-整合式網管系統進行更版，預估於2024/06/19
                  01:00:00進行維護，預估影響至2024/06/19 03:00，影響範圍:客服人員
                </marquee>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Start col -->
          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">主節點/區網中心流量</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody></tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card-body -->
            </div>
          </div>
          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">截至今日尚未結案事件單</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-circle-fill"
                          style="font-size: 20px; color: #dc3545"
                        ></i>
                        <span class="btn-tool">15</span>
                      </th>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-triangle-fill"
                          style="font-size: 20px; color: #ffc107"
                        ></i>
                        <span class="btn-tool">56</span>
                      </th>
                      <th style="text-align: center">
                        <i class="icon bi bi-check" style="font-size: 20px; color: #28a745"></i>
                        <span class="btn-tool">30</span>
                      </th>
                    </tr>
                  </thead>
                </table>
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-circle-fill"
                            style="font-size: 20px; color: #dc3545"
                          ></i>
                        </td>
                        <!--td style="background-color: rgba(241, 69, 69, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-circle" style="color:#dc3545"></i><br/></td-->
                        <!--td style="background-color:#dc3545; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-circle" style="color:#fff"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">1130101-004</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">TWAREN-TN-ASR001-01</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue"
                              >[to TWAREN-AC-AS002-01] in 0 Mbps, out 0Mbps</span
                            >
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 10:05:01<br />
                          <div style="font-size: 14px; float: right">17hr 53min</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-circle-fill"
                            style="font-size: 20px; color: #dc3545"
                          ></i>
                        </td>
                        <!--td style="background-color: rgba(241, 69, 69, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-circle" style="color:#dc3545"></i><br/></td-->
                        <!--td style="background-color:#dc3545; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-circle" style="color:#fff"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">1130101-003</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">TWAREN-TN-ASR001-02</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue"
                              >[to TWAREN-AC-AS002-02] in 0 Mbps, out 0Mbps, in_high: 9000, in_low:
                              1e-05, in_avg:0</span
                            >
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 10:00:01<br />
                          <div style="font-size: 14px; float: right">17hr 48min</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-triangle-fill"
                            style="font-size: 20px; color: #ffc107"
                          ></i>
                        </td>
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-triangle" style="color:#ffc107"></i><br/></td-->
                        <!--td style="background-color:#ffc107; text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-triangle" style="color:#fff"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">1130101-002</span><br />
                          類別 <span style="color: dodgerblue">InterfacesPort </span>設備/單位
                          <span style="color: dodgerblue">TWAREN-TN-ASR001-02</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue"
                              >Backbone Circuit Interface(Bundle-Ether2) Abnormal (to
                              TWAREN-NIU-ASR9010-01)</span
                            >
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 09:55:01<br />
                          <div style="font-size: 14px; float: right">17hr 43min</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-circle-fill"
                            style="font-size: 20px; color: #dc3545"
                          ></i>
                        </td>
                        <!--td style="background-color: rgba(241, 69, 69, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-circle" style="color:#dc3545"></i><br/></td-->
                        <!--td style="background-color:#dc3545; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-circle" style="color:#fff"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">1130101-001</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">TWAREN-TN-ASR001-01</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue"
                              >[to TWAREN-AC-AS002-01] in 0 Mbps, out 0Mbps</span
                            >
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 09:50:01<br />
                          <div style="font-size: 14px; float: right">17hr 33min</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 card-deck connectedSortable">
            <!-- /.card 1 -->
            <div class="card card-info" style="margin-bottom: 10px">
              <div class="card-header bg-white">
                <h3 class="card-title">外部監控事件告警列表</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-maximize">
                    <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                    <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                    <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-circle-fill"
                          style="font-size: 20px; color: #dc3545"
                        ></i
                        ><span class="btn-tool">1</span>
                      </th>
                      <th style="text-align: center">
                        <i
                          class="icon bi bi-exclamation-triangle-fill"
                          style="font-size: 20px; color: #ffc107"
                        ></i
                        ><span class="btn-tool">3</span>
                      </th>
                      <th style="text-align: center">
                        <i class="icon bi bi-check" style="font-size: 20px; color: #28a745"></i
                        ><span class="btn-tool">0</span>
                      </th>
                    </tr>
                  </thead>
                </table>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-triangle-fill"
                            style="font-size: 20px; color: #ffc107"
                          ></i>
                        </td>
                        <!--td style="background-color:#ffc107; text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-triangle" style="color:#fff"></i><br/></td-->
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem;"><i class="icon fas fa-exclamation-triangle" style="color:#ffc107"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">O1130104-001</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">Big Data Platform</span><br />
                          <div style="font-size: 14px">
                            描述
                            <span style="color: dodgerblue">大數據資料平台連線Mail伺服器失敗</span>
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 22:05:01<br />
                          <div style="font-size: 14px; float: right">10hr 53min</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-circle-fill"
                            style="font-size: 20px; color: #dc3545"
                          ></i>
                        </td>
                        <!--td style="background-color:#dc3545; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-circle" style="color:#fff"></i><br/></td-->
                        <!--td style="background-color: rgba(241, 69, 69, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem;"><i class="icon fas fa-exclamation-circle" style="color:#dc3545"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">O1130104-002</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">Big Data Platform</span><br />
                          <div style="font-size: 14px">
                            描述 <span style="color: dodgerblue">大數據資料平台連線失敗</span>
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 22:05:01<br />
                          <div style="font-size: 14px; float: right">10hr 53min</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i
                            class="icon bi bi-exclamation-triangle-fill"
                            style="font-size: 20px; color: #ffc107"
                          ></i>
                        </td>
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-triangle" style="color:#fff"></i><br/></td-->
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem;"><i class="icon fas fa-exclamation-triangle" style="color:#ffc107"></i><br/></td-->
                        <td>
                          事件編號 <span style="color: dodgerblue">O1130104-003</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">Mail Server</span><br />
                          <div style="font-size: 14px">
                            描述 <span style="color: dodgerblue">Ping Mail 伺服器失敗</span>
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 22:05:01<br />
                          <div style="font-size: 14px; float: right">10hr 53min</div>
                        </td>
                      </tr>
                      <tr>
                        <!--td style="background-color:#ffc107; text-align: center; vertical-align: middle;"><i class="icon fas fa-exclamation-triangle" style="color:#fff"></i><br/></td-->
                        <!--td style="background-color: rgba(247, 207, 7, 0.6); text-align: center; vertical-align: middle;padding-left:-0.5 rem"><i class="icon fas fa-exclamation-triangle" style="color:#ffc107"></i><br/></td-->
                        <td
                          style="text-align: center; vertical-align: middle; padding-left: 0.75rem"
                        >
                          <i class="icon bi bi-check" style="font-size: 20px; color: #28a745"></i>
                        </td>
                        <td>
                          事件編號 <span style="color: dodgerblue">O1130104-004</span><br />
                          類別 <span style="color: dodgerblue">Traffic </span>設備/單位
                          <span style="color: dodgerblue">Mail Server</span><br />
                          <div style="font-size: 14px">
                            描述 <span style="color: dodgerblue">Ping Mail 伺服器失敗 </span>
                          </div>
                        </td>
                        <td style="font-size: 14px; float: right">
                          2024/06/14 22:05:01<br />
                          <div style="font-size: 14px; float: right">10hr 53min</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card-body -->
            </div>
          </div>
        </div>
        <!-- /.row (main row) -->
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content-->
  </main>
  <!--end::App Main-->
</template>
<script setup lang="ts">
</script>
