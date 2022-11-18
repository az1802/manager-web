<script setup lang="ts">
let a = ref("aaaaaaaa");
let info = reactive({
  name: "aaa",
});
</script>

<template>
  <input type="text" v-model="a" />
  <main>app---{{ info }}</main>
</template>
