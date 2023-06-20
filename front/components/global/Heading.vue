<script lang='ts' setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  headingLevel: {
    type: Number,
    required: false,
    default: 2,
  },
  color: {
    type: String,
    required: false,
  },
  padding: {
    type: String,
    required: false,
  },
})

const fontSize = ref('text-')
const tracking = ref('tracking-')
const leading = ref('leading-')
const capitalize = ref('')

switch (props.headingLevel) {
  case 1:
    fontSize.value += '4xl xl:text-6xl'
    leading.value += 'tight'
    tracking.value += 'widest'
    capitalize.value = 'capitalize'
    break
  case 2:
    fontSize.value += '3xl capitalize'
    tracking.value += 'wider'
    capitalize.value = 'capitalize'
    break
  case 3:
    fontSize.value += '2xl'
    tracking.value += 'normal'
}

const classHeading = [
  `${fontSize.value}`,
  `${tracking.value}`,
  `${leading.value}`,
  `${capitalize.value}`,
  `${props.color}`,
  `${props.padding}`,
]
</script>

<template>
  <Component :is="`h${headingLevel}`" :class="classHeading">
    {{ content }}
  </Component>
</template>
