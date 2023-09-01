import { Pokemon } from "../models/pokemon";

export class PokemonService {
    public obterListaPokemons(): Promise<Pokemon[]> {
        const url = `https://pokeapi.co/api/v2/pokemon/`;

        return fetch(url)
        .then(res => this.verificarPokemonValido(res))
        .then((obj: any): Promise<Pokemon[]> => this.mapearListaPokemon(obj.results))
    }

    public obterPokemonPorNome(nome: string): Promise<Pokemon> {
        const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

        return fetch(url)
        .then(res => this.verificarPokemonValido(res))
        .then((obj: any): Pokemon => this.mapearPokemon(obj))
    }

    private mapearListaPokemon(obj: any[]): Promise<Pokemon[]> {
        const pokemons = obj.map(obj => this.obterPokemonPorNome(obj.name));

        return Promise.all(pokemons);
    }

    private mapearPokemon(obj: any): Pokemon {
        return {
            id: obj.id,
            nome: obj.name,
            tipo: obj.types[0].type.name,
            imageUrl: obj.sprites.other['official-artwork'].front_default
        };
    }

    private verificarPokemonValido(res: Response): any {
        if (res.ok)
            return res.json();

        throw new Error('Pokémon não encontrado!');
    }
}