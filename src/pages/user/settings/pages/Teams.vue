<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { teamsHeader } from "../../../../data/tableData.ts";
import { teams } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader title="Teams" name="teams" :length="teams.length" />
  <AppTable :data="teams" :headers="teamsHeader">
    <template #td_name="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.name }}
      </span>
    </template>
    <template #td_users="{ item }">
      <p v-if="item?.users?.length">
        <span class="mr-1">Total {{ item?.users?.length }}</span>
        <template v-if="item?.users?.length > 7">
          <span
            v-for="(itm, i) in item?.users?.slice(0, 7)"
            class="bg-lightBlue py-[2px] px-[6px] rounded text-textBlack mx-1"
            :key="i + 'EEWWVBG'"
          >
            {{ itm }}
          </span>
          <span
            class="bg-lightBlue py-[2px] px-[6px] rounded text-textBlack mx-1"
          >
            {{ item?.users?.length - 7 }} +
          </span>
        </template>
        <template v-else>
          <span
            v-for="(itm, i) in item?.users?.slice(0, 7)"
            class="bg-lightBlue py-[2px] px-[6px] rounded text-textBlack mx-1"
            :key="i + 'EEWWVBG'"
          >
            {{ itm }}
          </span>
        </template>
      </p>
      <span v-else class="text-[#A4A4A4]"> Empty </span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else="item?.status" class="text-red-500">Inactive</span>
    </template>
  </AppTable>
</template>

<style scoped></style>
