import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokedex.service';
import './tela-pokedex.css';

class PokedexView {
    private pokemonService: PokemonService;

    private inputName: HTMLInputElement;
    private btnBuscar: HTMLButtonElement;
    private btnLimpar: HTMLButtonElement;
    private txtName: HTMLSpanElement;
    private txtId: HTMLSpanElement;
    private imgPokemon: HTMLImageElement;

    constructor() {
        this.pokemonService = new PokemonService();
        this.registrarElementos();
        this.registrarEventos();
    }
    
    private registrarElementos() {
        this.inputName = document.getElementById('inputName') as HTMLInputElement;
        this.btnBuscar = document.getElementById('btnBuscar') as HTMLButtonElement;
        this.btnLimpar = document.getElementById('btnLimpar') as HTMLButtonElement;
        this.txtName = document.getElementById('txtName') as HTMLSpanElement;
        this.txtId = document.getElementById('txtId') as HTMLSpanElement;
        this.imgPokemon = document.getElementById('imgPokemon') as HTMLImageElement;
    }

    private registrarEventos() {
        this.btnBuscar.addEventListener('click', (sender) => this.buscar(sender));

        this.btnLimpar.addEventListener('click', () => this.limparCard());
    }

    private buscar(sender: Event): void {
        sender.preventDefault();

        this.limparCard();

        const nome = this.inputName.value;

        this.pesquisarPokemon(nome);
    }
    
    
    private pesquisarPokemon(nome: string) {
        this.pokemonService.obterPokemonPorNome(nome)
        .then(poke => this.gerarCard(poke))
        .catch(err => console.log('Pokemon não encontrado!', err));
    }

    private gerarCard(pokemon: Pokemon): void {
        this.txtId.textContent = pokemon.id.toString();
        this.txtName.textContent = pokemon.nome;
        this.imgPokemon.src = pokemon.imageUrl;
    }

    private limparCard() {
        this.txtId.textContent = '';
        this.txtName.textContent = '';
        this.imgPokemon.src = '';
    }
}

window.addEventListener('load', () => new PokedexView());