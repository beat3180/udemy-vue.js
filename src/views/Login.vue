<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input id="email" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード:</label>
    <input type="password" id="password" v-model="password" />
    <br /><br />
    <button @click="createComment">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>
