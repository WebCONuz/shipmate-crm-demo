<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { groundHeader } from "../../../../data/tableData.ts";
import { region } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader
    title="Hawaii and Alaska"
    name="contracts"
    :length="region.length"
  />
  <AppTable :data="region" :headers="groundHeader">
    <template #td_name="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.name }}
      </span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else="item?.status" class="text-red-500">Inactive</span>
    </template>
  </AppTable>
</template>

<style scoped></style>
