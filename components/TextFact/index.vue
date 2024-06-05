<template>
  <transition name="fade" mode="out-in">
    <div v-if="isLoading">
      <p class="animate-fadeIn">Loading...</p>
    </div>

    <div :key="factKey" v-else-if="fact">
      <ul>
        <li>
          <p class="animate-fadeIn">{{ fact }}</p>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  factKey: Number,
  isLoading: Boolean,
  fact: String
})
</script>

<style scoped>
p {
  margin: 20px 0;
  @apply text-xl font-normal
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>