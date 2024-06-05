<template>
  <div class="grid grid-cols-5">
    <div class="col-span-2 px-4 pt-20 pb-5 flex flex-col justify-between h-full">
      <h3 class="text-3xl uppercase font-medium color-">Cat Fact:</h3>
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

</style>
