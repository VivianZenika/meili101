import { expect, test } from "vitest";
import { pokeapiBaseUrl } from "../config";
import type { Pokemon, PokemonsAPIResponse } from "../types";
import { fetch } from "../functions";

test("Fetch all pokemons", async () => {
  const res: PokemonsAPIResponse = await fetch(`${pokeapiBaseUrl}/pokemon`);
  if (res) {
    expect(res.results.length).toBeGreaterThan(0);
    expect(res.results.length).toBeGreaterThanOrEqual(20);
  }
});

test("Fetch bulbasaur", async () => {
  const res: Pokemon = await fetch(`${pokeapiBaseUrl}/pokemon/1`);
  if (res) {
    expect(res.name).toBe("bulbasaur");
    expect(res.id).toBe(1);
    expect(res.height).toBe(7);
    expect(res.weight).toBe(69);
  }
});

test("Error", async () => {
  const res = await fetch("baseUrl");
  expect(res).toBeDefined();
});
