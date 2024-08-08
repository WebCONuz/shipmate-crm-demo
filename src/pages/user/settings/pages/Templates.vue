<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { merchantHeader } from "../../../../data/tableData.ts";
import { templates } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
import Button from "../../../../components/ui/buttons/Button.vue";
</script>

<template>
  <SettingsHeader title="Templates" name="templates" :length="templates.length">
    <template #action>
      <div class="flex">
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue mr-[10px]"
        >
          SMS
        </Button>
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue"
        >
          Email
        </Button>
      </div>
    </template>
  </SettingsHeader>
  <AppTable :data="templates" :headers="merchantHeader">
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
