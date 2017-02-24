# Desenvolvimento

#Configurações Front ##

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


### Configuraçoes Play ###

#### Configurando Dependências do Play ####
* IDE Homologada: IDEA 2017
* Instalar o plugin do Scala para dar suporte ao Play
* Instalar o Plugin SBT Commands

* Depois disso execute o "dependencies.sh"

* Marque os diretórios app/app e app/conf como "Source Root"

#### Crie o Banco de Dados com MySQL ####
* Mysql - (5.6.x) - instalar com usuário root e senha 1 
* > Para usuários linux, [instalar o mysql](http://www.k19.com.br/artigos/como-instalar-o-mysql-server-no-ubuntu-13-10/) com
* > $ sudo apt-get install mysql-server
* > A instalação no Ubunto 16 disponível na Amazon usa o mysql 5.7

* Criar um banco no MySql chamado reembolso
* $ mysql -u root -h localhost -p
* $ CREATE DATABASE reembolso;


#### Executando o sistema ####
* Para executar o sistema no diretório raiz do sistema executar run.sh
* Acessar http://127.0.0.1:9000




