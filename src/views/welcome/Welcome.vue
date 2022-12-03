<template>
  <div class="h-screen">
    <div>hello</div>
    <Test msg="123" />
  </div>
</template>
<script setup lang="ts">
request.get("/v1/mongo-test").then((res) => {
  console.log(res);
});
</script>
