import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
export default function useMeiliSearchClient() {
  const { meilisearchClient } = useRuntimeConfig().public;
  const { hostUrl, searchApiKey } = meilisearchClient;
  return instantMeiliSearch(hostUrl, searchApiKey);
}
