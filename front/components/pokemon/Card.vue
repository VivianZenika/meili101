<script lang="ts" setup>
import GlobalHeading from "../global/Heading.vue";
import GlobalButton from "../global/Button.vue";

import { AisHighlight } from "vue-instantsearch/vue3/es";

import { useTeamStore } from "~/store/team";
import type { Pokemon } from "~/interfaces/Pokemon";

const props = defineProps({
  attributes: {
    type: Object as () => Pokemon,
    required: true,
  },
  pokedex: {
    type: Boolean,
    required: false,
    default: false,
  },
  index: {
    type: Number,
    required: false,
  },
});

const { id, name, height, weight, sprites } = props.attributes;

const teamStore = useTeamStore();

const isPresentTeam = computed(() =>
  teamStore.$state.pokemonsList.map((el) => el.id).includes(id)
);
const isTeamFull = computed(() => teamStore.$state.pokemonsList.length === 6);

const togglePokemon = (from: string) => {
  teamStore.$patch((teamStore) => {
    if (isPresentTeam.value && from === "pokedex") {
      teamStore.pokemonsList.splice(props.index, 1);
    } else if (from === "grid") {
      if (isTeamFull.value)
        // eslint-disable-next-line no-alert
        return alert("You can't add a Pokemon");

      teamStore.pokemonsList.push(props.attributes);

      if (isTeamFull.value)
        // eslint-disable-next-line no-alert
        alert("Your team is ready to rumble !");
    }
    localStorage.setItem(
      "pokemons-list",
      JSON.stringify(teamStore.pokemonsList)
    );
  });
};

const btnPokemonTeamText = computed(() => {
  if (isTeamFull.value) return "Can't add again!";
  else if (isPresentTeam.value) return "Add again";
  else return "Add to my team";
});
</script>

<template>
  <div
    class="hover:shadow-xl hover:bg-lightBlue border border-lightYellow hover:shadow-deepYellow"
  >
    <div class="p-4">
      <img
        :src="sprites.other['official-artwork'].front_default"
        :alt="`${name} front default`"
        class="h-32 w-auto md:h-64 mx-auto"
      />
      <ais-highlight
        attribute="name"
        :hit="attributes"
        class="text-deepYellow text-xl capitalize"
      />
      <div class="my-2">
        <p class="text-deepYellow text-sm">Height {{ height }}</p>
        <p class="text-deepYellow text-sm">Weight {{ weight }}</p>
      </div>
      <div v-if="!pokedex" class="flex justify-between">
        <NuxtLink :to="`/pokemon/${id}`">
          <GlobalButton bg="deepBlue" text="lightYellow">
            Details
          </GlobalButton>
        </NuxtLink>
        <GlobalButton
          bg="red"
          text="white"
          :disabled="isTeamFull"
          @click="togglePokemon('grid')"
        >
          {{ btnPokemonTeamText }}
        </GlobalButton>
      </div>
      <div v-else>
        <GlobalButton
          bg="deepBlue"
          text="lightYellow"
          @click="togglePokemon('pokedex')"
        >
          Remove
        </GlobalButton>
      </div>
    </div>
  </div>
</template>
