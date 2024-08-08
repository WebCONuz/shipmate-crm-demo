<script setup lang="ts">
import { tasksHeaders } from "../../data/tableData.ts";
import { tasks } from "../../data/staticData.ts";
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
    singleData.value = { ...tasks[index], i: index };
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
      :length="tasks.length"
    />
    <TableHeader title="task" />
    <AppTable :data="tasks" :headers="tasksHeaders">
      <template #td_id="{ item }">
        <span class="text-mainBlue cursor-pointer" @click="openModal(item)">
          {{ item?.id }}
        </span>
      </template>
      <template #td_done>
        <div class="flex items-center">
          <input
            type="radio"
            class="w-[18px] h-[18px] border border-mainGray"
          />
        </div>
      </template>
      <template #td_task>
        <i
          class="bx bx-phone text-gray-400 text-2xl cursor-pointer hover:text-gray-600 duration-200"
        ></i>
      </template>
      <template #td_user="{ item }">
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/profile-1534796299842-cfc036c59a04?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            alt="avatar"
            class="w-5 h-5 rounded-full object-cover mr-2"
          />
          <span>{{ item?.user }}</span>
        </div>
      </template>
    </AppTable>
  </section>
</template>

<style scoped></style>
