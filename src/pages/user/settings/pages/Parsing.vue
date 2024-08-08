<script setup lang="ts">
import ParsingTable from "../../../../components/tables/ParsingTable.vue";
import {
  shiperHeader,
  locationHeader,
  vehicleHeader,
  shipmentHeader,
} from "../../../../data/tableData.ts";
import {
  shiper,
  location,
  vehicle,
  shipment,
} from "../../../../data/staticData.ts";
import SettingsHeader from "../../../../components/ui/headers/SettingsHeader.vue";
</script>

<template>
  <SettingsHeader title="Lead Parsing" name="parsing" :length="shiper.length" />
  <!-- 1 -->
  <ParsingTable
    :data="shiper"
    :headers="shiperHeader"
    title="Shipper information"
  />
  <!-- 2 -->
  <ParsingTable
    :data="location"
    :headers="locationHeader"
    title="Location information"
  />
  <!-- 3 -->
  <ParsingTable
    :data="vehicle"
    :headers="vehicleHeader"
    title="Vehicle information"
  />
  <!-- 4 -->
  <ParsingTable
    :data="shipment"
    :headers="shipmentHeader"
    title="Shipment information"
  />
</template>

<style scoped></style>
