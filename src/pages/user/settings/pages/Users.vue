<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { usersHeader } from "../../../../data/tableData.ts";
import { users } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader title="Users" name="users" :length="users.length" />
  <AppTable :data="users" :headers="usersHeader">
    <template #td_username="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.username }}
      </span>
    </template>
    <template #td_team="{ item }">
      <span class="text-mainBlue cursor-pointer">
        {{ item?.team }}
      </span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else="item?.status" class="text-red-500">Inactive</span>
    </template>
  </AppTable>
</template>

<style scoped></style>
