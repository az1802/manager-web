<script setup lang="ts">
defineProps({
  msg: String,
});
</script>

<template>
  <div>测试组件--{{ msg }}</div>
</template>

<style lang="less" scoped></style>
