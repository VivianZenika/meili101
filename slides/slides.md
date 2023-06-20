---
background: './images/zenika-stary-night-background.png'
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: meili101
---

# meili101

Présentation de MeiliSearch

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Ready? <carbon:arrow-right class="inline"/>
  </span>
</div>


---
layout: image-right

# the image source
image: ./images/profile-bis.jpg

---

# Présentation

Vivian SARAZIN

- Développeur consultant
- Zenika Brest
- TypeScript enthousiast
- Vue fan

<div class="pt-72 text-xs text-right">
  <carbon:camera class="inline" /> Alex Palma
</div>
---
layout: default
---

# Sommaire

<Toc></Toc>

---
layout: cover

level: 1
---


# MeiliSearch c'est quoi?

<v-clicks>

- Moteur de recherche
- Français
- Création 2018
- Rust
- Open Source
- 37.1k 🌟
- Levée de fonds de 15M€ (fin 2022)

</v-clicks>

---
layout: cover

level: 1
---

# Mais en quoi c'est bien ?

<v-clicks>

- Typo tolerant
- Faaaaaaaaaaaast
- Easy setup
- Production-ready
- Community
- AIS
- "Free"

</v-clicks>

---
transition: slide-up

level: 1
---

# Pokedex


<div class="pb-8">
  <carbon:link class="inline"/>
  https://github.com/VivianZenika/meili101
</div>


## Structure

<v-clicks>

- slides
- back
  - "seeder" qui va se charger d'indexer les Pokemons dans MeiliSearch
- front
  - Notre interface qui va nous permettre de rechercher nos Pokémons
- services
  - Les fichiers pour déclarer et utiliser les services
  
</v-clicks>


---

# TL;DR


```ts {all|2|4-12|15}
// init the client
const client = new MeiliSearch('http://localhost:7700', 'masterKey')

// let's add some stuff in there
await client.index('movies').addDocuments([
  { 'id': 1, 'title': 'Carol' },
  { 'id': 2, 'title': 'Wonder Woman' },
  { 'id': 3, 'title': 'Life of Pi' },
  { 'id': 4, 'title': 'Mad Max: Fury Road' },
  { 'id': 5, 'title': 'Moana' },
  { 'id': 6, 'title': 'Philadelphia'}
])

// give a spin :)    
const search = await index.search('philodelphia')


```
---
layout: end

---

# Let's give a spin
