<template>
    <div
      v-if="item"
      :class="[
        {
          bg_warning: alert.type === 'W',
          bg_danger: alert.type === 'E',
          bg_success: alert.type === 'S',
          bg_info: alert.type === 'I',
        },
      ]"
      aria-atomic="true"
      aria-live="assertive"
      class="toast show mb-2"
      role="alert"
    >
      <div class="toast-header">
        <strong class="me-auto">
          {{ $t(alert.title) }}
        </strong>
        <small class="text-muted">{{ alert.time }}</small>
        <button
          aria-label="Close"
          class="ms-2 btn-close"
          data-bs-dismiss="toast"
          type="button"
          @click="dismiss"
        />
      </div>
      <div class="toast-body">
        <span v-html="$t(alert.message, alert.params)"></span>
        <br />
        <span v-if="alert.traceId" class="trace-id">
          Support id: {{ alert.traceId }}
        </span>
      </div>
    </div>
  </template>
  
  <script lang="ts" name="network-function-toast" setup>
  import type { NetworkToast } from "@/stores/toast";
  import { useToastStore } from "@/stores/toast";
  import { defineProps, reactive } from "vue";
  
  const props = defineProps<{
    item: NetworkToast;
  }>();
  
  const toastStore = useToastStore();
  
  function dismiss(): void {
    toastStore.remove(props.item);
  }
  
  if (props.item.dismissIn >= 0) {
    setTimeout(dismiss, props.item.dismissIn);
  }
  console.log("----------------------------");
  console.log(props.item);
  const alert = reactive({
    type: props.item.code.split("-")[3],
    title: props.item.title ?? "alert.title",
    message: props.item.message ?? "statusCodes." + props.item.code,
    params: props.item?.params,
    time: new Intl.DateTimeFormat("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(props.item.time),
    traceId: props.item?.traceId,
  });
  </script>
  
  <style scoped>
  .toast-header {
    color: #000;
    background: rgba(255, 255, 255, 0.5);
  }
  
  .toast-body {
    color: #fff;
    font-weight: 500;
    text-align: left;
  }
  
  .bg_danger {
    background: #dc3545;
  }
  
  .bg_warning {
    background: #ffc107;
    color: #000;
  }
  
  .bg_warning .toast-body {
    color: #000;
  }
  
  .bg_success {
    background: #198754;
  }
  
  .bg_info {
    background: #0d6efd;
  }
  
  .trace-id {
    color: #eee;
    font-size: 0.7rem;
  }
  </style>
  