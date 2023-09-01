import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokedex.service';
import './tela-lista-pokemons.css';

class PokedexViewList {
    private pokemonService: PokemonService;

    private inputName: HTMLInputElement;
    private btnBuscar: HTMLButtonElement;
    private btnLimpar: HTMLButtonElement;
    private listaPokemon: HTMLDivElement;

    private mensagem: HTMLParagraphElement;  
    private mensagemContainer: HTMLDivElement;
    
    constructor() {
        this.pokemonService = new PokemonService();
        this.registrarElementos();
        this.registrarEventos();

        this.pokemonService.obterListaPokemons()
        .then(poke => this.gerarListaCards(poke))
    }
    
    private registrarElementos() {
        this.inputName = document.getElementById('inputName') as HTMLInputElement;
        this.btnBuscar = document.getElementById('btnBuscar') as HTMLButtonElement;
        this.btnLimpar = document.getElementById('btnLimpar') as HTMLButtonElement;
        this.listaPokemon = document.querySelector('.lista-pokemon') as HTMLDivElement;
        this.mensagem = document.getElementById('mensagem') as HTMLParagraphElement;
        this.mensagemContainer = document.querySelector('.mensagem-container') as HTMLDivElement;
    }

    private registrarEventos() {
        this.btnBuscar.addEventListener('click', (sender) => this.buscar(sender));
    }

    private buscar(sender: Event): void {
        sender.preventDefault();
        const nome = this.inputName.value;
        this.pesquisarPokemon(nome);
    }
    
    private pesquisarPokemon(nome: string) {
        this.pokemonService.obterPokemonPorNome(nome.toLowerCase())
        .then(poke => this.redirecionarPagina(poke.nome))
        .catch(erro => this.mostrarMensagem(erro.message));
    }

    private gerarListaCards(pokemon: Pokemon[]): void {
        this.listaPokemon.innerHTML = '';

        pokemon.forEach((poke) => {
            const link = document.createElement('a');
            link.classList.add('card-link');
            link.href = `tela-detalhes-pokemon.html?nome=${poke.nome}`

            link.addEventListener('click', evento => {
                evento.preventDefault();
                this.redirecionarPagina(poke.nome);
            })

            const card = document.createElement('div');
            card.classList.add('card-pokemon');

            const idElement = document.createElement('span');
            idElement.classList.add('id-pokemon');
            idElement.textContent = `ID: ${poke.id}`;
    
            const nomeElement = document.createElement('span');
            nomeElement.classList.add('name-pokemon');
            nomeElement.textContent = `Nome: ${poke.nome.charAt(0).toUpperCase() + poke.nome.slice(1)}`;

            const tipoElementName = document.createElement('span');
            tipoElementName.classList.add('tipo-pokemon');
            tipoElementName.textContent = `Tipo: `;
    
            const tipoElement = document.createElement('span');
            tipoElement.classList.add('tipo-pokemon-color');
            tipoElement.textContent = `${poke.tipo.charAt(0).toUpperCase() + poke.tipo.slice(1)}`;
            tipoElement.style.backgroundColor = this.colorirConformeTipoPokemon(poke.tipo);
    
            const imagemElement = document.createElement('img');
            imagemElement.classList.add('image-pokemon');
            imagemElement.src = poke.imageUrl;

            link.appendChild(card);
            card.appendChild(idElement);
            card.appendChild(nomeElement);
            card.appendChild(tipoElementName);
            tipoElementName.appendChild(tipoElement);
            card.appendChild(imagemElement);

            this.listaPokemon.appendChild(link);
        });
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

    private redirecionarPagina(nome: string) {
        window.location.href = `detalhes.html?nome=${nome}`;
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

window.addEventListener('load', () => new PokedexViewList());