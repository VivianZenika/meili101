<script lang="ts" setup>
import { Sortable } from "sortablejs-vue3";
import type { Pokemon } from "../../interfaces/Pokemon";

const props = defineProps({
  pokemonsList: {
    type: Array,
    default: () => [] as Pokemon[],
  },
});
</script>

<template>
  <Sortable :list="pokemonsList" class="grid grid-cols-3 gap-4 py-8">
    <template #item="{ element, index }">
      <div :key="element.id" class="draggable">
        <PokemonCard :attributes="element" pokedex :index="index" />
      </div>
    </template>
  </Sortable>
</template>
