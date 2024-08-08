<script setup lang="ts">
import AppTable from "../../../../components/tables/AppTable.vue";
import { providersHeader } from "../../../../data/tableData.ts";
import { providers } from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
import Button from "../../../../components/ui/buttons/Button.vue";
</script>

<template>
  <SettingsHeader title="Providers" name="users" :length="providers.length">
    <template #action>
      <div class="flex">
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue mr-[10px]"
        >
          Standard
        </Button>
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue"
        >
          Exclusive
        </Button>
      </div>
    </template>
  </SettingsHeader>
  <AppTable :data="providers" :headers="providersHeader">
    <template #td_name="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.name }}
      </span>
    </template>
    <template #td_type="{ item }">
      <span :class="item?.type === 'Standart' ? '' : 'text-red-500'">
        {{ item?.type }}
      </span>
    </template>
    <template #td_status="{ item }">
      <span v-if="item?.status">Active</span>
      <span v-else="item?.status" class="text-red-500">Inactive</span>
    </template>
    <template #td_author="{ item }">
      <span class="text-mainBlue font-medium cursor-pointer">
        {{ item?.author }}
      </span>
    </template>
  </AppTable>
</template>

<style scoped></style>
