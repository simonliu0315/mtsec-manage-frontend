<template>
  <template v-if="portal">
    <ul class="pagination pagination-sm float-end">
      <li class="page-item">
        <a
          v-if="data.first"
          class="page-link"
          href="#"
          :title="$t('pagination.first')"
          disabled
          @click.prevent="back"
        >
          <i class="bi bi-chevron-bar-left" />
          <span class="visually-hidden">{{ $t('pagination.first') }}</span>
        </a>
        <a
          v-else
          class="page-link"
          href="#"
          :title="$t('pagination.first')"
          @click.prevent="
            gotoTop();
            emits('page', 0, state.size)
          "
        >
          <i class="bi bi-chevron-bar-left" />
          <span class="visually-hidden">{{ $t('pagination.first') }}</span>
        </a>
      </li>
      <li class="page-item">
        <a
          v-if="data.first"
          :title="$t('pagination.previous')"
          class="page-link"
          disabled
          href="#"
          @click.prevent="back"
        >
          <i class="bi bi-arrow-left" :title="$t('pagination.previous')" />
          <span class="visually-hidden">
            {{ $t('pagination.previous') }}
          </span>
        </a>
        <a
          v-else
          :title="$t('pagination.previous')"
          class="page-link"
          href="#"
          @click.prevent="
            gotoTop();
            back();
          "
        >
          <i class="bi bi-arrow-left" :title="$t('pagination.previous')" />
          <span class="visually-hidden">
            {{ $t('pagination.previous') }}
          </span>
        </a>
      </li>
      <li
        v-for="n in maxIndex - minIndex"
        :key="'page_' + n + minIndex"
        :class="{ active: data.number + 1 === n + minIndex }"
        class="page-item"
      >
        <a
          :title="n + minIndex"
          class="page-link"
          href="#"
          @click.prevent="
            gotoTop();
            emits('page', n + minIndex - 1, state.size);
          "
        >
          {{ n + minIndex }}
        </a>
      </li>
      <li class="page-item">
        <a
          v-if="data.last"
          :title="$t('pagination.next')"
          class="page-link"
          disabled
          href="#"
          @click.prevent="next"
        >
          <span class="visually-hidden">
            {{ $t('pagination.next') }}
          </span>
          <i class="bi bi-arrow-right" :title="$t('pagination.next')" />
        </a>
        <a
          v-else
          :title="$t('pagination.next')"
          class="page-link"
          href="#"
          @click.prevent="
            gotoTop();
            next();
          "
        >
          <span class="visually-hidden">
            {{ $t('pagination.next') }}
          </span>
          <i class="bi bi-arrow-right" :title="$t('pagination.next')" />
        </a>
      </li>
      <li class="page-item">
        <a
          v-if="data.last"
          class="page-link"
          href="#"
          :title="$t('pagination.last')"
          disabled
          @click.prevent="next"
        >
          <i class="bi bi-chevron-bar-right" />
          <span class="visually-hidden">{{ $t('pagination.last') }}</span>
        </a>
        <a
          v-else
          class="page-link"
          href="#"
          :title="$t('pagination.last')"
          @click.prevent="
            gotoTop();
            last();
          "
        >
          <i class="bi bi-chevron-bar-right" />
          <span class="visually-hidden">{{ $t('pagination.last') }}</span>
        </a>
      </li>
      <li class="page-item pt-2 page-item-display">
        {{ $t('pagination.to') }}
      </li>
      <li class="page-item page-item-display">
        <div class="input-group">
          <label class="visually-hidden" for="SelectPages">
            {{ $t('pagination.unit') }}
          </label>
          <select id="SelectPages" v-model="state.page" class="form-select">
            <option v-for="index in data.totalPages" :key="index" :value="index - 1">
              {{ index }}
            </option>
          </select>
          <button
            class="btn px-1 bg-gray btn-outline-gray pagination_btn"
            type="button"
            :title="$t('pagination.execute')"
            @click="
              gotoTop();
              emits('page', state.page, state.size);
            "
          >
            <i class="bi bi-arrow-right-circle-fill" />
            <span class="visually-hidden">{{ $t('pagination.execute') }}</span>
          </button>
        </div>
      </li>
      <li class="page-item pt-2">
        {{ $t('pagination.unit') }}
        <span class="px-1">/</span>
        {{ $t('pagination.display') }}
      </li>
      <li class="page-item">
        <div class="input-group">
          <label class="visually-hidden" for="SelectSizes">
            {{ $t('pagination.displayCount') }}
          </label>
          <select id="SelectSizes" v-model="state.size" class="form-select">
            <option v-for="(option, index) in sizeOptions" :key="index" :value="option">
              {{ option }}
            </option>
          </select>
          <button
            class="btn px-1 bg-gray btn-outline-gray pagination_btn"
            type="button"
            :title="$t('pagination.execute')"
            @click="
              gotoTop();
              emits('page', 0, state.size);
            "
          >
            <i class="bi bi-arrow-right-circle-fill" />
            <span class="visually-hidden">{{ $t('pagination.execute') }}</span>
          </button>
        </div>
      </li>
      <li class="page-item pt-2">{{ $t('pagination.count') }}</li>
    </ul>
  </template>
  <template v-else>
    <div class="page_box_item">
      <small class="ms-2">{{ data.number + 1 }} / {{ data.totalPages }}</small>
      <button
        :disabled="data.first"
        :title="$t('pagination.previous')"
        class="btn btn-falcon-default btn-sm ms-2"
        type="button"
        @click="back"
      >
        <i class="bi bi-arrow-left" :title="$t('pagination.previous')" />
      </button>
      <button
        :disabled="data.last"
        :title="$t('pagination.next')"
        class="btn btn-falcon-default btn-sm ms-2"
        type="button"
        @click="next"
      >
        <i class="bi bi-arrow-right" :title="$t('pagination.next')" />
      </button>
      <div class="btn-group ms-2" role="group">
        <select
          v-model="state.size"
          :title="$t('pagination.page')"
          class="form-select form-select-sm"
          @change="emits('page', state.page, state.size)"
        >
          <option v-for="(option, index) in sizeOptions" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="count">
        <span>{{ $t('pagination.total', [data.totalElements]) }}</span>
      </div>
    </div>
  </template>
