<template>
  <div class="zoo">
    <Animal v-for="animal in animals" :image="animal" />
  </div>
</template>

<script setup>
const animals = ref([]);
async function getAnimals() {
  const response = await $fetch('/api/loadzoo');
  animals.value = response;
  console.log(response);
}
onMounted(getAnimals);
</script>

<style scoped>
.zoo {
  display: flex;
  justify-content: space-between;
  background-image: url(field.jpg);
  background-position: center center;
  background-size: cover;
}
</style>
