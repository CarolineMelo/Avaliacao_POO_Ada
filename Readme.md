
<h1 align="center">Avaliação de Nivelamento ADA - Projeto em Grupo</h1>
<h4 align="center">Bem-vindo ao repositório da Avaliação de Nivelamento ADA! </h4>

## :pushpin:*Descrição do Projeto*
<p>O projeto de Avaliação de Nivelamento ADA é parte integrante do curso de programação. Ele foi concebido com o intuito de mapear o conhecimento prévio dos alunos ingressantes no curso, permitindo assim uma adaptação mais precisa do conteúdo lecionado.</p>


## :pushpin:*Conteúdo do Repositório*
 <h3>Questões que compõem a atividade são as seguintes:</h3>
 

1. Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
   dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
   trabalho. Escreva os seguintes métodos para esta classe:

    * media: calcula a média final do aluno cada prova tem peso 2,5 e o trabalho tem peso 2
    * final: calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)

2. Escreva uma classe Data cuja instância (objeto) represente uma data. Esta classe deverá dispor dos
   seguintes métodos:

    * construtor: define a data que determinado objeto (através de parâmetro), este método verifica se a
      data está correta, caso não esteja a data é configurada como 01/01/0001

    * compara: recebe como parâmetro um outro objeto da Classe data, compare com a data corrente e
      retorne:
        * true se as datas forem iguais;
        * false se as datas forem diferentes;

    * getDia: retorna o dia da data

    * getMes: retorna o mês da data

    * getMesExtenso: retorna o mês da data corrente por extenso

    * getAno: retorna o ano da data

3.  Escreva uma classe em que cada objeto representa um vôo que acontece em determinada data e em
    determinado horário. Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação
    das vagas. A classe deve ter os seguintes métodos:

    * construtor: configura os dados do vôo (recebidos como parâmetro): número do vôo, data (para armazenar
      a data utilize um objeto da classe Data, criada na questão anterior);

    * proximoLivre: retorna o número da próxima cadeira livre

    * verifica: verifica se o número da cadeira recebido como parâmetro está ocupada

    * ocupa: ocupa determinada cadeira do vôo, cujo número é recebido como parâmetro, e retorna
      verdadeiro se a cadeira ainda não estiver ocupada (operação foi bem sucedida) e falso
      caso contrário

    * vagas: retorna o número de cadeiras vagas disponíveis (não ocupadas) no vôo

    * getVoo: retorna o número do vôo

4. Escreva uma classe herdeira à voo criada na lista de exercícios anterior, que permita definir quantas
   cadeiras existem no máximo no voo e se dividir o avião em ala de fumantes e não fumantes. Para isto esta
   classe deve acrescentar os atributos necessários e adicionar os seguintes métodos:

    * construtor: além dos parâmetros recebidos pelo construtor da superclasse, receberá também
      como parâmetros o número de vagas do voo e quantas cadeiras serão destinadas para
      fumantes

    * maxVagas: determina o número máximo de cadeiras no voo

    * cadeirasFumantes: determina quantas cadeiras estão destinadas aos fumantes (as demais serão
      automaticamente destinadas aos não fumantes); as cadeiras dos fumantes serão
      sempre as últimas do avião

    * tipo: recebe como parâmetro o número da cadeira e retorna ‘F’ se for uma cadeira para
      fumantes e ‘N’ se for para não fumantes

   => Os métodos proximoLivre, verifica e ocupa da superclasse devem ser adaptados para tratar o número
   máximo de vagas informado, ao invés do número fixo de 100.


5. Crie um programa de controle de estoque utilizando programação orientada a objetos com as classes
   "Produto" e "Estoque" descritas acima. Implemente a funcionalidade para adicionar produtos ao estoque,
   remover produtos por código, alterar produtos por código, buscar produtos por código, listar todos os
   produtos no estoque e calcular o valor total do estoque. Crie instâncias de produtos e adicione-os ao
   estoque. Teste os métodos implementados através de um menu no console, permitindo que o usuário
   realize as operações de controle de estoque.

Contatos
Em caso de dúvidas, sugestões ou qualquer outro assunto relacionado a atividade, você pode entrar em contato com os membros da equipe responsável:

# Equipe

## Francieli Alvarenga
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil%20do%20Membro-blue)](https://www.linkedin.com/in/francieli-alvarenga/)

## Caroline Melo
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Caroline%20Melo-blue)](https://www.linkedin.com/in/carolinemelo-dev/)

## Vinicius Teixeira
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vin%C3%ADcius%20Teixeira%20Saraiva-blue)](https://www.linkedin.com/in/vinicius-teixeira-saraiva/)

## Laurieny Jayne Estevo
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Laurieny%20Jayne%20Estevo-blue)](https://www.linkedin.com/in/laurieny-jayne-estevo-developer/)

## Bruno Marques
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil%20do%20Membro-blue)](https://www.linkedin.com/in/b-marques/)


## :blue_heart:*Agradecimentos especiais*
<p>Gostaríamos de expressar nosso profundo agradecimento ao Professor Aguilar, por sua orientação e apoio contínuo durante o módulo. Suas aulas inspiradoras e dedicação à excelência acadêmica nos proporcionaram uma base sólida de conhecimento. Estamos imensamente gratos por suas contribuições para o nosso crescimento educacional.</p>

















