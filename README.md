<h1 align="center">Cats Facts - Hilton Santos</h1>
<h1 align="center">Defsafe Cat Facts</h1>
<p align="center">Teste básico de código da DefSafe</p>
<p align="center"><a>https://cats-facts-five.vercel.app/</a></p>

  
# 1. Visão Geral

O site foi desenvolvido com Nuxt 3 para o teste básico de código da DefSafe. Ele pode ser acessado através deste [link](https://cats-facts-five.vercel.app/), o deploy foi realizado utilizando o Vercel. A página apresenta um texto que exibe um fato sobre gatos e um botão que gera uma nova frase, com os dados fornecidos pela API [meowfacts](https://meowfacts.herokuapp.com). 

Para mais detalhes sobre o teste acesse esse [repositório](https://github.com/def-safe/defsafe-developers-test/?tab=readme-ov-file) fornecido pela DefSafe.

# 2. Arquitetura do aplicativo

A arquitetura do Cats Facts foi projetada para garantir que os dados da API sejam capturados e armazenados em uma lista gerenciada pelo Pinia, um gerenciador de estados. Sempre que o usuário clica no botão, ele avança para o próximo item dessa lista. Ao chegar no último item, a função realiza uma nova chamada à API para obter mais dados.


### 2.1.1. Módulos

Aqui estão os módulos utilizadas no projeto:

-   [@nuxtjs/tailwindcss](https://nuxt.com/modules/tailwindcss)

Módulo do Tailwind, que é uma estrutura CSS utilitária que simplifica o desenvolvimento web ao fornecer classes pré-definidas para estilização.

-   [@pinia](https://nuxt.com/modules/pinia)

Módulo de gestão de estado para o Vue.js.

-   [@nuxtjs/google-fonts](https://nuxt.com/modules/google-fonts)

Módulo do Google Fonts para o Nuxt, utilizada para baixar a fonte Jost.

-   [@nuxt-icon](https://nuxt.com/modules/icon)

Módulo do Nuxt Icon para o framework Nuxt.js que simplifica a integração e o uso de ícones em projetos Vue.js.

-   [@nuxt/test-utils](https://nuxt.com/modules/test-utils)

Módulo de utilitários de teste para projetos Nuxt.js, permitindo testar componentes, páginas e funcionalidades


-   [@nock](https://github.com/nock/nock)

Módulo de simulação de solicitações HTTP para testes em projetos Nuxt.js.

-   [@vitest](https://vitest.dev/)

Módulo do Vitest ferramenta de teste de integração para projetos Nuxt.js


### 2.1.2. Componentes

Aqui estão os componentes criados para execução do teste.

-  **`ButtonGetFact`:**

	| name | path | params |
	|--|--| -- |
	| ButtonGetFact | components\ButtonGetFact | onClick


	**Descrição:** Componente de botão com uma função onClick, que exibe um ícone de carregamento do Material Symbols e um texto para obter o próximo fato.


-  **`HeaderCatFact`:**
	
	| name | path | params |
	|--|--| -- |
	| HeaderCatFact | components\HeaderCatFact | -
	

	**Descrição:** Header exido na tela de index que contém o texto "The Defsafe Cat Facts Page".


-  **`ImagesCats`:**
	
	| name | path | params |
	|--|--| -- |
	| ImagesCats | components\ImagesCats | -

	**Descrição:** Componente que exibe três imagens de gatos no formato WebP.


-  **`TextFact`:**
	
	| name | path | params |
	|--|--| -- |
	| TextFact | components\TextFact | factKey, isLoading, fact
	
	**Descrição:** Componente que exibe os textos de fatos vindos da API.


# 3. Funcionalidades

O site possui uma funcionalidade principal: exibir fatos sobre gatos. Para isso, são consumidos os dados da API [meowfacts](https://meowfacts.herokuapp.com).

## Estrutura das Funcionalidades

1. **Chamada à API:**
   - A função que realiza a chamada à API está localizada em `server/api/meowfacts/facts.ts`.
   - Esta função chama a API e obtém os dados dos fatos sobre gatos.

2. **Armazenamento dos Dados:**
   - A função `fetchFacts`, que utiliza o Pinia para gerenciamento de estados, é responsável por armazenar os dados obtidos da API.
   - Os dados são armazenados em uma lista chamada `facts`.

3. **Exibição dos Fatos:**
   - Uma função chamada `getNextIndexFact` é responsável por apresentar na tela um novo fato salvo dentro de `facts`.
   - Esta função utiliza um atributo chamado `currentFactIndex`, que armazena a posição atual dentro da lista `facts`.

4. **Atualização dos Fatos:**
   - Quando `getNextIndexFact` alcança o final da lista `facts`, ela chama a função `fetchFacts` novamente.
   - A função `fetchFacts` substitui a lista de `facts` por uma nova, garantindo que sempre haja novos fatos disponíveis para exibição.




# 4. Design da Interface do Usuário

A seguir, são apresentados os principais aspectos do design da interface do site:


## 4.1. Protótipo

Esse é o protótipo fornecido no teste:

<p  align="center"> <img  src="https://i.postimg.cc/Px0X8Zgk/design.png"  alt="image_folders"> </p>

## 4.2. Palheta de Cores

A palheta de  fornecidas para o teste podem ser acessar através desse [link](https://coolors.co/palette/22223b-4a4e69-9a8c98-c9ada7-f2e9e4) .

## 4.2. Fontes

As fonte utilizada no projeto foi a [Jost](https://fonts.google.com/specimen/Jost) conforme foi colocado no teste.

## 4.3. Responsividade

O site foi desenvolvido utilizando Tailwind CSS, com três versões de telas para diferentes dispositivos: computador, tablet e celular. Todos os componentes, layouts e páginas foram ajustados para garantir uma exibição otimizada em cada tipo de dispositivo.

## 4.4. Animações

As animações de fadeIn e fadeOut foram aplicadas ao componente de texto dos fatos, utilizando Tailwind CSS para controlar essas transições.

## 4.5. Resultado
O resultado do site ficou dessa forma: 

<p  align="center"> <img  src="https://i.postimg.cc/RhfM1hmJ/image-teste.png)](https://postimg.cc/hQDWcSfK"  alt="image_folders"> </p>

O site pode ser acessado através desse [link](https://cats-facts-five.vercel.app/).

# 5. Testes

Foram realizados testes nos componentes, chamadas da API no servidor e no store. Esses testes podem ser encontrados na pasta `test/`. Para executá-los, basta utilizar o comando `npm run vitest` ou `yarn vitest`.

Os testes incluem:

1. **Testes Unitários dos Componentes:**
   - Verificação se os componentes estão sendo renderizados corretamente.

2. **Testes das Chamadas da API:**
   - Verificação se o endpoint da API está sendo chamado com sucesso.
   - Utilização do módulo `nock` para simular chamadas à API.

3. **Testes do Store com Pinia:**
   - Verificação se o store está sendo criado e gerenciado corretamente com Pinia.

# 6. Instalação e configuração

Para começar a trabalhar com o projeto, siga os passos abaixo:

  

## 6.1. Clone o repositório:

O primeiro passo é clonar o repositório do projeto para sua máquina local. Isso pode ser feito executando o seguinte comando no terminal para clonar usando o HTTPS:

```bash

git  clone  https://github.com/jhiltonsantos/cats_facts.git

```

Isso criará uma cópia local do repositório em seu sistema, permitindo que você trabalhe no código e acompanhe as atualizações do projeto.

  
## 6.2. Navegue até o diretório raiz do projeto.

Após clonar o repositório, você precisará navegar até o diretório raiz do projeto para continuar com a instalação e configuração. Isso é necessário para acessar e manipular os arquivos e pastas relacionados ao projeto.


## 6.3. Instale as dependências:

Antes de iniciar o desenvolvimento, é importante garantir que todas as dependências do projeto estejam instaladas corretamente. Isso pode ser feito executando o seguinte comando no terminal, dependendo da sua preferência de gerenciador de pacotes:


Para npm:

```bash

npm install

```

ou, se preferir usar Yarn:

```bash

yarn install

```

Este comando irá instalar todas as dependências listadas no arquivo `package.json` do projeto, garantindo que você tenha acesso a todas as bibliotecas e ferramentas necessárias para o desenvolvimento.

  

## 6.4. Inicie o servidor de desenvolvimento:

Para começar a desenvolver e testar o aplicativo, é necessário iniciar o servidor de desenvolvimento. Este servidor fornece um ambiente local para executar e testar o site em tempo real.

  

Utilize npm:

```bash

npm run dev

```

ou Yarn:

```bash

yarn dev

```

Isso iniciará o servidor de desenvolvimento e permitirá que você comece a acessar o servidor local para desenvolver e testar o projeto.
