<template>
  <MenuUnfoldOutlined
    v-if="collapsed"
    class="trigger"
    @click="() => (collapsed = !collapsed)"
  />
  <MenuUnfoldOutlined
    v-else
    class="trigger"
    @click="() => (collapsed = !collapsed)"
  />
</template>
<script setup lang="ts">
let collapsed = inject("collapsed");
</script>
