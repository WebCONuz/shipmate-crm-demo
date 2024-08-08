<script setup lang="ts"></script>

<template>
  <aside
    class="sidebar bg-darkBlue w-full min-h-full flex flex-col items-center"
  >
    <span class="flex w-12 h-12 items-center justify-center rounded-md mb-1">
      <i class="bx bxl-stripe text-xl text-white"></i>
    </span>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="leads"
      placement="right"
    >
      <router-link
        to="/user/leads"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-filter-alt text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="quotes"
      placement="right"
    >
      <router-link
        to="/user/quotes"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-dollar-circle text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="orders"
      placement="right"
    >
      <router-link
        to="/user/orders"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-task text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="messages"
      placement="right"
    >
      <router-link
        to="/user/messages"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-envelope text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="tasks"
      placement="right"
    >
      <router-link
        to="/user/tasks"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-calendar text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="profile"
      placement="right"
    >
      <router-link
        to="/user/profile"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-id-card text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="insights"
      placement="right"
    >
      <router-link
        to="/user/insights"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-shape-circle text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="settings"
      placement="right"
    >
      <router-link
        to="/user/settings/users"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-line-chart text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="technique settings"
      placement="right"
    >
      <router-link
        to="/user/technique"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-cog text-xl text-white"></i>
      </router-link>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="other"
      placement="right"
    >
      <router-link
        to="/user/other"
        class="flex w-12 h-12 items-center justify-center rounded-md mb-1"
      >
        <i class="bx bx-dots-horizontal-rounded text-xl text-white"></i>
      </router-link>
    </el-tooltip>
  </aside>
</template>

<style>
.sidebar .router-link-active {
  background: #427d9d;
}
</style>
