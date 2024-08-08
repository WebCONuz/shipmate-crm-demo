<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { merchantHeader } from "../../../../data/tableData.ts";
import { VoIP } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader title="VoIP" name="VoIPs" :length="VoIP.length" />
  <AppTable :data="VoIP" :headers="merchantHeader">
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
