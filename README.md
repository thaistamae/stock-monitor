
# Sobre o Projeto
O monitor de ações foi criado para o acompanhamento das principais ações do mundo.

Ele permite o acompanhamento dos preços em tempo real e as atuais variações comparadas ao dia anterior.
  
## Como funciona?
 
O monitor de ações possui uma tela principal de monitoramento, onde são analisadas as seguintes informações das ações: Nome da Empresa, Ticker, Preço Atual e Variação Atual.

Para saber mais sobre determinada ação, basta clicar no botão detalhes, localizado ao lado da ação.

Siga as instruções abaixo para rodar o projeto:
1. Faça um clone do repositório incluindo no seu terminal o comando: `git clone https://github.com/thaistamae/stock-monitor.git`   

2. Escreva o comando `npm install` no terminal, para instalar as dependênciais

O projeto foi desenvolvido utilizando a API Yahoo Finance, siga o passo 3 e 4 para conectar a API:

3. Acesse o site https://rapidapi.com/apidojo/api/yh-finance/ e faça login para gerar sua API KEY

4. Inclua a API KEY gerada no arquivo .env "REACT_APP_API_KEY=API_KEY_GERADA"

5. Escreva o comando `npm start` no terminal, para rodar o programa localmente

É possível modificar as ações que aparecem no monitor, alterando os arquivos "StockDetails.js" e "StockList.js". Após o "symbol :" inclua os tickers das ações que você gostaria de analisar.

## Desenvolvido por 

Thais Tamae

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/thaistamae)](https://github.com/thaistamae) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thaistamae/)](https://www.linkedin.com/in/thaistamae/)
