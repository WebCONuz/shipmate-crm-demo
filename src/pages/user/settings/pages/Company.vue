<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { companyHeader } from "../../../../data/tableData.ts";
import { company } from "../../../../data/staticData.ts";
</script>

<template>
  <AppTable
    :data="company"
    :headers="companyHeader"
    :notMustCheck="true"
    class="mt-4"
  >
    <template #td_name="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.name }}
      </span>
    </template>
  </AppTable>
</template>

<style scoped></style>
