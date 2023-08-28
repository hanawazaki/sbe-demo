<template>
  <main>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss" scoped></style>
