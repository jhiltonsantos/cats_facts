<template>
  <button class="btn flex items-center" @click="handleClick">
    <Icon name="material-symbols:refresh" color="var(--secondary-text-color)" class="icon mr-2 size-5" />
    <span>Get a random cat fact</span>
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: Function
})

const handleClick = () => {
  if (typeof props.onClick === 'function') {
    props.onClick()
  }
}
</script>

<style scoped>
.btn {
  background-color: var(--button-color);
  color: var(--secondary-text-color);
  @apply px-2 py-2 rounded-md shadow-md shadow-neutral-900 uppercase;
}

span {
  @apply font-semibold text-xs pr-2
}

@media (min-width: 768px) and (max-width: 928px) {
  .icon {
    @apply size-6
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  span {
    @apply text-xs
  }

  .icon {
    @apply size-5
  }
}

@media (max-width: 639px) {
  span {
    @apply text-xs
  }

  .icon {
    @apply size-4
  }
}
</style>
