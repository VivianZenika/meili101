export interface PokemonsAPIResponse {
  count: number;
  next: string;
  previous?: unknown;
  results: {
    name: string;
    url: string;
  }[];
}
