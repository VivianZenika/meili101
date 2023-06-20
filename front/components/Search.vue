<script lang="ts" setup>
import Heading from "~/components/global/Heading.vue";
import PokemonCard from "~/components/pokemon/Card.vue";
const props = defineProps({
  client: {
    type: Object,
    required: true,
  },
});
import {
  AisInstantSearch,
  AisConfigure,
  AisRangeInput,
  AisSearchBox,
  AisHits,
  AisStats,
  AisPagination,
} from "vue-instantsearch/vue3/es";
</script>

<template>
  <ais-instant-search
    :search-client="client"
    index-name="pokemons"
    class="pt-12"
  >
    <ais-configure :hits-per-page.camel="20" />
    <ais-search-box
      placeholder="Search your next Pokemon !"
      class="searchbox"
      show-loading-indicator
    />
    <div class="flex flex-col lg:flex-row">
      <div id="sidebar">
        <Heading color="text-lightYellow" padding="pt-8" content="Filters" />
        <Heading
          :heading-level="3"
          color="text-deepYellow"
          padding="py-2"
          content="Height"
        />
        <ais-range-input
          class="text-deepYellow"
          attribute="height"
          :max="10000"
        />
        <Heading
          :heading-level="3"
          color="text-deepYellow"
          padding="py-2"
          content="Weight"
        />
        <ais-range-input
          class="text-deepYellow"
          attribute="weight"
          :max="10000"
        />
      </div>
      <div id="results" class="w-full pt-2">
        <ais-stats class="text-white text-right my-2" />
        <ais-hits>
          <template #default="{ items }">
            <div class="grid grid-cols-1 xl:grid-cols-2">
              <div v-for="item in items" :key="item.id" class="my-1 md:m-2">
                <PokemonCard :attributes="item" />
              </div>
            </div>
          </template>
        </ais-hits>
        <ais-pagination />
      </div>
    </div>
  </ais-instant-search>
</template>
