<script setup lang="ts">
import { leadHeaders } from "../../data/tableData.ts";
import { leads } from "../../data/staticData.ts";
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
    singleData.value = { ...leads[index], i: index };
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
      :length="leads.length"
    />
    <TableHeader title="lead" />
    <AppTable :data="leads" :headers="leadHeaders">
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
    </AppTable>
  </section>
</template>

<style scoped></style>
