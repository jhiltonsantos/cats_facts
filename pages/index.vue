<!-- Index page -->
<template>
  <div class="grid grid-cols-5">
    <div class="card col-span-2">
      <h3 class="text-2xl uppercase font-medium color-">Cat Fact:</h3>
      <TextFact :isLoading="isLoading" :factKey="currentFactKey" :fact="currentFact" />
      <div>
        <ButtonGetFact :onClick="displayFact" />
      </div>
    </div>
    <div class="col-span-3 grid grid-cols-3 gap-6 h-96">
      <ImagesCats />
    </div>
  </div>
</template>

<script setup>
const factsStore = useFactsStore();

const isLoading = ref(true);

const currentFactKey = computed(() => {
  return factsStore.currentFactIndex;
});

const currentFact = computed(() => {
  return factsStore.facts.length > 0 ? factsStore.facts[factsStore.currentFactIndex].fact : '';
});

onMounted(async () => {
  await factsStore.fetchFacts();
  isLoading.value = false;
});

const displayFact = () => {
  factsStore.getNextIndexFact();
};
</script>

<style scoped>
.card {
  @apply px-4 py-10 flex flex-col justify-between h-full
}

@media (min-width: 768px) and (max-width: 928px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    @apply pt-0
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    @apply pt-0
  }
}

@media (max-width: 639px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    @apply pt-0
  }
}
</style>
