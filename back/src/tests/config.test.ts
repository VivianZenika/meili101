import { expect, test } from "vitest";
import {
  pokeapiBaseUrl,
  meilisearchBaseUrl,
  meilisearchMasterkey,
} from "../config";

test("Success", () => {
  expect(pokeapiBaseUrl).toEqual(process.env.POKEAPI_BASE_URL);
  expect(meilisearchBaseUrl).toEqual(process.env.MEILISEARCH_BASE_URL);
  expect(meilisearchMasterkey).toEqual(process.env.MEILISEARCH_MASTER_KEY);
});

test("Error", () => {
  expect(pokeapiBaseUrl).not.toEqual("http://localhost:7700");
  expect(meilisearchBaseUrl).not.toEqual("");
  expect(meilisearchMasterkey).not.toEqual("");
});
