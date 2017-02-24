# Desenvolvimento

# Dependências / Instalações
* Instale o yarnpkg, que é similar ao npm, seguindo este doc: https://yarnpkg.com/lang/en/docs/install/#linux-tab
* Para quem utiliza linux basta informar:
* $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
* $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
* $ sudo apt-get update && sudo apt-get install yarn

## Build
* yarnpkg build

Copiar os arquivos estaticos para o projeto e importar. Exemplo: GR

## Server Fake

* npm install -g json-server
* json-server --watch dataFake/data.json --port 3001


## Para subir o projeto Front em dev execute os seguintes passos
* Vá para o diretório "front" do projeto e execute: $ yarnpkg install
* Para subir o projeto, execute: $ yarnpkg start
* Abra outro terminal e execute: $ json-server --watch keycloakFake/menuServer.json --port 3001

## Frameworks utilizados

Para melhorar o layout
https://react-bootstrap.github.io/introduction.html

https://react-bootstrap.github.io/components.html
