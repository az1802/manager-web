<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-200">
    <div class="w-4/12 p-12 bg-white">
      <a-form
        :model="loginInfo"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        @finish="onFinish"
        @finishFailed="onFinishFail"
      >
        <a-form-item label="账号" name="username">
          <a-input v-model:value="loginInfo.username"></a-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input v-model:value="loginInfo.password"></a-input>
        </a-form-item>
        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-checkbox v-model:checked="loginInfo.rember">记住我</a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const loginInfo = ref({
  username: "",
  password: "'",
  rember: true,
});
const onFinish = (): void => {
  // console.log(123);
  http.get("/coffee").then((res) => {
    console.log("res: ", res);
  });
};
const onFinishFail = () => {};

loginSuccess();
</script>
