const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Informe o título e a descrição da tarefa.' });
  }

  // Cria uma nova tarefa
  const newTask = {
    id: tasks.length + 1,
    title,
    description
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tasks.splice(taskIndex, 1);

  res.sendStatus(204);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
