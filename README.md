# Documentação da API

Esta documentação descreve os endpoints disponíveis na API criada com Express e Nodemon para gerenciar tarefas.

## Visão geral

A API permite criar, obter e excluir tarefas. Ela utiliza o formato JSON para representar os dados.

Base URL: `http://localhost:3000`

## Endpoints

### GET /tasks

Este endpoint retorna todas as tarefas cadastradas.

#### Exemplo de requisição

```
GET /tasks
```

#### Exemplo de resposta

```json
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Descrição da tarefa 1"
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "description": "Descrição da tarefa 2"
  },
  ...
]
```

### POST /tasks

Este endpoint permite criar uma nova tarefa.

#### Parâmetros

| Nome         | Tipo   | Descrição                        |
| ------------ | ------ | -------------------------------- |
| `title`      | string | O título da tarefa (obrigatório)  |
| `description`| string | A descrição da tarefa (obrigatório)|

#### Exemplo de requisição

```
POST /tasks
Content-Type: application/json

{
  "title": "Tarefa 3",
  "description": "Descrição da tarefa 3"
}
```

#### Exemplo de resposta

```json
{
  "id": 3,
  "title": "Tarefa 3",
  "description": "Descrição da tarefa 3"
}
```

### DELETE /tasks/:id

Este endpoint permite excluir uma tarefa pelo seu ID.

#### Parâmetros

| Nome | Tipo | Descrição                     |
| ---- | ---- | ----------------------------- |
| `id` | int  | O ID da tarefa a ser excluída |

#### Exemplo de requisição

```
DELETE /tasks/3
```

#### Exemplo de resposta

```
204 No Content
```

## Status de resposta

A API retorna os seguintes códigos de status nas respostas:
```
- 200 OK: Requisição bem-sucedida
- 201 Created: Tarefa criada com sucesso
- 204 No Content: Tarefa excluída com sucesso
- 400 Bad Request: Parâmetros inválidos ou ausentes
- 404 Not Found: Tarefa não encontrada
```
