# Cartão de Crédito Válido - CatLovers

![Logo Catlovers](src/images/CatLoversLogo.png)

## Índice


   * [1- Introdução](#introdução)
   * [2- Funcionamento](#funcionamento)
   * [3- UX](#UX)
   * [4- Aprendizado](#aprendizado)
   * [5- Deploy](#deploy)



## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


## 2. Funcionamento

 O sistema consiste em uma página de apresentação e checkout, onde o usuário deverá colocar dados do cartão no input que irá mascarar os primeiros 12 números mostrando apenas os quatro últimos, validando após clicar no botão.

## 3. UX

Os usuários da aplicação são pessoas que desejam assinar uma Signature Box temática desenvolvida especialmente pra gatinhos e seus donos no conforto do seu lar. Os Usuários do ssitema desejam aceder ao serviço oferecido de forma segura, com a certeza de que seus dados serão efetivamente válidos e ocultados.

A aplicação CatLovers permite que os usuários possam validar e mascarar simultaneamente seu cartão de crédito através de um formulário que permite ingressar seus dados e um botão que os valida.

## 4. Aprendizado

Meu objetivo principal é trabalhar lógica de programação me apropriar do JS, seja no entedimento básico da leitura da estrutura do código até a sintaxe.

 
## 5. Deploy
Conheça a aplicação através do link https://nannayusuf.github.io/card-validation.v2/

