<script setup lang="ts">
import { onMounted, ref } from "vue";
import  Modal from "bootstrap/js/dist/modal";
defineProps({
  title: {
    type: String,
    default: "<<Title goes here>>",
  },
});
let modalEle = ref(null);
let thisModalObj = null;

onMounted(() => {
  thisModalObj = new Modal(modalEle.value);
});
function _show() {
  thisModalObj.show();
}
function _hide() {
  thisModalObj.hide();
}
defineExpose({ show: _show, hide: _hide });
</script>

<template>
  <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby=""
    aria-hidden="true" ref="modalEle">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.modal-dialog,
.modal-content {
    /* 80% of window height */
    height: 80%;
    width: 80%;
}

.modal-body {
    /* 100% = dialog height, 120px = header + footer */
    max-height: calc(100% - 120px);
    overflow-y: scroll;
}
</style>