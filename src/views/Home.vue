<template>
  <a-layout class="h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <TreeMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white">
        <NavHeader />
      </a-layout-header>
      <a-layout-content class="p-6 overflow-auto">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
const collapsed = ref<boolean>(false);
provide("collapsed", collapsed);
</script>
