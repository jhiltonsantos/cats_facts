<template>
  <transition name="fade" mode="out-in" class="pr-10">
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
p {@apply text-lg font-medium leading-tight
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

@media (max-width: 928px) {
  p {
    @apply py-5
  }
}

</style>