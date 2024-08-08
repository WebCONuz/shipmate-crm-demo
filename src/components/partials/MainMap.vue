<script setup lang="ts">
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const initialMap = ref<any>(null);

onMounted(() => {
  initialMap.value = L.map("map", {
    zoomControl: true,
    zoom: 1,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true,
  }).setView([30.333909672793297, -81.6694444474959], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);

  L.marker([30.305767062843998, -81.97960434651407]).addTo(initialMap.value);
  L.marker([30.48174677280629, -83.4170443075498]).addTo(initialMap.value);
});
</script>

<template>
  <div id="map" class="h-[300px] w-full rounded"></div>
</template>

<style scoped></style>
