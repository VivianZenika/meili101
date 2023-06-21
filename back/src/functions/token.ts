import { MeiliSearch } from "meilisearch";
import {
  meilisearchBaseUrl as host,
  meilisearchMasterkey as apiKey,
  meilisearchKeyUid as apiKeyUid,
} from "../config";

const client = new MeiliSearch({ host, apiKey });

const searchRules = {
  pokemons: {
    filter: "id = 1",
  },
};

const expiresAt = new Date("2023-06-22");

export const token = client.generateTenantToken(apiKeyUid, searchRules, {
  apiKey,
  expiresAt,
});
