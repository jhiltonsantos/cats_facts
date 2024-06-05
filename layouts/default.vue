<!-- Layout default -->
<template>
  <div>
    <NuxtLoadingIndicator />
    <HeaderCatFact />
    <div class="container mx-auto py-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@media (min-width: 640px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
