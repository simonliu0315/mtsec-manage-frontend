<style scoped lang="scss">
.graph {
  width: 1024px;
  height: 768px;
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
              <img src="/assets/NCHCLogo.png" alt="NCHC Logo" class="brand-image img-circle elevation-3" width="30px"
                height="30px" style="opacity: 0.8" />{{ $t('menu.topologyManage') }}
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
                <row class="col-md-12">
                  <div class="btn-toolbar m-3">
                    <div class="btn-group me-2">
                      <label>新增節點:</label>
                      <button class="btn btn-primary" @click="addMasterRouterNode">
                        <img src="/icons/router.svg" width="20px" height="20px">主節點Router</button>
                      <button class="btn btn-primary" @click="addRegionRouterNode">
                        <img src="/icons/router_purple.svg" width="20px" height="20px">區網Router</button>
                      <button class="btn btn-primary" @click="addSwitchNode">Switch</button>
                      <button class="btn btn-primary" @click="addHubNode">Hub</button>
                      <button class="btn btn-primary" @click="addBlackNode">ZZXZ</button>
                      <button class="btn btn-danger" :disabled="selectedNodes.length == 0"
                        @click="removeNode">移除</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>編輯連線:</label>
                      <button class="btn btn-secondary" :disabled="!isEdgeAddable()" @click="addNormalEdge">連線</button>
                      <button class="btn btn-danger" :disabled="selectedEdges.length == 0"
                        @click="removeEdge">移除</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>顯示紀錄:</label>
                      <button class="btn btn-secondary"
                        @click="showData">Show</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>下載圖檔:</label>
                      <button class="btn btn-info" @click="downloadAsSvg">
                        <download />Download SVG
                      </button>
                    </div>
                  </div>
                  <!--div>
                    {{edges}}<br/>
                    {{nodes}}<br/>
                    {{ layouts }}
                  </div-->
                  <div class="card-img"  alt="100%x768" style="background-color: rgba(173, 181, 189 , 0.1); height: 768px; width: 1024px; display: block;">
                    <v-network-graph ref="graph" :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs"
                      :layers="layers"
                      v-model:selected-nodes="selectedNodes"
                      v-model:selected-edges="selectedEdges"
                      :event-handlers="eventHandlers">
                      <!-- Use CSS to define references to external fonts. To use CSS within SVG, use <defs>. >
                      <defs>
                      <Cannot use <style> directly due to restrictions of Vue.>
                      <component is="style">
                        {{ base64Str.results }}
                      </component>
                      </defs-->
                      <template #edge-label="{ edgeId, edge, scale, ...slotProps }">
                        <!--v-edge-label :text="edgeId" align="center" vertical-align="below" v-bind="slotProps"/-->
                        <v-edge-label :text="`${traffics[edge.source][edge.target]} k`" align="source"
                          vertical-align="above" v-bind="slotProps" fill="#ff5500" :font-size="12 * scale" />
                        <v-edge-label :text="`${traffics[edge.target][edge.source]} k`" align="target"
                          vertical-align="above" v-bind="slotProps" fill="#ff5500" :font-size="12 * scale"/>
                      </template>
                      <template  #override-node="{ nodeId, scale, config, ...slotProps }">
                      <circle v-if="config.color" :r="config.radius * scale" :fill="config.color" v-bind="slotProps" />
                      <!-- Use v-html to interpret escape sequences for icon characters. -->
                      <!--text font-family="Material Icons" :font-size="22 * scale" fill="#ffffff" text-anchor="middle"
                        dominant-baseline="central" style="pointer-events: none" v-html="nodes[nodeId].icon" /-->
                      <!--text font-family="bootstrap-icons" :font-size="22 * scale" fill="#ffffff" text-anchor="middle"
                        dominant-baseline="central" style="pointer-events: none" v-html="nodes[nodeId].icon" /-->
                          <image :href="'/icons/' + nodes[nodeId].icon + '.svg'" :x="-14 * scale" :y="-13 * scale" :width="(nodes[nodeId].size + 10) * scale" :height="(nodes[nodeId].size + 10) * scale" />
                        <circle :cx="15 * scale" :cy="-18 * scale" :r="10 * scale" fill="red" />
                        <a xlink:href="https://www.example.com" target="_blank">
                          <text :x="15 * scale" :y="-18 * scale" text-anchor="middle" dominant-baseline="middle" fill="white" :font-size="14 * scale" style="pointer-events: auto">0</text>
                        </a>
                        
                      </template>
                      <template #worldmap>
                        <image href="/taiwanmap.png" x="0" y="0" @load="onLoadImage" height="768px" width="1024px"/>
                      </template>
                    </v-network-graph>
                  </div>
                  
                </row>
              </div> <!-- /.card-body -->
              <div class="card-footer bg-light">
              </div>
            </div> <!-- /.card -->
          </div> <!-- /.col -->
        </div>
      </div>
      <!--end::Container-->
    </div>
    <!--end::App Content Header-->
     <!--start::Modal -->
     <Modal title="新增節點" ref="nodeModal">
      <template #body>
        <div>
            <div class="form-group row">
                <label for="deviceName" class="col-sm-3 col-form-label">節點名稱</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" id="deviceName" placeholder="節點名稱" v-model="saveNode.name">
              </div>
            </div>
        </div>
      </template>
      <template #footer>
        <button class="btn btn-gray" @click="cancelNode()">取消</button>
        <button class="btn btn-primary" @click="editNode(saveNode.type)">確認</button>
      </template>
    </Modal>
    <!--end:: Modal-->
  </main>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"

import { defineConfigs } from "v-network-graph"
import type { Nodes, Edges, Layouts, Instance } from "v-network-graph"
import * as vNG from "v-network-graph"
import type { Layer } from "@fortawesome/fontawesome-svg-core";
import { defineConfig } from "vite";


const base64Str = reactive<{
  results: string | undefined;
}>({
  results: '',
});

async function urlToBase64() {
  try {
    //const response = await fetch('./fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2');
    const response = await fetch('./fonts/bootstrap-icons.woff');
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

interface Node extends vNG.Node {
  size: number
  color?: string
  label?: boolean
}

interface Edge extends vNG.Edge {
  width?: number
  color?: string
  dashed?: boolean
}


const nodes = reactive<Record<string, Node>>({
  //node1: { name: "Node 1", hue: 100, color: "#4466cc", icon: "&#xef5c", size: 20, label: true },
  //node1: { name: "主節點Router", hue: 100, color: "#4466cc", icon: "router", size: 20, label: true },
  node1: { name: "台北主節點", hue: 100, icon: "router", size: 20, label: true },
  
  node2: { name: "新竹主節點", hue: 320, icon: "router", size: 20, label: true },
  node3: { name: "台中主節點", hue: 320, icon: "router", size: 20, label: true },
  node4: { name: "台南主節點", hue: 320, icon: "router", size: 20, label: true },
})

const edges = reactive<Record<string, Edge>>({
  edge1: { source: "node1", target: "node2", dashed: false },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node2", target: "node4" },
})

const layouts = reactive<Layouts>({
  nodes: {
    node1: { x: 450, y: 100 },
    node2: { x: 300, y: 100 },
    node3: { x: 290, y: 250 },
    node4: { x: 180, y: 410 },
  },
});

// additional layers definition
const layers = {
  // {layername}: {position}
  worldmap: "base",
}

const configs = reactive(defineConfigs({
  view: { 
    fitContentMargin : {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
    },
    grid: {
    visible: true
  },
  },
  node: {
    selectable: true,
    normal: {
      type: "circle",
      radius: node => node.size, // Use the value of each node object
      color: node => node.color,
    },
    hover: {
      radius: node => node.size + 2,
      color: node => node.color,
    },
    label: {
      visible: node => !!node.label,
      directionAutoAdjustment: true,
      fontSize: 18,
      lineHeight: 1.0,
    },
  },
  edge: {
    selectable: true,
    normal: {
      //color: (edge) => `hsl(200), 50%, 50%`
      dasharray: edge => (edge.dashed ? "4" : "0"),
    },
    label: {
        fontFamily: undefined,
        fontSize: 11,
        lineHeight: 1.5,
        color: "#000000",
        margin: 6,
        padding: 10,
        background: {
          visible: true,
          color: "#ffffff",
          padding: {
            vertical: -2,
            horizontal: 6,
          },
          borderRadius: 6,
        },
      },
      gap: 20,
      type: "curve",
      margin: 6,
      marker: {
      target: {
        type: "none",
        width: 8,
        height: 8,
      },
    },
  },
}))


import Modal from "@/components/modal.vue";

let nodeModal= ref(null);

const saveNode = reactive<{
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
}>({
  id: undefined,
  name: undefined,
  type: undefined,
});



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

async function downloadAsSvg() {
  if (!graph.value) return
  const text = await graph.value.exportAsSvgText({embedImages:true})
  
  const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
  const a = document.createElement("a")
  a.href = url
  a.download = "network-graph.svg" // filename to download
  a.click()
  window.URL.revokeObjectURL(url)
}
// ref="graph"
const graph = ref<vNG.Instance>()

function onLoadImage() {
  console.log('onLoadImage', graph.value?.fitToContents());
  //graph.value?.fitToContents()
}

const nextNodeIndex = ref(Object.keys(nodes).length + 1)
const nextEdgeIndex = ref(Object.keys(edges).length + 1)
const selectedNodes = ref<string[]>([])
const selectedEdges = ref<string[]>([])

function isEdgeAddable() {
  return selectedNodes.value.length == 2
}
function cancelNode() {
  nodeModal.value.hide();
}
function addMasterRouterNode() {
  console.log('addMasterRouterNode')
  nodeModal.value.show();
  saveNode.type = 'router'
  //addNode({ size: 20, icon: "router" , label: true })
}
function editNode(type) {
  if (type == 'router') {
    addNode({ size: 20, icon: "router" , label: true })
  } else  if (type == 'regionRouter') {
    addNode({ size: 14, icon: "router_purple" , label: true })
  }
  cancelNode()
  saveNode.name = ''
  saveNode.type = ''
}
function addRegionRouterNode() {
  console.log('addRegionRouterNode')
  nodeModal.value.show();
  saveNode.type = 'regionRouter'
  //addNode({ size: 14, icon: "router_purple" , label: true })
}

function addSwitchNode() {
  console.log('addSwitchNode')
  addNode({ size: 18, icon: "switch" , label: true })
}
function addHubNode() {
  console.log('addHubNode')
  addNode({ size: 18, icon: "&#xF6EC" , label: true })
}


function addNormalEdge() {
  addEdge({ width: 3, color: "skyblue" })
}

function addNode(node: Omit<Node, "name">) {
  const nodeId = `node${nextNodeIndex.value}`
  //const name = `Node ${nextNodeIndex.value}`
  const name = saveNode.name
  console.log(nodeId, name)
  nodes[nodeId] = { name, ...node } as Node

  nextNodeIndex.value++
  layouts.nodes[nodeId] = {x : 100, y: 100}

}

function removeNode() {
  for (const nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }
}
function addEdge(edge: Omit<Edge, "source" | "target">) {
  if (selectedNodes.value.length !== 2) return
  const [source, target] = selectedNodes.value
  const edgeId = `edge${nextEdgeIndex.value}`
  edges[edgeId] = { source, target, ...edge } as Edge

  nextEdgeIndex.value++
  selectedNodes.value = []
  //node1: { node2: 0 },
  console.log(source, target)

  if (traffics[source] == undefined ) {
    traffics[source] = {}
  }
  traffics[source][target] = 0
  //addNodeN(traffics, source, )
  if (traffics[target] == undefined ) {
    traffics[target] = {}
  }
  traffics[target][source] = 0
  console.log(traffics)
}


function removeEdge() {
  for (const edgeId of selectedEdges.value) {
    delete edges[edgeId]
  }
}
function showData() {
  console.log(nodes)
  console.log(edges)
}
const eventHandlers: vNG.EventHandlers = {
  "node:click": ({ node }) => {
    console.log('on click', nodes[node])
    //check if it is parents. drill down the map

  },
}

</script>