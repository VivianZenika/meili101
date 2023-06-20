<script lang="ts" setup>
const {
  params: { id },
} = useRoute();
const { data, pending, error } = useFetch("/api/single", {
  params: {
    id,
  },
});
</script>

<template>
  <div>
    <div v-if="pending">
      <pre>Fetching result ...</pre>
    </div>
    <div v-if="error">
      <pre>{{ JSON.stringify(error) }}</pre>
    </div>
    <div v-else-if="data" class="pt-2 md:pt-8">
      <NuxtLink to="/">
        <GlobalButton>Home</GlobalButton>
      </NuxtLink>
      <div
        class="flex flex-col-reverse md:flex-row md:justify-around md:items-center"
      >
        <div>
          <GlobalHeading
            :heading-level="1"
            color="text-lightYellow"
            padding="py-8 lg:py-16"
            :content="data.response.name"
          />
          <GlobalHeading color="text-deepYellow" content="Basics" />
          <p class="text-deepYellow">Weight: {{ data.response.weight }}</p>
          <p class="text-deepYellow">Height: {{ data.response.height }}</p>
        </div>
        <img
          :src="data.response.sprites.other['official-artwork'].front_default"
          alt=""
          srcset=""
        />
      </div>
      <div class="flex flex-col md:flex-row justify-around mt-4">
        <div>
          <h2 class="text-deepYellow text-3xl">Abilities</h2>
          <p
            v-for="ability in data.response.abilities"
            :key="ability.ability.name"
          >
            {{ ability }}
          </p>
        </div>
        <div>
          <h2 class="text-deepYellow text-3xl">Stats</h2>
          <p v-for="stat in data.response.stats" :key="stat.stat.name">
            {{ stat }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
