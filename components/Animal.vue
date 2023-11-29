<template>
  <div class="animal">
    <img style="height: 70px" @click="state.count += 1" :src="image" />
    <p>Pets received: {{ state.count }}</p>
  </div>
</template>

<script setup>
defineProps(['image']);
const state = reactive({
  count: 0,
});
</script>

<style scoped>
.animal {
  text-align: center;
}
</style>
