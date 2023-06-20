import { fetch, post } from "../functions";
import { pokeapiBaseUrl } from "../config";
import type { Pokemon, PokemonsAPIResponse } from "../types/";

export class PokemonSeeder {
  // MeiliSearch params
  offset = 0;
  limit = 20;

  // MeiliSearch response
  hits = [];
  nbHits = 0;

  constructor() {
    console.log("### Initializing PokemonSeeder... ###");
    this.start();
  }

  private async init() {
    console.log(">>> Initializing process...");
    const res = await fetch(`${pokeapiBaseUrl}/pokemon`);
    if (res !== undefined) {
      this.nbHits = res.count;
      console.log(">>> Initializing process done.");
    }
  }

  public async start() {
    console.log(">>> Starting process...");
    await this.init();
    const rounds = Math.ceil(this.nbHits / this.limit);
    for (let index = 0; index < rounds; index++) {
      console.log(`>>> Progression: ${index}/${rounds}`);
      const res: PokemonsAPIResponse = await fetch(
        `${pokeapiBaseUrl}/pokemon?offset=${this.offset}&limit=${this.limit}`
      );
      const pokemons: Pokemon[] = await Promise.all(
        res.results.map(async (el: { url: string }) => await fetch(el.url))
      );
      await post(pokemons);
      this.offset += this.limit;
    }
    console.log("### Ending PokemonSeeder ###");
  }
}
