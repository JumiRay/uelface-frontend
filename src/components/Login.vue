<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div>
      <input class="login-input" placeholder="Please input email" type="email" >
    </div>
    <div>
      <input class="login-input" placeholder="Please input password" type="password">
    </div>
    <button type="button" >Login</button>
    <p>
      Edit
      <code>components/Login.vue</code>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.login-input {
  padding: 6px;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
