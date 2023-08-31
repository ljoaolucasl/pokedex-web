import { Pokemon } from "../models/pokemon";

export class PokemonService {
    public obterPokemonPorNome(nome: string): Promise<Pokemon> {
        const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

        return fetch(url)
        .then(res => res.json())
        .then((obj: any): Pokemon => this.mapearPokemon(obj))
    }

    private mapearPokemon(obj: any): Pokemon {
        return {
            id: obj.id,
            nome: obj.name,
            imageUrl: obj.sprites.front_default
        };
    }
}