</template>
  
<script lang="ts" name="network-pagination" setup>
import { computed, defineEmits, defineProps, reactive, watch, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    portal?: boolean | ''
    sizeOptions: Array<number>
    data: {
      size: number
      number: number
      totalElements: number
      totalPages: number
      first: boolean
      last: boolean
    }
  }>(),
  {
    sizeOptions: () => [10, 20, 50, 100],
    data: () => ({
      size: 10,
      number: 0,
      totalElements: 0,
      totalPages: 1,
      first: true,
      last: true,
    })
  }
)

const emits = defineEmits<{
  (e: 'page', page: number, size: number): void
}>()

const state = reactive({
  page: props.data?.number,
  size: props.data?.size
})

const minIndex = computed(() => {
  //console.log(props.data)
  //console.log('minIndex ' + props.data.totalPages + ' ' + props.data.number)
  
  return Math.max(
    0,
    props.data.number - Math.max(5 - (props.data.totalPages - props.data.number), 2)
  )
})

const maxIndex = computed(() => {
  //console.log('maxIndex: ' + minIndex.value)
  return Math.min(minIndex.value + 5, props.data.totalPages)
})

function back(): void {
  if (!props.data.first) {
    emits('page', props.data.number - 1, props.data.size)
  }
}

function next(): void {
  if (!props.data.last) {
    emits('page', props.data.number + 1, props.data.size)
  }
}

function gotoTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

watch(props, () => {
  state.page = props.data?.number
  state.size = props.data?.size
})

function last() {
  emits('page', props.data.totalPages - 1, state.size)
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .page-item-display {
    display: none;
  }
}
.btn-outline-gray {
    border: 1px solid #ddd;
}
.bg-gray {
    background-color: #f1f1f1;
}
</style>
  