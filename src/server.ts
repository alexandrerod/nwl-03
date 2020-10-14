import express from 'express';

import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from '../errors/handler';



//criando uma apliocação e iniciando o express
//só temos uma aplicação por código sempre.

const app = express();

app.use(cors());
//por padrão express não entende json, então:

app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler)

//criando uma rota
//user é um recurso para listar usuarios.
//metodos HTTP(get, post, put, delete)
/*Parametros
-query params: 
    *geralmente usado para buscas onde quero filtrar algo
    * http://localgost:3333/users?search=diego

-route params:
    *também enviados pela nossa rota mas sem os parametros
    *http://localhost:3333/users/1
    *para identificar um recurso e editar e deletar

-body:
    *criar dados, informações complexas

*/




app.listen(3333);

/**
 *node por si só não suporta typescript(instalar as dependencias no terminar)
 yarn add typescript -D.

 * node funciona em um fluxo de requisição e resposta.
 * o express é um framework em node que ajuda a ligar com essas requisições
 *vou conseguir acessar o backend da aplicação acessando localhost.3333
 */

/**
 * cada linha de retorno do orm é uma instancia da classe
 * que representa a tabela no banco de dados
 * no orm uma classe js representa a tabela do banco de dados.
 *
 *orm - objetctin relational mapping - relaciona as nossas classes
 com as tabelas no banco de dados
 */


 //miagrtions - um controle de versão do banco de dados