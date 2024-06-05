<template>
  <img src="/img/kitty1.webp" alt="Kitty1" class="images col-span-2" />
  <div class="grid grid-rows-2 gap-6 h-full">
    <img src="/img/kitty2.webp" alt="Kitty2" class="images w-full" />
    <img src="/img/kitty3.webp" alt="Kitty3" class="images w-full" />
  </div>
</template>

<script setup>

</script>

<style scoped>
img {
  @apply object-cover h-full rounded-xl;
}

@media (min-width: 768px) and (max-width: 928px) {
  .images {
    @apply col-span-1
  }

}

@media (min-width: 640px) and (max-width: 767px) {
  .images {
    @apply col-span-1 px-10
  }

}

@media (max-width: 639px) {
  .images {
    @apply col-span-1 px-10
  }
}
</style>