<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "../ui/form_elements/Checkbox.vue";

const props = defineProps({
  headers: {} as () => any,
  data: {} as () => any,
  notMustCheck: Boolean,
});

const isChecked = ref<boolean>(false);
function checkAll() {
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    <table class="min-w-full text-sm text-left text-gray-500">
      <!-- header -->
      <thead class="text-sm text-gray-700 bg-[#E2E8F0]">
        <tr>
          <th
            v-if="!props.notMustCheck"
            scope="col"
            class="px-3 capitalize font-semibold"
          >
            <Checkbox
              :checked="isChecked"
              :checkAll="checkAll"
              :isBold="true"
            />
          </th>
          <th
            v-for="(item, index) in props.headers"
            scope="col"
            class="px-3 py-3 capitalize font-semibold"
            :key="index + 'CCMMB'"
          >
            {{ item?.title }}
          </th>
        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr
          v-for="(item, dataIndex) in props.data"
          class="bg-white border-b hover:bg-gray-100"
          :key="item.id + 'JJDF'"
        >
          <td v-if="!props.notMustCheck" class="px-3">
            <Checkbox :checked="isChecked" :isBold="false" />
          </td>
          <td
            v-for="(td, tdIndex) in props.headers"
            class="px-3 py-[9.5px] text-[15px]"
            :key="tdIndex + 'TDIndex'"
          >
            <slot :name="`td_${td.value}`" :item="{ ...item, i: dataIndex }">{{
              item[td.value]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
