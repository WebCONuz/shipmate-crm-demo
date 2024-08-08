<script setup lang="ts">
import { orderHeaders } from "../../data/tableData.ts";
import { orders } from "../../data/staticData.ts";
import AppTable from "./AppTable.vue";
import { ref } from "vue";
import InfoModal from "../modals/InfoModal.vue";
import TableHeader from "../ui/headers/TableHeader.vue";

const showModal = ref<boolean>(false);
const singleData = ref<any>({});

function hideModal() {
  showModal.value = false;
}
function openModal(data: any) {
  singleData.value = data;
  showModal.value = true;
}

function getDataByNum(index: number | object) {
  if (typeof index === "number") {
    singleData.value = { ...orders[index], i: index };
  }
}
</script>

<template>
  <section>
    <InfoModal
      :close="hideModal"
      :show="showModal"
      :data="singleData"
      :next="getDataByNum"
      :length="orders.length"
    />
    <TableHeader title="order" />
    <AppTable :data="orders" :headers="orderHeaders">
      <template #td_id="{ item }">
        <span class="text-mainBlue cursor-pointer" @click="openModal(item)">
          {{ item?.id }}
        </span>
      </template>
      <template #td_vehicle="{ item }">
        <div class="flex items-center">
          <div class="flex flex-col mr-[5px]">
            <i class="bx bxs-ev-station text-mainRed text-sm mb-[2px]"></i>
            <i class="bx bxs-car text-mainBlue text-sm"></i>
          </div>
          <span>{{ item?.vehicle }}</span>
        </div>
      </template>
      <template #td_price="{ item }">
        <p>
          <span class="text-mainBlue font-bold mr-[2px]">$</span>
          <span>{{ item?.price }}</span>
        </p>
      </template>
      <template #td_note>
        <i class="bx bxs-file text-mainBlue text-lg"></i>
      </template>
    </AppTable>
  </section>
</template>

<style scoped></style>
