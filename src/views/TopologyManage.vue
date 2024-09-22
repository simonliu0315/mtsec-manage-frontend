<style scoped lang="scss">
.graph {
  width: 800px;
  height: 600px;
  border: 1px solid #000;
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
              <img
                src="/assets/NCHCLogo.png"
                alt="NCHC Logo"
                class="brand-image img-circle elevation-3"
                width="30px"
                height="30px"
                style="opacity: 0.8"
              />{{ $t('menu.topologyManage') }}
            </h3>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ $t('menu.topologyManage') }}</li>
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
      <div class="container-fluid" style="height:500px">
<row>
    <v-network-graph
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  >
    <template #edge-label="{ edgeId, edge, scale, ...slotProps }">
      <v-edge-label
        :text="edgeId"
        align="center"
        vertical-align="below"
        v-bind="slotProps"
      />
      <v-edge-label
        :text="`${traffics[edge.source][edge.target]} k`"
        align="source"
        vertical-align="above"
        v-bind="slotProps"
        fill="#ff5500"
        :font-size="12 * scale"
      />
      <v-edge-label
        :text="`${traffics[edge.target][edge.source]} k`"
        align="target"
        vertical-align="above"
        v-bind="slotProps"
        fill="#ff5500"
        :font-size="12 * scale"
      />
    </template>
  </v-network-graph>
</row>
      
      </div>  
    </div>

  </main>
</template>
<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue"
  
import { Nodes, Edges, Layouts, defineConfigs } from "v-network-graph"


const nodes = {
  node1: { name: "Node 1", hue: 200 },
  node2: { name: "Node 2", hue: 320 },
  node3: { name: "Node 3", hue: 320 },
  node4: { name: "Node 4", hue: 320 },
}

const edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node2", target: "node4" },
}

const layouts = {
  nodes: {
    node1: { x: 0, y: 80 },
    node2: { x: 200, y: 80 },
    node3: { x: 360, y: 0 },
    node4: { x: 360, y: 160 },
  },
}

const configs = defineConfigs({
  node: {
    label: {
      visible: true,
    },
  },
  edge : {
    normal: {
        //color: (edge) => `hsl(200), 50%, 50%`
    }
  }
})

type TrafficData = Record<string, Record<string, number>>

const traffics = reactive<TrafficData>({
  node1: { node2: 0 },
  node2: { node1: 0, node3: 0, node4: 0 },
  node3: { node2: 0, node4: 0 },
  node4: { node2: 0, node3: 0 },
})

let timerId: any = null
onMounted(() => {
  // generate random numbers
  timerId = setInterval(() => {
    for (const t of Object.values(traffics)) {
      for (const key of Object.keys(t)) {
        t[key] = Math.round(Math.random() * 1000)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})

</script>