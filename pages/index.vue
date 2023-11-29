<template>
  <div class="p-4">
    <div style="display: flex; gap: 15px; align-items: center">
      <img style="height: 70px; filter: blur(1px)" src="logo.jpg" />
      <h1 class="title">Login to enter the petting zoo:</h1>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" v-model="state.username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="password"
          v-model="state.password"
          @keypress.enter="performLogin"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <button class="button" @click="performLogin">Log in!</button>
  </div>
</template>

<script setup>
const state = reactive({
  username: '',
  password: '',
});

function canLogIn() {
  return state.username.length > 0 && state.password.length > 0;
}

async function performLogin() {
  const response = await $fetch('/api/login', {
    method: 'post',
    body: state,
  });
  if (response) {
    navigateTo('/zoo');
  }
}
</script>

<style>
@import 'bulma/css/bulma.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

* {
  font-family: sans-serif;
}
</style>
