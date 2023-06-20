import axios from "axios";
import { meilisearchBaseUrl, meilisearchMasterkey } from "../config";

import type { Pokemon } from "../types/Pokemon";

export const post = async (body: Pokemon[]) => {
  try {
    const url = meilisearchBaseUrl + "/indexes/pokemons/documents";
    const headers = { Authorization: `Bearer ${meilisearchMasterkey}` };
    const res = await axios.post(url, body, { headers });
    return res;
  } catch (error: unknown) {
    return error;
  }
};
