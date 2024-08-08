<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { distributionHeader } from "../../../../data/tableData.ts";
import { distribution } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader
    title="Distribution"
    name="users"
    :length="distribution.length"
  />
  <AppTable
    :data="distribution"
    :headers="distributionHeader"
    :notMustCheck="true"
  >
    <template #td_users="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.users }}
      </span>
    </template>
    <template #td_queue="{ item }">
      <span :class="+item?.queue > 0 ? 'text-mainBlue' : ''">
        {{ item?.queue }}
      </span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else class="text-red-500">Inactive</span>
    </template>
    <template #td_pausedBy="{ item }">
      <span v-if="item?.pausedBy">{{ item?.pausedBy }}</span>
    </template>
  </AppTable>
</template>

<style scoped></style>
