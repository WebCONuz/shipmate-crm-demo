<script setup lang="ts">
const props = defineProps({
  headers: {} as () => any,
  data: {} as () => any,
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full mb-5">
    <div
      class="text-center bg-lightBlue text-darkBlue capitalize font-bold py-2"
    >
      {{ props.title }}
    </div>
    <table class="min-w-full text-sm text-left text-gray-500">
      <!-- header -->
      <thead class="text-sm text-textBlack bg-white">
        <tr class="border-b">
          <th
            v-for="(item, index) in props.headers"
            scope="col"
            class="px-3 py-3 capitalize font-semibold"
            :key="index + 'CCMMB'"
          >
            {{ item?.title ? "{ " + item?.title + " }" : "" }}
          </th>
        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr
          v-for="(item, dataIndex) in props.data"
          class="bg-white border-b"
          :key="item.id + 'JJDF'"
        >
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
