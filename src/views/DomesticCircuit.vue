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
                src="@/assets/NCHCLogo.png"
                alt="NCHC Logo"
                class="brand-image img-circle elevation-3"
                width="30px"
                height="30px"
                style="opacity: 0.8"
              />{{ $t('dashboard.TWARENMonitoringBashboard') }}
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">國內骨幹流量</li>
            </ol>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row">
            <div class="col-md-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h3 class="card-title">Simple Full Width Table</h3>
                                    <div class="card-tools">
                                        <ul class="pagination pagination-sm float-end">
                                            <li class="page-item"> <a class="page-link" href="#">&laquo;</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">2</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">&raquo;</a> </li>
                                        </ul>
                                    </div>
                                </div> <!-- /.card-header -->
                                <div class="card-body p-0">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Task Task Task</th>
                                                <th>Progress</th>
                                                <th style="width: 40px">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="align-middle">
                                                <td>1.</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>Update software</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge text-bg-danger">55%</span></td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>2.</td>
                                                <td>Clean database</td>
                                                <td>Clean database</td>
                                                <td>Clean database</td>
                                                <td>Clean database</td>
                                                <td>Clean database</td>
                                                <td>Clean database</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar text-bg-warning" style="width: 70%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-warning">70%</span> </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>3.</td>
                                                <td>Cron job running</td>
                                                <td>Cron job running</td>
                                                <td>Cron job running Cron job running Cron job running</td>
                                                <td>Cron job running Cron job running Cron job running</td>
                                                <td>Cron job running Cron job running Cron job running</td>
                                                <td>Cron job running Cron job running Cron job running</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar text-bg-primary" style="width: 30%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-primary">30%</span> </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>4.</td>
                                                <td>Fix and squish bugs</td>
                                                <td>Fix and squish bugs</td>
                                                <td>Fix and squish bugs</td>
                                                <td>Fix and squish bugs</td>
                                                <td>Fix and squish bugs</td>
                                                <td>Fix and squish bugs Fix and squish bugs Fix and squish bugs</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar text-bg-success" style="width: 90%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-success">90%</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> <!-- /.card-body -->
                            </div> <!-- /.card -->
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h3 class="card-title">Striped Full Width Table</h3>
                                </div> <!-- /.card-header -->
                                <div class="card-body p-0">
                                    <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Task</th>
                                                <th>Progress</th>
                                                <th style="width: 40px">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody style="position: relative;max-height: 520px; max-width: 520px">
                                            <tr class="align-middle">
                                                <td>1.</td>
                                                <td>Update softwareaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge text-bg-danger">55%</span></td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>2.</td>
                                                <td>Clean database</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar text-bg-warning" style="width: 70%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-warning">70%</span> </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>3.</td>
                                                <td>Cron job running</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar text-bg-primary" style="width: 30%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-primary">30%</span> </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <td>4.</td>
                                                <td>Fix and squish bugs</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar text-bg-success" style="width: 90%"></div>
                                                    </div>
                                                </td>
                                                <td> <span class="badge text-bg-success">90%</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div> <!-- /.card-body -->
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
import { ref, onMounted, onUnmounted } from 'vue'


onMounted(() => {
  
})
</script>
