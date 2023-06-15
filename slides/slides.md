---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
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
title: Welcome to Slidev
---

# meili101

Présentation de MeiliSearch

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Ready? <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Présentation

Vivian SARAZIN

- Développeur consultant
- Zenika Brest
- TypeScript enthousiast
- Vue fan

<br>
<br>

L'outil de [présentation](https://sli.dev/guide/why)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
layout: default
---

# Sommaire

<Toc></Toc>

---
transition: slide-up

level: 1
---

# MeiliSearch c'est quoi?

- Moteur de recherche
- Français
- Rust
- Open Source
- 37.1k 🌟

---
transition: slide-up

level: 1
---

# meili101

https://github.com/VivianZenika/meili101

Pokedex

- slides
- back
  - Seeder qui va se charger d'indexer les Pokemons dans MeiliSearch
- front
  - Notre interface qui va nous permettre de rechercher nos Pokémons
- services
  - Les fichiers pour déclarer et utiliser les services


---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# 

Use code snippets and get the highlighting directly![^1]

```ts {all|1|3-10|12}
const client = new MeiliSearch('http://localhost:7700', 'masterKey')
  
await client.index('movies').addDocuments([
  { 'id': 1, 'title': 'Carol' },
  { 'id': 2, 'title': 'Wonder Woman' },
  { 'id': 3, 'title': 'Life of Pi' },
  { 'id': 4, 'title': 'Mad Max: Fury Road' },
  { 'id': 5, 'title': 'Moana' },
  { 'id': 6, 'title': 'Philadelphia'}
])
    
const search = await index.search('philodelphia')
```

---

# tutu

```ts {monaco}
import MeiliSearch from 'meilisearch'
const client = new MeiliSearch('http://localhost:7700', 'masterKey')
  
await client.index('movies').addDocuments([
  { 'id': 1, 'title': 'Carol' },
  { 'id': 2, 'title': 'Wonder Woman' },
  { 'id': 3, 'title': 'Life of Pi' },
  { 'id': 4, 'title': 'Mad Max: Fury Road' },
  { 'id': 5, 'title': 'Moana' },
  { 'id': 6, 'title': 'Philadelphia'}
])
    
const search = await index.search('philodelphia')
```

