<template>
  <button class="btn flex" @click="handleClick">
    <Icon name="material-symbols:refresh" color="var(--secondary-text-color)" size="28px" class="mr-3" />
    <span class="text-md font-medium">Get a random cat fact</span>
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

<style scoped></style>