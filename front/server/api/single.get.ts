import type { Pokemon } from "~/interfaces/Pokemon";

export default defineEventHandler(async (event) => {
  const { POKEAPI_BASE_URL } = useRuntimeConfig().public;
  const query = getQuery(event);
  const { id } = query;
  const response: Pokemon = await $fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);
  return {
    response,
  };
});
