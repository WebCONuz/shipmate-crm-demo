<script setup lang="ts">
import { ref } from "vue";
import Frame from "../partials/Frame.vue";
import ModalHeader from "../ui/headers/ModalHeader.vue";
import AsideAccordion from "../accordions/AsideAccordion.vue";
import AppAccordion from "../accordions/AppAccordion.vue";
import MainMap from "../partials/MainMap.vue";

const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  next: {
    type: Function,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});
const isFull = ref<boolean>(false);

function nextElement() {
  if (+props.data?.i < props.length - 1) {
    props.next(+props.data?.i + 1);
  } else {
    props.next(props.length - 1);
  }
}
function prevElement() {
  if (+props.data?.i !== 0) {
    props.next(+props.data?.i - 1);
  } else {
    props.next(0);
  }
}
function changeWidth() {
  isFull.value = !isFull.value;
}
</script>

<template>
  <div
    id="info-modal"
    class="fixed top-[58.2px] bg-white shadow-xl z-50 border duration-200"
    :class="props.show ? 'right-0' : '-right-full'"
    :style="isFull ? 'width: calc(100% - 56px);' : 'width: 80%;'"
  >
    <!-- action tab -->
    <div
      v-if="!isFull"
      class="details flex flex-col border bg-white absolute top-3 -left-[62px] rounded-main shadow-xl overflow-hidden"
    >
      <!-- close modal -->
      <div
        @click="props.close"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevrons-right text-gray-600 text-[32px]"></i>
      </div>
      <!-- full screen -->
      <div
        @click="changeWidth"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-fullscreen text-gray-600 text-[26px]"></i>
      </div>
      <!-- prev element -->
      <div
        @click="prevElement"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-up text-gray-600 text-[36px]"></i>
      </div>
      <!-- next element -->
      <div
        @click="nextElement"
        class="flex items-center justify-center w-12 h-12 duration-200 hover:bg-gray-200 cursor-pointer"
      >
        <i class="bx bx-chevron-down text-gray-600 text-[36px]"></i>
      </div>
    </div>

    <div class="w-full h-full overflow-y-auto">
      <ModalHeader
        :show="isFull"
        :next="nextElement"
        :prev="prevElement"
        :close="props.close"
        :change="changeWidth"
        :data="{ id: props.data?.id, user: props.data?.customer }"
      />
      <div class="modal-body flex w-full">
        <!-- <pre>{{ props.data }}</pre> -->
        <aside
          class="modal-aside pb-4 w-[420px] h-full overflow-y-auto border-r border-gray-300"
        >
          <AsideAccordion title="Details" :data="props.data" :isOpen="true">
            <template #operation>
              <button class="w-6 h-5 rounded border border-gray-200 bg-white">
                <i
                  class="bx bx-dots-horizontal-rounded text-sm text-textBlack"
                ></i>
              </button>
            </template>
          </AsideAccordion>
          <AsideAccordion title="Person" :data="props.data" :isOpen="false">
            <template #operation>
              <button class="w-6 h-5 rounded border border-gray-200 bg-white">
                <i
                  class="bx bx-dots-horizontal-rounded text-sm text-textBlack"
                ></i>
              </button>
            </template>
          </AsideAccordion>
          <AsideAccordion title="Payment" :data="props.data" :isOpen="false">
            <template #payment>
              <button
                class="px-2 h-5 text-xs rounded border border-mainRed bg-mainRed text-white font-medium"
              >
                CD Price
              </button>
            </template>
            <template #operation>
              <button class="w-6 h-5 rounded border border-gray-300 bg-white">
                <i
                  class="bx bx-dots-horizontal-rounded text-sm text-textBlack"
                ></i>
              </button>
            </template>
          </AsideAccordion>
          <AsideAccordion title="Date" :data="props.data" :isOpen="false" />
        </aside>
        <section class="modal-content h-auto overflow-auto bg-bglightGray p-4">
          <Frame />
          <AppAccordion title="Map" :isOpen="true" class="mt-5">
            <MainMap />
          </AppAccordion>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
#info-modal {
  height: calc(100vh - 58.2px);
}
.modal-body {
  height: calc(100% - 72.8px);
}
.modal-content {
  width: calc(100% - 420px);
}

.modal-aside::-webkit-scrollbar {
  width: 4px;
}
.modal-aside::-webkit-scrollbar-track {
  background-color: #e8e7e7;
}
.modal-aside::-webkit-scrollbar-thumb {
  background: #38667f53;
  border-radius: 15px;
}
.content {
  width: calc(100% - 56px);
}
</style>
