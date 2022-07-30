# {reprograma} Projeto final (On16) - Recife Resiste

## O projeto:

O projeto será uma API criada para catalogar os Imóveis Especiais de Preservação (IEP) do Recife, a fim de ter uma memória sobre a história que a cidade tem e poder acompanhar se esses imóveis continuam resistindo. Embora a Prefeitura da Cidade do Recife (PCR) tenha a lei (Nº 16.284 de 1997) de proteção desses imóveis, a verticalização desenfreada, além das especulações imobiliárias, transformam as paisagens geográficas do Recife num mar de prédios ou construções, onde o novo apaga o antigo e a história vai se perdendo entre as ruas e bairros da cidade

Os Imóveis Especiais de Preservação são exemplares isolados significativos para o patrimônio histórico, artístico e cultural da cidade e sua proteção é dever do Município e da comunidade, nos termos da Constituição Federal e da Lei Orgânica Municipal. A lista desses IEP pode ser encontrada na internet, por meio da Secretaria de Política Urbana e Licenciamento da Prefeitura do Recife, mas novos imóveis podem ser classificados como tal, mediante a estudos realizados pela PCR e os órgãos competentes indicados por ela

### Tecnologias e pacotes utilizados

1. Node.js
1. MongoDB
1. Git
1. Mongo Atlas
1. Heroku
1. express
1. nodemon
1. dotenv-safe
1. mongoose
1. swagger

### Rotas/Endpoints

| Rotas | Resultado | 
|--- |--- |
| GET/ieps | encontrar todos os IEPs | 
| GET/bairro | filtrar IEPs por bairro | 
| GET/zona | filtrar IEPs por zona da cidade | 
| POST/add | cadastrar novo IEP | 
| PATCH/:id | atualizar IEP por id | 
| DELETE/:id | deletar IEP por id |

### Instalação

1. Clonar o repositório
git clone https://github.com/mmarimonteiro/recifeResiste
1. Entrar na pasta do repositório
cd recifeResiste
1. Instalar as dependências
npm install
1. Executar o servidor
npm start

## Contribua com o projeto:

1. Faça o fork do projeto;
1. Crie uma branch para realizar suas alterações: git checkout -b nova-branch
1. Commit as alterações feitas e abra um pull request
