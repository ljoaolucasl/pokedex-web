import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokedex.service';
import './tela-pokedex.css';

class PokedexView {
    private pokemonService: PokemonService;

    private inputName: HTMLInputElement;
    private btnBuscar: HTMLButtonElement;
    private btnLimpar: HTMLButtonElement;
    private txtId: HTMLSpanElement;
    private txtName: HTMLSpanElement;
    private txtTipo: HTMLSpanElement;
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
        this.txtId = document.getElementById('txtId') as HTMLSpanElement;
        this.txtName = document.getElementById('txtName') as HTMLSpanElement;
        this.txtTipo = document.getElementById('txtTipo') as HTMLSpanElement;
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
        this.pokemonService.obterPokemonPorNome(nome.toLowerCase())
        .then(poke => this.gerarCard(poke))
        .catch(err => console.log('Pokémon não encontrado!', err));
    }

    private gerarCard(pokemon: Pokemon): void {
        this.txtId.textContent = pokemon.id.toString();
        this.txtName.textContent = pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1);
        this.txtTipo.textContent = pokemon.tipo.charAt(0).toUpperCase() + pokemon.tipo.slice(1);
        this.imgPokemon.src = pokemon.imageUrl;
        this.colorirConformeTipoPokemon(pokemon.tipo)
    }

    private colorirConformeTipoPokemon(tipo: string) {
        switch (tipo) {
            case 'electric':
                this.txtTipo.style.backgroundColor = '#FFD700';
                break;
            case 'fire':
                this.txtTipo.style.backgroundColor = '#FF4500';
                break;
            case 'water':
                this.txtTipo.style.backgroundColor = '#1E90FF';
                break;
            case 'grass':
                this.txtTipo.style.backgroundColor = '#00FF00';
                break;
            case 'ice':
                this.txtTipo.style.backgroundColor = '#ADD8E6';
                break;
            case 'fighting':
                this.txtTipo.style.backgroundColor = '#FF6347';
                break;
            case 'poison':
                this.txtTipo.style.backgroundColor = '#9932CC';
                break;
            case 'ground':
                this.txtTipo.style.backgroundColor = '#D2B48C';
                break;
            case 'flying':
                this.txtTipo.style.backgroundColor = '#87CEEB';
                break;
            case 'psychic':
                this.txtTipo.style.backgroundColor = '#FF69B4';
                break;
            case 'bug':
                this.txtTipo.style.backgroundColor = '#32CD32';
                break;
            case 'rock':
                this.txtTipo.style.backgroundColor = '#A0522D';
                break;
            case 'ghost':
                this.txtTipo.style.backgroundColor = '#8B008B';
                break;
            case 'dark':
                this.txtTipo.style.backgroundColor = '#2F4F4F';
                break;
            case 'steel':
                this.txtTipo.style.backgroundColor = '#708090';
                break;
            case 'fairy':
                this.txtTipo.style.backgroundColor = '#FF1493';
                break;
            default:
                this.txtTipo.style.backgroundColor = '#808080';
                break;
        }
    }

    private limparCard() {
        this.txtId.textContent = '';
        this.txtName.textContent = '';
        this.txtTipo.textContent = '';
        this.imgPokemon.src = '';
    }
}

window.addEventListener('load', () => new PokedexView());