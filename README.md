# Talent - 1Mage

Projeto realizado para teste prático do processo seletivo [1Mage][1], focando no Desenvolvimento Front-end Mobile, utilizando React Native e suas dependências.
O teste consiste em realizar o desenvolvimento de um app em React Native seguindo o template de exemplo disponibilizado em no [Figma][2], com atenção aos mínimos detalhes, implementando boas práticas no desenvolvimento do aplicativo, seguindo boas práticas de versionamento e branching.

## Elementos:

- [x] Aplicação desenvolvida utilizando **Expo**;
- [x] Estilização utilizando **NativeBase**;
- [x] Arquivo global para definição de Temas: **Cores globais** e **Fontes globais**;
- [x] Uso de SVG: **React Native SVG**;
- [x] Componentes a partir de SVGs: **React Native SVG Transformer**;
- [x] Uso de fontes: **Expo Font** (*Poppins*, *Roboto* e *Metropolis*); 
- [x] Telas: **Login**, **Sign Up**, **Home** e **Profile**;
- [x] Navegação utilizando **React Navigation**: **Stack Navigator**, **Native Stack Navigator** e **Bottom Tabs Navigator**;
- [x] Rotas de navegação entre as telas: **Navigation Container** e **Routes**;
- [x] Componentes para organização e reuso: **Typescript**;
- [x] Uso de tipagens para componentes: **Typescript** ;
- [ ] Autenticação por meio de *ContextApi* e composição de *Hook* personalizado;
- [ ] Banco de dados interno: *RealmDB*;
- [ ] Autenticação por meio de *ContextApi* e composição de *Hook* personalizado;
- [ ] Conexão *Rest API*: Listagem de filmes do *The Movie Database (TMDB)*;


### Inicialização do projeto:
```
expo init my-app
```

### A instalação dos pacotes ocorre por meio do Yarn:
Acesso ao diretório criado:
```
cd my-app
```
Inicialização do projeto:
``` 
yarn start 
```

### Importação do Native Base:
Instalação:
```
yarn add native-base
```
Instalação de outras dependências:
```
expo install react-native-safe-area-context@3.3.2
```

### Para uso do SVG:
```
expo install react-native-svg
```
Para usar SVG como componente:
```
yarn add --dev react-native-svg-transformer
```

### Expo Font e fontes do projeto:
```
npx expo install expo-font
```
Fonte Poppins:
```
expo install @expo-google-fonts/poppins
```
Fonte Roboto:
```
expo install @expo-google-fonts/roboto
```
*Obs.: Fonte Metropolis, por não ser disponibilizada pelo Google Fonts, foi importada diretamente da pasta de fontes baixadas.*


### React Navigation e suas dependências:
```
yarn add @react-navigation/native
```
Dependências para o Expo:
```
npx expo install react-native-screens react-native-safe-area-context
```
Stack Navigator:
```
yarn add @react-navigation/native-stack
```
```
yarn add react-native-gesture-handler
```
Bottom Tabs Navigator:
```
yarn add @react-navigation/bottom-tabs
```

#
Última atualização em: *25 de junho de 2023*

[1]: https://www.linkedin.com/company/1mage/
[2]: https://www.figma.com/file/N8Q0zrwfGXtyv1b03nkbX8/Untitled?type=design&node-id=0%3A1&mode=design&t=o7yv698pxdVgyEui-1


