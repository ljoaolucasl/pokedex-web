import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokedex.service';
import './tela-detalhes-pokemon.css';

class PokedexViewDetail {
    private pokemonService: PokemonService;

    private inputName: HTMLInputElement;
    private btnBuscar: HTMLButtonElement;
    private btnLimpar: HTMLButtonElement;
    private btnVoltar: HTMLButtonElement;
    private txtId: HTMLSpanElement;
    private txtName: HTMLSpanElement;
    private txtTipo: HTMLSpanElement;
    private imgPokemon: HTMLImageElement;

    private mensagem: HTMLParagraphElement;  
    private mensagemContainer: HTMLDivElement;

    constructor() {
        this.pokemonService = new PokemonService();
        this.registrarElementos();
        this.registrarEventos();
        this.carregarPokemon();
    }

    private carregarPokemon() {
        const urlParams = new URLSearchParams(window.location.search);
        const nome = urlParams.get('nome');
        this.pesquisarPokemon(nome as string);
    }
    
    private registrarElementos() {
        this.inputName = document.getElementById('inputName') as HTMLInputElement;
        this.btnBuscar = document.getElementById('btnBuscar') as HTMLButtonElement;
        this.btnLimpar = document.getElementById('btnLimpar') as HTMLButtonElement;
        this.btnVoltar = document.getElementById('btnVoltar') as HTMLButtonElement;
        this.txtId = document.getElementById('txtId') as HTMLSpanElement;
        this.txtName = document.getElementById('txtName') as HTMLSpanElement;
        this.txtTipo = document.getElementById('txtTipo') as HTMLSpanElement;
        this.imgPokemon = document.getElementById('imgPokemon') as HTMLImageElement;
        this.mensagem = document.getElementById('mensagem') as HTMLParagraphElement;
        this.mensagemContainer = document.querySelector('.mensagem-container') as HTMLDivElement;
    }

    private registrarEventos() {
        this.btnBuscar.addEventListener('click', (sender) => this.buscar(sender));
        this.btnLimpar.addEventListener('click', () => this.limparCard());
        this.btnVoltar.addEventListener('click', () => this.redirecionarParaPaginaPrincipal());
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
        .catch(erro => this.mostrarMensagem(erro.message));
    }

    private gerarCard(pokemon: Pokemon): void {
        this.txtId.textContent = pokemon.id.toString();
        this.txtName.textContent = pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1);
        this.txtTipo.textContent = pokemon.tipo.charAt(0).toUpperCase() + pokemon.tipo.slice(1);
        this.imgPokemon.src = pokemon.imageUrl;
        this.txtTipo.style.backgroundColor = this.colorirConformeTipoPokemon(pokemon.tipo);
    }

    private colorirConformeTipoPokemon(tipo: string): string {
        switch (tipo) {
            case 'electric':
                return '#FFD700';
                break;
            case 'fire':
                return '#FF4500';
                break;
            case 'water':
                return '#1E90FF';
                break;
            case 'grass':
                return '#00FF00';
                break;
            case 'ice':
                return '#ADD8E6';
                break;
            case 'fighting':
                return '#FF6347';
                break;
            case 'poison':
                return '#9932CC';
                break;
            case 'ground':
                return '#D2B48C';
                break;
            case 'flying':
                return '#87CEEB';
                break;
            case 'psychic':
                return '#FF69B4';
                break;
            case 'bug':
                return '#32CD32';
                break;
            case 'rock':
                return '#A0522D';
                break;
            case 'ghost':
                return '#8B008B';
                break;
            case 'dark':
                return '#2F4F4F';
                break;
            case 'steel':
                return '#708090';
                break;
            case 'fairy':
                return '#FF1493';
                break;
            default:
                return '#808080';
                break;
        }
    }

    private limparCard() {
        this.txtId.textContent = '';
        this.txtName.textContent = '';
        this.txtTipo.textContent = '';
        this.imgPokemon.src = '';
    }

    private redirecionarParaPaginaPrincipal() {
        window.location.href = `index.html`;
    }

    private mostrarMensagem(mensagem: string) {
        this.mensagem.textContent = mensagem;
        this.mensagemContainer.classList.add('show-element');
        this.mensagem.style.backgroundColor = 'red';

        setTimeout(() => {
            this.mensagemContainer.classList.remove('show-element');
        }, 3000);
    }
}

window.addEventListener('load', () => new PokedexViewDetail());