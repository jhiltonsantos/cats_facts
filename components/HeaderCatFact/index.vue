<!-- Header component -->
<template>
  <header>
    <h1>The Defsafe Cat Facts Page</h1>
  </header>
</template>

<style scoped>
header {
  @apply h-[16vh] flex items-center justify-center;
}

h1 {
  @apply text-4xl text-center uppercase font-medium;
}

@media (max-width: 639px) {
  h1 {
    @apply text-3xl;
  }
}

@media (max-width: 497px) {
  h1 {
    @apply text-2xl;
  }
}
</style>