<script lang='ts' setup>
const props = defineProps({
  bg: {
    type: String,
    required: false,
    default: 'lightBlue',
  },
  text: {
    type: String,
    required: false,
    default: 'white',
  },
  rounded: {
    type: String,
    required: false,
    default: 'full',
  },
  padding: {
    type: String,
    required: false,
    default: 'px-4 py-2',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  outline: {
    type: Boolean,
    required: false,
    default: true,
  },
})

const { bg, text, rounded, padding } = props
const classButton = [`bg-${bg}`, `text-${text}`, `rounded-${rounded}`, `${padding}`]
</script>

<template>
  <button
    :class="[
      { disabled },
      { outline: `border border-${text}` },
      ...classButton,
    ]"
  >
    <slot />
  </button>
</template>
