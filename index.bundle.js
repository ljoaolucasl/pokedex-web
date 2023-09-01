(()=>{"use strict";var n={986:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"body {\n    font-family: 'Rajdhani', sans-serif;\n    margin: 0;\n    background: url('https://free4kwallpapers.com/uploads/originals/2018/06/18/created-a-3d-render-of-a-pokemon-trophy-in-the-grass-wallpaper.jpg') center/cover no-repeat;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.header {\n    background-color: #2b3237;\n    color: white;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.header-title {\n    margin: 0;\n    font-size: 2rem;\n    font-weight: 700;\n}\n\n.main-content {\n    padding: 1rem;\n}\n\n.controles {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.input-nome {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 0.5rem;\n    font-size: 1rem;\n    width: 70%;\n}\n\n.btn-buscar,\n.btn-limpar {\n    padding: 0.5rem 1rem;\n    background-color: #2b3237;\n    color: #fff;\n    border: none;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: 600;\n    transition: background-color 0.2s ease;\n}\n\n.lista-pokemon {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 1rem;\n\n    border-radius: 1em;\n    margin-inline: auto;\n    width: 75vw;\n    min-height: 60em;\n    background-color: rgba(43, 50, 55, 0.8);\n    padding: 10px;\n}\n\n.card-pokemon {\n    display: flex;\n    flex-direction: column;\n    background-color: #c1daea;\n    padding: 1rem;\n    border-radius: 1rem;\n    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);\n    transition: transform 0.2s ease;\n}\n\n.card-pokemon:hover {\n    cursor: pointer;\n    transform: scale(1.02);\n    box-shadow: 0 0 0.5rem #ffffff6d;\n}\n\n.name-pokemon {\n    font-size: 1rem;\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n}\n\n.image-pokemon {\n    max-width: 100%;\n    height: auto;\n}\n\n.tipo-pokemon-color {\n    border-radius: 0.5rem;\n    padding-inline: 1em;\n}\n\n.id-pokemon, .name-pokemon, .tipo-pokemon {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\n.mensagem-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 0;\n    overflow: hidden;\n    transition: height 0.3s ease-in-out;\n}\n\n.mensagem {\n    background-color: #5aad5a;\n    color: white;\n    cursor: pointer;\n    padding: 10px 20px;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    transform: translateY(-100%);\n    transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.show-element {\n    height: auto;\n    overflow: visible;\n}\n\n.show-element .mensagem {\n    opacity: 1;\n    transform: translateY(0);\n}\n","",{version:3,sources:["webpack://./src/views/tela-principal/tela-lista-pokemons.css"],names:[],mappings:"AAAA;IACI,mCAAmC;IACnC,SAAS;IACT,sKAAsK;IACtK,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,UAAU;AACd;;AAEA;;IAEI,oBAAoB;IACpB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;;IAET,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,yCAAyC;IACzC,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,wCAAwC;IACxC,UAAU;IACV,4BAA4B;IAC5B,kDAAkD;AACtD;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B",sourcesContent:["body {\r\n    font-family: 'Rajdhani', sans-serif;\r\n    margin: 0;\r\n    background: url('https://free4kwallpapers.com/uploads/originals/2018/06/18/created-a-3d-render-of-a-pokemon-trophy-in-the-grass-wallpaper.jpg') center/cover no-repeat;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n}\r\n\r\n.header {\r\n    background-color: #2b3237;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.header-title {\r\n    margin: 0;\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.main-content {\r\n    padding: 1rem;\r\n}\r\n\r\n.controles {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.input-nome {\r\n    padding: 0.5rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    font-size: 1rem;\r\n    width: 70%;\r\n}\r\n\r\n.btn-buscar,\r\n.btn-limpar {\r\n    padding: 0.5rem 1rem;\r\n    background-color: #2b3237;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    transition: background-color 0.2s ease;\r\n}\r\n\r\n.lista-pokemon {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    gap: 1rem;\r\n\r\n    border-radius: 1em;\r\n    margin-inline: auto;\r\n    width: 75vw;\r\n    min-height: 60em;\r\n    background-color: rgba(43, 50, 55, 0.8);\r\n    padding: 10px;\r\n}\r\n\r\n.card-pokemon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #c1daea;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\n.card-pokemon:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.02);\r\n    box-shadow: 0 0 0.5rem #ffffff6d;\r\n}\r\n\r\n.name-pokemon {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.image-pokemon {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.tipo-pokemon-color {\r\n    border-radius: 0.5rem;\r\n    padding-inline: 1em;\r\n}\r\n\r\n.id-pokemon, .name-pokemon, .tipo-pokemon {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.mensagem-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: height 0.3s ease-in-out;\r\n}\r\n\r\n.mensagem {\r\n    background-color: #5aad5a;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    opacity: 0;\r\n    transform: translateY(-100%);\r\n    transition: opacity 0.3s ease, transform 0.3s ease;\r\n}\r\n\r\n.show-element {\r\n    height: auto;\r\n    overflow: visible;\r\n}\r\n\r\n.show-element .mensagem {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n}\r\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var m=[].concat(n[c]);t&&i[m[0]]||(void 0!==a&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=a),r&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=r):m[2]=r),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),e.push(m))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],c=t.base?A[0]+t.base:A[0],m=a[c]||0,d="".concat(c," ").concat(m);a[c]=m+1;var p=r(d),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(l);else{var u=o(l,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}i.push(d)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var A=t(n,o),c=0;c<a.length;c++){var m=r(a[c]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}a=A}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{class n{obterListaPokemons(){return fetch("https://pokeapi.co/api/v2/pokemon/").then((n=>this.verificarPokemonValido(n))).then((n=>this.mapearListaPokemon(n.results)))}obterPokemonPorNome(n){return fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then((n=>this.verificarPokemonValido(n))).then((n=>this.mapearPokemon(n)))}mapearListaPokemon(n){const e=n.map((n=>this.obterPokemonPorNome(n.name)));return Promise.all(e)}mapearPokemon(n){return{id:n.id,nome:n.name,tipo:n.types[0].type.name,imageUrl:n.sprites.other["official-artwork"].front_default}}verificarPokemonValido(n){if(n.ok)return n.json();throw new Error("Pokémon não encontrado!")}}var e=r(379),t=r.n(e),o=r(795),a=r.n(o),i=r(569),s=r.n(i),A=r(565),c=r.n(A),m=r(216),d=r.n(m),p=r(589),l=r.n(p),u=r(986),f={};f.styleTagTransform=l(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;class C{constructor(){this.pokemonService=new n,this.registrarElementos(),this.registrarEventos(),this.pokemonService.obterListaPokemons().then((n=>this.gerarListaCards(n)))}registrarElementos(){this.inputName=document.getElementById("inputName"),this.btnBuscar=document.getElementById("btnBuscar"),this.btnLimpar=document.getElementById("btnLimpar"),this.listaPokemon=document.querySelector(".lista-pokemon"),this.mensagem=document.getElementById("mensagem"),this.mensagemContainer=document.querySelector(".mensagem-container")}registrarEventos(){this.btnBuscar.addEventListener("click",(n=>this.buscar(n))),this.btnLimpar.addEventListener("click",(()=>this.limparCard()))}buscar(n){n.preventDefault(),this.limparCard();const e=this.inputName.value;this.pesquisarPokemon(e)}pesquisarPokemon(n){}gerarListaCards(n){this.listaPokemon.innerHTML="",n.forEach((n=>{const e=document.createElement("div");e.classList.add("card-pokemon");const r=document.createElement("span");r.classList.add("id-pokemon"),r.textContent=`ID: ${n.id}`;const t=document.createElement("span");t.classList.add("name-pokemon"),t.textContent=`Nome: ${n.nome.charAt(0).toUpperCase()+n.nome.slice(1)}`;const o=document.createElement("span");o.classList.add("tipo-pokemon"),o.textContent="Tipo: ";const a=document.createElement("span");a.classList.add("tipo-pokemon-color"),a.textContent=`${n.tipo.charAt(0).toUpperCase()+n.tipo.slice(1)}`,a.style.backgroundColor=this.colorirConformeTipoPokemon(n.tipo);const i=document.createElement("img");i.classList.add("image-pokemon"),i.src=n.imageUrl,e.appendChild(r),e.appendChild(t),e.appendChild(o),o.appendChild(a),e.appendChild(i),this.listaPokemon.appendChild(e)}))}colorirConformeTipoPokemon(n){switch(n){case"electric":return"#FFD700";case"fire":return"#FF4500";case"water":return"#1E90FF";case"grass":return"#00FF00";case"ice":return"#ADD8E6";case"fighting":return"#FF6347";case"poison":return"#9932CC";case"ground":return"#D2B48C";case"flying":return"#87CEEB";case"psychic":return"#FF69B4";case"bug":return"#32CD32";case"rock":return"#A0522D";case"ghost":return"#8B008B";case"dark":return"#2F4F4F";case"steel":return"#708090";case"fairy":return"#FF1493";default:return"#808080"}}limparCard(){}}window.addEventListener("load",(()=>new C))})()})();
//# sourceMappingURL=index.bundle.js.map