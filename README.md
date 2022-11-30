<p align="center">
  <img src="./github/assets/logo.png" alt="logo" height="150"/>
</p>

<h3 align="center">
  WaiterApp
</h3>

<p align="center">
  Um app de delivery alternativo Open-Source <br />Desenvolvido com React Native e Expo.
</p>

<p align="center">
   <img src="./github/assets/app.png" alt="Banner" height="600" />
 </p>

Anteriormente a pandemia, os **aplicativos de delivery** já demonstravam um características que poderia alterar o **comportamento do consumidor**: a flexíbilidade de solicitar comida para os restaurantes gerou um movimento ainda maior e cada vez mais frequentes de deliverys. E isso provocou um novo perfil de consumo para o **segmento gastronômico**, especialmente para os estabelecimentos físicos.

A principal visão acerca de aplicações de delivery entorno do mercado de software é bem vasta, visto que possue inúmeros aplicativos que tem como objetivo auxiliar, de alguma forma, a compra de produtos alimentíceos.

Contudo, para estar investindo em plataformas de delivery, é necessário que o dono do estabelecimento possua um "capital de giro" considerável, para não sofrer prejuízos, pois, em alguns aplicativos que criaram um grande monopólio no setor, como o "Ifood" e o "Rappi", possuem taxas de utilização que podem variar em até 25% do preço do produto ([Abrasel](https://abrasel.com.br/revista/mercado-e-tendencias/restaurantes-adotam-sistema-proprio-de-entrega-para-fugir-de-taxas-de-apps/) - 2022).

Conclui-se que a necessidade da criação de um sistema que integre o consumidor-final com o restaurante é de alta valia, já que permitirá que o consumidor esteja solicitando um produto rapidamente.

A partir disto, a fomentação de outras soluções para aplicativos de delivery tornou-se cada vez maior. A resoluçãp de tal problemática é apresentada através do desenvolvimento do aplicativo "Waiter**App**”, cujo objetivo principal é facilitar a integração entre o consumidor final, que terá a possibilidade de estar solicitando o seu produto através da plataforma "Mobile" e, em tempo real, as informações que dizem respeito ao pedido serem visualizadas dentro do sistema interno do restaurante, tal sistema será uma aplicação "WEB".

Dentre as O sistema irá possuir diversas funcionalidades, dentre elas a possibilidade do cliente final estar realizando a compra de comida a partir do App Mobile, a visualização do histórico de pedios e a integração em tempo real dos pedidos dentro do Dashboard do Restaurante.

## Tecnologias Utilizadas

**Mobile:** React, React Native, Typescript, Expo, Styled-Components

**Client:** React, Vite, Styled-Components, Web-Sockets.

**Server:** Node, Express.

**Database:** PostgreSQL.

## Funcionalidades

- Solicitação de Pedidos
- CRUD de Produtos
- Cross platform

## API Reference

### Categorias

#### Listar categorias

```bash
  GET /categories
```

#### Criar categoria

```bash
  POST /categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `icon`      | `string` | **Obrigatório**. Ícone para a categoria |
| `name`      | `string` | **Obrigatório**. Nome para a categoria |

#### Excluir categoria

```bash
  DELETE /categories/:categoryId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id para encontrar o item |

### Produtos

#### Listar produtos

```bash
  GET /products
```

#### Criar produto

```bash
  POST /products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `imagePath`    | `string` | **Obrigatório**. Arquivo de imagem |
| `name`         | `string` | **Obrigatório**. Nome do Produto |
| `description`  | `string` | **Obrigatório**. Descrição do Produto |
| `price`        | `string` | **Obrigatório**. Preço do Produto |
| `category`     | `string` | **Obrigatório**. Id da Categoria para o Produto |
| `ingredients`  | `string` | **Obrigatório**. Ingredientes do Produto |

#### Obter produto por categoria

```bash
  GET /categories/:categoryId/products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id da Categoria para encontrar o item |

#### Deletar produto

```bash
  DELETE /products/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do item |

### Pedidos

#### Listar pedidos

```bash
  GET /orders
```

#### Criar pedido

```bash
  POST /orders
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `table`      | `number` | **Obrigatório**. Número da mesa ou pedido       |
| `products`      | `string` | **Obrigatório**. ID e quantidade do produto      |


#### Alterar status do pedido

```bash
  PATCH /orders/:orderId'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderId`      | `number` | **Obrigatório**. ID do pedido       |
| `status`      | `enum` | **Obrigatório**. Status do Pedido - 'WAITING', 'IN_PRODUCTION', 'DONE    |

#### Deletar ou Alterar Status do Pedido

```bash
  DELETE /orders/:orderId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do pedido |

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jp-prud/Waiter-App-Relacional
```

Entre no diretório do projeto

```bash
  cd waiter-app-relacional
```

Acesse o diretório do back-end do projeto

```bash
 cd back-end
```

Baixe o Docker e instale através deste link

```bash
https://docs.docker.com/desktop/install/windows-install/
```

Instale e Rode os schemas do BD - Schema dentro do repositório
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Após estes comandos, siga o processo abaixo para criar o Banco de Dados
```
docker exec -it pg bash

psql -U root root

CREATE DATABASE waiterapp;
```

Rode as criações de tabela presente dentro do arquivo de `Schema.sql` prasente dentro da pasta chamada `database`.

Instale as dependências e inicie o projeto.

```bash
  yarn start
```

Para rodar o Mobile, acesse a pasta "App" a partir do diretório raiz do projeto
```bash
 cd app
```

Após isto, faça o download do aplicativo do Expo através da loja de aplicativos e rode o comando abaixo e aponte seu dispositivo para o QrCode gerado.

```bash
 yarn expo
```

## Autores

- [@jpprud_](https://github.com/jp-prud)
