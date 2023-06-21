<script lang="ts" setup>
import GlobalHeading from "../components/global/Heading.vue";
import GlobalButton from "../components/global/Button.vue";

import useMeiliSearchClient from "~/composables/useMeiliSearchClient";
const client = useMeiliSearchClient();

import { useTeamStore } from "~/store/team";
const teamStore = useTeamStore();

const isDisplayTeam = ref(false);
const displayTeam = () => (isDisplayTeam.value = !isDisplayTeam.value);

const pokemonsList = computed(() =>
  process.server ? "" : localStorage.getItem("pokemons-list")
);
if (pokemonsList.value) {
  teamStore.$patch((teamStore) => {
    teamStore.pokemonsList = JSON.parse(pokemonsList.value);
  });
}

const displayableTeam = computed(() => teamStore.$state.pokemonsList);
const isDisplayableTeam = computed(() => displayableTeam.value.length > 0);
const flushTeam = () => {
  teamStore.$patch((teamStore) => {
    teamStore.pokemonsList = [];
  });
  isDisplayTeam.value = false;
  localStorage.removeItem("pokemons-list");
};
</script>

<template>
  <div>
    <GlobalHeading
      :heading-level="2"
      color="text-lightYellow"
      padding="pt-16 pb-8"
      class="text-center"
      content="Welcome to Vivian's Pokedex!"
    />
    <div class="flex justify-around mt-4">
      <GlobalButton v-if="isDisplayableTeam" @click="displayTeam">
        {{ isDisplayTeam ? "Hide" : "Display" }} my team!
      </GlobalButton>
      <GlobalButton v-if="isDisplayableTeam" bg="red" @click="flushTeam">
        Flush it!
      </GlobalButton>
    </div>
    <PokemonTeam v-if="isDisplayTeam" :pokemons-list="displayableTeam" />
    <Search :client="client" />
  </div>
</template>
