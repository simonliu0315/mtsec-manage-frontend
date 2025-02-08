<style scoped lang="scss">

.image-container {
  display: flex;
  align-items: center;
}

.image-wrapper {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.endpoint {
  text-align: center;
  position: relative; /* 為 top-label 定位 */
}

.connector {
  height: 2px;
  background-color: black;
  flex-grow: 1;
}

.top-label, .bottom-label, .left-label, .right-label {
  position: absolute;
}

.top-label {
  top: -20px;
}

.bottom-label {
  bottom: 30%;
}

.left-label {
  left: 15%;
  top: 40px;
  transform: translateY(-50%);
}

.right-label {
  right: 15%;
  top: 40px;
  transform: translateY(-50%);
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
                  <button class="btn btn-primary" @click="saveAll()">儲存</button>
                  <button class="btn btn-primary" @click="backQuery()">回拓樸圖查詢</button>
                </row>
                <row class="col-md-12">
                  <div class="col-md-6 form-group row">
                    <label for="name" class="col-sm-3 col-form-label">名稱</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="name" placeholder="名稱" v-model="saveForm.name">
                    </div>
                  </div>
                </row>
                <row class="col-md-12">
                  <div class="btn-toolbar m-3">
                    <div class="btn-group me-2">
                      <label>新增節點:</label>
                      <button class="btn btn-primary" :disabled="selectedNodes.length > 0" @click="addMasterRouterNode">
                        <img src="/icons/router.svg" width="20px" height="20px" />主節點Router</button>
                      <button class="btn btn-primary" :disabled="selectedNodes.length > 0" @click="addRegionRouterNode">
                        <img src="/icons/router_purple.svg" width="20px" height="20px" />區網Router</button>
                      <button class="btn btn-primary" :disabled="selectedNodes.length > 0" @click="addSwitchNode">
                        <img src="/icons/switch.svg" width="20px" height="20px">Switch</button>
                      <button class="btn btn-primary" :disabled="selectedNodes.length > 0"
                        @click="addHubNode">Hub</button>
                      <button class="btn btn-primary" :disabled="selectedNodes.length > 0"
                        @click="addBlackNode">子拓樸</button>
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
                      <button class="btn btn-secondary" @click="showData">Show</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>下載圖檔:</label>
                      <button class="btn btn-info" @click="downloadAsSvg">
                        <download />Download SVG
                      </button>
                    </div>
                  </div>
                  <div class="btn-toolbar m-3">
                    <div class="btn-group me-2">
                      <label>編輯節點:</label>
                      <button class="btn btn-secondary" :disabled="!isNodeEditable()" @click="editNode">編輯</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>關閉流量:</label>
                      <button class="btn btn-secondary" @click="disableTraffic">關閉</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>開啟流量:</label>
                      <button class="btn btn-secondary" @click="openTraffic">開啟</button>
                    </div>
                    <div class="btn-group me-2">
                      <label>背景圖上傳:</label>
                      <input type="file" ref="fileInput" style="display: none;" @change="handleFileSelect">
                      <button class="btn btn-secondary" @click="$refs.fileInput.click()">選擇檔案</button>
                      <input type="number" v-model="otherForm.width" placeholder="請輸入寬度">%
                      <input type="number" v-model="otherForm.height" placeholder="請輸入高度">%
                      <button class="btn btn-secondary" :disabled="!otherForm.selectedFile" @click="handleFileUpload">上傳</button>
                    </div>
                    
                  </div>
                  <!--div>
                    {{edges}}<br/>
                    {{nodes}}<br/>
                    {{ layouts }}
                  </div-->
                  <div class="card-img" alt="1024x768"
                    style="background-color: rgba(173, 181, 189 , 0.1); width: 1024px; height: 768px; display: block;">
                    <v-network-graph ref="graph" :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs"
                      :layers="layers" v-model:selected-nodes="selectedNodes" v-model:selected-edges="selectedEdges"
                      :event-handlers="eventHandlers">
                      <!-- Use CSS to define references to external fonts. To use CSS within SVG, use <defs>. >
                      <defs>
                      <Cannot use <style> directly due to restrictions of Vue.>
                      <component is="style">
                        {{ base64Str.results }}
                      </component>
                      </defs-->
                      <template v-if="otherForm.isTraffic" #edge-label="{ edgeId, edge, scale, ...slotProps }">
                        <!--v-edge-label :text="edgeId" align="center" vertical-align="below" v-bind="slotProps"/-->
                        <v-edge-label :text="`${traffics[edge.source][edge.target]} k`" align="source"
                          vertical-align="above" v-bind="slotProps" fill="#ff5500" :font-size="12 * scale" />
                        <v-edge-label :text="`${traffics[edge.target][edge.source]} k`" align="target"
                          vertical-align="above" v-bind="slotProps" fill="#ff5500" :font-size="12 * scale" />
                      </template>
                      <template #override-node="{ nodeId, scale, config, ...slotProps }">
                        <circle v-if="config.color" :r="config.radius * scale" :fill="config.color"
                          v-bind="slotProps" />
                        <!-- Use v-html to interpret escape sequences for icon characters. -->
                        <!--text font-family="Material Icons" :font-size="22 * scale" fill="#ffffff" text-anchor="middle"
                        dominant-baseline="central" style="pointer-events: none" v-html="nodes[nodeId].icon" /-->
                        <!--text font-family="bootstrap-icons" :font-size="22 * scale" fill="#ffffff" text-anchor="middle"
                        dominant-baseline="central" style="pointer-events: none" v-html="nodes[nodeId].icon" /-->
                        <image :href="'/icons/' + nodes[nodeId].icon + '.svg'" :x="-14 * scale" :y="-13 * scale"
                          :width="(nodes[nodeId].size + 10) * scale" :height="(nodes[nodeId].size + 10) * scale" />
                        <circle :cx="15 * scale" :cy="-18 * scale" :r="10 * scale" fill="red" />
                        <a xlink:href="https://www.example.com" target="_blank">
                          <text :x="15 * scale" :y="-18 * scale" text-anchor="middle" dominant-baseline="middle"
                            fill="white" :font-size="14 * scale" style="pointer-events: auto">0</text>
                        </a>

                      </template>
                      <template #worldmap>
                        <image v-if=" searchForm.results != undefined && searchForm.results.backgroundImage != undefined" :href="searchForm.image" x="0" y="0" @load="onLoadImage" :height="searchForm.results.backgroundImageHeight" />
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
            <label for="deviceName" class="col-sm-3 col-form-label">來源</label>
            <div class="col-sm-9">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="attribute" id="on" autocomplete="off" value="1"
                  v-model="saveNode.attribute" checked>
                <label class="btn btn-outline-primary" for="on">已納管</label>
                <input type="radio" class="btn-check" name="attribute" id="off" autocomplete="off" value="2"
                  v-model="saveNode.attribute">
                <label class="btn btn-outline-primary" for="off">自訂</label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="deviceName" class="col-sm-3 col-form-label"></label>
          </div>
          <div class="form-group row" v-show="saveNode.attribute == '1'">
            <label for="deviceName" class="col-sm-3 col-form-label">類別</label>
            <div class="col-sm-9">
              <select v-model="saveNode.deviceType">
                <option value="switch">交換器</option>
                <option value="router">路由器</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="saveNode.attribute == '1'">
            <label for="deviceName" class="col-sm-3 col-form-label">位置</label>
            <div class="col-sm-9">
              <select v-model="saveNode.location">
                <option value="taipei">台北</option>
                <option value="taichong">台中</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="saveNode.attribute == '1'">
            <label for="deviceName" class="col-sm-3 col-form-label">設備名稱</label>
            <div class="col-sm-9">
              <select v-model="saveNode.name">
                <option v-for="device in searchForm.devices" :key="device.id" :value="device.deviceName">{{
                  device.deviceName + ' (' + device.manageIp + ')'}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="saveNode.attribute == '2'">
            <label for="nodeName" class="col-sm-3 col-form-label">節點名稱</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="nodeName" placeholder="節點名稱" v-model="saveNode.name" />
            </div>
          </div>
          <input type="text" class="form-control" hidden id="nodeId" v-model="saveNode.id" />
        </div>
      </template>
      <template #footer>
        <button class="btn btn-gray" @click="cancelNode()">取消</button>
        <button class="btn btn-primary" @click="newNode(saveNode.type)">確認</button>
      </template>
    </Modal>
    <Modal title="編輯節點" ref="editNodeModal">
      <template #body>
        <div>
          <div class="form-group row">
            <label for="deviceName" class="col-sm-3 col-form-label">來源</label>
          </div>
          <div class="form-group row">
            <label for="deviceName" class="col-sm-3 col-form-label">節點名稱</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="deviceName" placeholder="節點名稱" v-model="saveNode.name" />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <button class="btn btn-gray" @click="cancelNode()">取消</button>
        <button class="btn btn-primary" @click="saveEditNode()">確認</button>
      </template>
    </Modal>
    <Modal title="建立連線" ref="editEdgeModal" modalHeight="300px" modalWidth="150%">
      <template #body>
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <div class="image-wrapper">
                <img v-if="saveEdge.sourceNode" :src="'/icons/' + saveEdge.sourceNode.icon + '.svg'"
                  width="34.977491260251476" height="34.977491260251476"></img>
                <p  style="margin-bottom:0rem" v-if="saveEdge.sourceNode">{{ saveEdge.sourceNode.name }}</p>
                <p  style="margin-bottom:0rem" v-if="searchForm.sourceNodeData">{{ searchForm.sourceNodeData.manageIp }}</p>
              </div>
              <div class="connector">
                <span class="left-label">介面頻寬：{{ sourceNode.interface ? sourceNode.interface.ifSpeedNm : '' }}</span>
                <span class="right-label">介面頻寬：{{ targetNode.interface ? targetNode.interface.ifSpeedNm : '' }}</span>
              </div>
              <div class="image-wrapper">
                <img v-if="saveEdge.targetNode" :src="'/icons/' + saveEdge.targetNode.icon + '.svg'"
                  width="34.977491260251476" height="34.977491260251476"></img>
                <p style="margin-bottom:0rem" v-if="saveEdge.targetNode">{{ saveEdge.targetNode.name }}</p>
                <p  style="margin-bottom:0rem" v-if="searchForm.targetNodeData">{{ searchForm.targetNodeData.manageIp }}</p>
              </div>
            </div>
            <div class="text-center">
              <span class="bandwidth">100MB</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 border">
            <div class="form-group">
              <label for="nodeName1">節點名稱</label>
              {{ saveEdge.sourceNode == undefined ? '' : saveEdge.sourceNode.name }}
            </div>
            <label for="port1">連接埠</label>
            <select v-model="sourceNode.interface">
              <option v-for="sourceInterface in sourceNode.interfaces" :key="sourceInterface.ifIndex"
                :value="sourceInterface">{{
                sourceInterface.ifDescr + '( 頻寬:' + sourceInterface.ifSpeedNm + ')' }}</option>
            </select>
          </div>
          <div class="col-6 border">
            <div class="form-group">
              <label for="nodeName1">節點名稱</label>
              {{ saveEdge.targetNode == undefined ? '' : saveEdge.targetNode.name }}
            </div>
            <label for="port1">連接埠</label>
            <select v-model="targetNode.interface">
              <option v-for="targetInterface in targetNode.interfaces" :key="targetInterface.ifIndex"
                :value="targetInterface">{{
                targetInterface.ifDescr + '( 頻寬:' + targetInterface.ifSpeedNm + ')' }}</option>
            </select>
          </div>
        </div>
      </template>
      <template #footer>
        <button class="btn btn-gray" @click="cancelEdge()">取消</button>
        <button class="btn btn-primary" @click="saveEditEdge()">確認</button>
      </template>
    </Modal>
    <!--end:: Modal-->
  </main>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, watch, computed } from "vue"

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

const otherForm = reactive<{
  isTraffic: boolean | undefined;
  width: number | 0;
  height : number | 0;
  selectedFile : object | undefined;
}>({
  isTraffic: true,
  width: 100,
  height: 100,
  selectedFile: undefined
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
  id: string
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
  
  //node1: { id:"1", name: "台北主節點", hue: 100, icon: "router", size: 20, label: true },
  //node2: { id:"2", name: "新竹主節點", hue: 320, icon: "router", size: 20, label: true },
  //node3: { id:"3", name: "台中主節點", hue: 320, icon: "router", size: 20, label: true },
  //node4: { id:"4", name: "台南主節點", hue: 320, icon: "router", size: 20, label: true }
})

const edges = reactive<Record<string, Edge>>({
  //edge1: { source: "node1", target: "node2", dashed: false },
  //edge2: { source: "node2", target: "node3" },
  //edge3: { source: "node2", target: "node4" }
})

const layouts = reactive<Layouts>({
  nodes: {
    //node1: { x: 450, y: 100 },
    //node2: { x: 300, y: 100 },
    //node3: { x: 290, y: 250 },
    //node4: { x: 180, y: 410 }
  },
});

// additional layers definition
const layers = {
  // {layername}: {position}
  worldmap: "base",
}

const configs = reactive(defineConfigs({
  view: { 
    panEnabled: false,
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
let editNodeModal = ref(null);
let editEdgeModal = ref(null);

const saveNode = reactive<{
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
  node : object | undefined;
  attribute: string | undefined;
  deviceType: string | undefined;
  location: string | undefined;
}>({
  id: undefined,
  name: undefined,
  type: undefined,
  node: undefined,
  attribute: '1',
  deviceType: undefined,
  location: undefined,
});

const saveEdge = reactive<{
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
  sourceNode : object | undefined;
  targetNode : object | undefined;
}>({
  id: undefined,
  name: undefined,
  type: undefined,
  sourceNode: undefined,
  targetNode: undefined
});


type TrafficData = Record<string, Record<string, number>>

const traffics = reactive<TrafficData>({
  node1: { node2: 0 },
  node2: { node1: 0, node3: 0, node4: 0 },
  node3: { node2: 0, node4: 0 },
  node4: { node2: 0, node3: 0 }
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
  //search()
})

onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})

watch(
 () => saveNode.name,
  (newValue) => {
      // 當選項改變時，更新 input 的值
      console.log("watch ====>", newValue)
      if (searchForm.devices != undefined) {
        console.log("watch ====>", searchForm.devices.find(device => device.deviceName === newValue))
        var device = searchForm.devices.find(device => device.deviceName === newValue)
        if (device != undefined) {
          saveNode.id = device.id
        }
          
      } 
  }
)


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

let nextNodeIndex = ref(Object.keys(nodes).length + 1)
let nextEdgeIndex = ref(Object.keys(edges).length + 1)
const selectedNodes = ref<string[]>([])
const selectedEdges = ref<string[]>([])

const sourceNode = reactive<{
  interface: object | undefined
  interfaces: object | undefined
}>({
  interface: undefined,
  interfaces: undefined
});

const targetNode = reactive<{
  interface: object | undefined
  interfaces: object | undefined
}>({
  interface: undefined,
  interfaces: undefined
});

function isEdgeAddable() {
  return selectedNodes.value.length == 2
}
function isNodeEditable() {
  return selectedNodes.value.length == 1
}
function cancelNode() {
  nodeModal.value.hide();
}
function addMasterRouterNode() {
  console.log('addMasterRouterNode')
  saveNode.deviceType=''
  saveNode.location=''
  nodeModal.value.show();
  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findTopologyMaintenanceInventoryList(saveNode).then(({ data }) => {
    console.log("---->", data)
    searchForm.devices = data.inventories;
  });
  saveNode.name = ''
  saveNode.type = 'router'
  //addNode({ size: 20, icon: "router" , label: true })
}
function newNode(type) {
    if (type == 'router') {
      addNode({ size: 20, icon: "router" , label: true })
    } else  if (type == 'regionRouter') {
      addNode({ size: 14, icon: "router_purple" , label: true })
    }
    cancelNode()
    saveNode.type = ''
}
function addRegionRouterNode() {
  console.log('addRegionRouterNode')
  nodeModal.value.show();
  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findTopologyMaintenanceInventoryList(saveNode).then(({ data }) => {
    console.log("---->", data)
    searchForm.devices = data.inventories;
  });
  saveNode.name = ''
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
  editEdgeModal.value.show();
  const [source, target] = selectedNodes.value
  console.log("selectedNodes", nodes[source], nodes[target])
  saveEdge.sourceNode = nodes[source]
  saveEdge.targetNode = nodes[target]

  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findTopologyMaintenanceInventoryInterfaceList({deviceName: saveEdge.sourceNode.name}).then(({ data }) => {
    console.log("source interfaces--->", data)
    sourceNode.interfaces = data.interfaces
  });
  api.findTopologyMaintenanceInventoryOne({deviceName: saveEdge.sourceNode.name}).then(({ data }) => {
    console.log("source interfaces--->", data)
    if (data.inventories != undefined && data.inventories.length > 0) {
      searchForm.sourceNodeData = data.inventories[0]
    }
  });
  

  api.findTopologyMaintenanceInventoryInterfaceList({deviceName: saveEdge.targetNode.name}).then(({ data }) => {
    targetNode.interfaces = data.interfaces
  });

  api.findTopologyMaintenanceInventoryOne({deviceName: saveEdge.targetNode.name}).then(({ data }) => {
    console.log("source interfaces--->", data)
    if (data.inventories != undefined && data.inventories.length > 0) {
      searchForm.targetNodeData = data.inventories[0]
    }
    
  });
  //addEdge({ width: 3, color: "skyblue" })
}

function addNode(node: Omit<Node, "name">) {
  //nextNodeIndex = ref(Object.keys(nodes).length + 1)
  nextNodeIndex = ref(new Date().getTime())
  const nodeId = `node${nextNodeIndex.value}`
  //const name = `Node ${nextNodeIndex.value}`
  const name = saveNode.name
  const id = saveNode.id
  console.log(nodeId, name, id)
  nodes[nodeId] = { name, id, ...node } as Node

  nextNodeIndex.value++
  layouts.nodes[nodeId] = {x : 100, y: 100}
}

function editNode() {
  editNodeModal.value.show();
  saveNode.name = saveNode.node.name
  saveNode.id = saveNode.node.id  
}
function saveEditNode() {
  saveNode.node.name = saveNode.name  
  saveNode.node.id = saveNode.id  
  editNodeModal.value.hide();
}
function removeNode() {
  for (const nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }
}
function saveEditEdge(edge: Omit<Edge, "source" | "target">) {
  if (selectedNodes.value.length !== 2) return

  
  //nextEdgeIndex = ref(Object.keys(edges).length + 1)
  nextEdgeIndex = ref(new Date().getTime())
  console.log('nextEdgeIndex:', nextEdgeIndex)
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
  console.log("-----------showData----------")
  console.log(nodes)
  console.log(edges)
}
const eventHandlers: vNG.EventHandlers = {
  "node:click": ({ node }) => {
    console.log('node on click', nodes[node])
    //check if it is parents. drill down the map    
    saveNode.node = nodes[node]
  },
  "edge:click": ({ edge }) => {
    console.log('edge on click', edge)
    //check if it is parents. drill down the map    
   
  },
}

import { TopologyMaintenanceApi } from 'mtsec-manage-client'
import { useNetworkAxios } from "@/ts/container/axios-container";
const axios = useNetworkAxios();
const VITE_NETWORK_API_URL = import.meta.env.VITE_NETWORK_API_URL;

const searchForm = reactive<{
  id: string | undefined;
  results: object | undefined;
  devices: object | undefined;
  sourceNode: object | undefined;
  sourceNodeData: object | undefined;
  targetNode: object | undefined;
  targetNodeData: object | undefined;
  image: object | undefined;
}>({
  id: undefined,
  results: undefined,
  devices: undefined,
  sourceNode: undefined,
  targetNode: undefined,
  sourceNodeData: undefined,
  targetNodeData: undefined,
  image: undefined
});

search()

function search() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  searchForm.id = id
  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.findTopologyMaintenanceOneTopology(searchForm).then(({ data }) => {
      console.log('findTopologyMaintenanceOneTopology:',data)
      searchForm.results =  data.topologyDto;
      console.log(data.topologyDto?.name)
      saveForm.name = data.topologyDto?.name
      //Object.assign(configs, JSON.parse(data.topologyDto?.configs))
      Object.assign(nodes, JSON.parse(data.topologyDto?.nodes))
      Object.assign(layouts, JSON.parse(data.topologyDto?.layouts))
      Object.assign(edges, JSON.parse(data.topologyDto?.edges))
      console.log(edges)
      const edgeIds = Object.keys(edges);
      edgeIds.forEach(edgeId => {
        const edge = edges[edgeId];
        if (traffics[edge.source] == undefined) {
          traffics[edge.source] = {}
        }
        traffics[edge.source][edge.target] = 0
        if (traffics[edge.target] == undefined) {
          traffics[edge.target] = {}
        }
        traffics[edge.target][edge.source] = 0
      });

      api.getImage(searchForm.results.backgroundImage).then(({ data })=> {
        console.log("AAAAAAAAAAAAAAAAAA ",typeof data)
        console.log("AAAAAAAAAAAAAAAAAA ",data)
        //searchForm.image = URL.createObjectURL(new Blob([data], { type: "image/jpeg" }))
        searchForm.image = "data:image/jpeg;base64,"+data
        //const base64data = blobToData(data);
        //searchForm.image = base64data

      });
      //console.log(typeof api.getImage(searchForm.results.backgroundImage))
      //api.getImage(searchForm.results.backgroundImage)
      
      /*
      for (const edgeId in edges) {
        const edge = edges[edgeId];
        if (traffics[edge.source] == undefined) {
          traffics[edge.source] = {}
        }
        traffics[edge.source][edge.target] = 0
        //addNodeN(traffics, source, )
        if (traffics[edge.target] == undefined) {
          traffics[edge.target] = {}
        }
        traffics[edge.target][edge.source] = 0
      }*/
    }).finally(() => {
     
    });
   
}
function blobToData(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

const saveForm = reactive<{
  id: string | undefined;
  name: string | undefined;
  configs: string | undefined;
  nodes: string | undefined;
  edges: string | undefined;
  layouts: string | undefined;
  backgroundImage: string | undefined;
  backgroundImageWidth: string | undefined;
  backgroundImageHeight: string | undefined;
}>({
  id: undefined,
  name: undefined,
  configs: undefined,
  nodes: undefined,
  edges: undefined,
  layouts: undefined,
  backgroundImage: undefined,
  backgroundImageWidth: undefined,
  backgroundImageHeight: undefined,
});


function saveAll() {
  saveForm.configs = JSON.stringify(configs);
  saveForm.nodes = JSON.stringify(nodes);
  saveForm.edges = JSON.stringify(edges);
  saveForm.layouts = JSON.stringify(layouts);
  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.updateTopologyMaintenanceTopology(saveForm).then(({ data }) => {}).finally(() => {
    setTimeout(function() {
      window.location.href =  "./TopologyManage"
    }, 3000); // 3000 毫秒 = 3 秒
  });
}
function backQuery() {
  window.location.href =  "./TopologyManage"
}

function disableTraffic() {
  otherForm.isTraffic = false
}

function openTraffic() {
  otherForm.isTraffic = true
}

const handleFileUpload = () => {  
  console.log("上傳圖檔")
  const file = otherForm.selectedFile;
  console.log("上傳圖檔" + file)
  const formData = new FormData();
  formData.append('file', file);
  formData.append('width', otherForm.width);
  formData.append('height', otherForm.height);
  const api = new TopologyMaintenanceApi(undefined, VITE_NETWORK_API_URL, axios)
  api.saveTopologyMaintenanceUploadFile(otherForm.width, otherForm.height, searchForm.id, file).then(({ data }) => {}).finally(() => {
  
  })
};

const handleFileSelect = (event) => {
  otherForm.selectedFile = event.target.files[0];
};

</script>