import { defineStore } from "pinia";
import type { Pokemon } from "../interfaces/Pokemon";

export const useTeamStore = defineStore({
  id: "team-store",
  state: () => ({
    pokemonsList: [] as Pokemon[],
    search: {
      query: "",
      height: 0,
      weight: 0,
    },
  }),
  actions: {},
  // getters: {
  //   pokemonsList: (state: { pokemonsList: Pokemon[] }) => state.pokemonsList,
  // },
});
