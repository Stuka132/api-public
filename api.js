const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Middleware para lidar com a segurança do CORS
app.use(cors());

// Lista de tarefas (dados em memória)
let tasks = [];

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  // Verifica se os dados foram fornecidos
  if (!title || !description) {
    return res.status(400).json({ error: 'Informe o título e a descrição da tarefa.' });
  }

  // Cria uma nova tarefa
  const newTask = {
    id: tasks.length + 1,
    title,
    description
  };

  // Adiciona a nova tarefa à lista
  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Rota para remover uma tarefa pelo ID
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  // Procura a tarefa pelo ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  // Verifica se a tarefa existe
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  // Remove a tarefa da lista
  tasks.splice(taskIndex, 1);

  res.sendStatus(204);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
