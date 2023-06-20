import { expect, test } from 'vitest'
import { post } from '../functions'
import pokemonsList from '../fixtures/pokemons.json'


test('Post a load of pokemons', async () => {
    const res = await post(pokemonsList)
    if (res) {
        expect(res).toBeDefined()
    }
}, 25000)



test('Error', async () => {
    const res = await post([])
    expect(res).toBeDefined()
})