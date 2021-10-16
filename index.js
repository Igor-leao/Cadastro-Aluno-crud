const express = require('express');

const server = express();

server.use(express.json());

const cars = ['Monza', 'Corsa', 'Tipo', 'Palio'];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}; `);

  next();

  console.log('Request funcionando');

  console.timeEnd('Request');
});

function checkCarsExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'car is required' });
  }
  return next();
} 
  
function checkCarsInArray(req, res, next) {
  const cars = cars[req.params.index];
  if (!cars) {
    return res.status(400).json({ error: 'car does not exists' });
  }

  req.cars = cars;

  return next();
}

server.get('/cars', (req, res) => {
  return res.json(cars);
})

server.get('/cars/:index', checkCarsInArray, (req, res) => {
  return res.json(req.geek);
})

server.post('/cars', checkCarsExists, (req, res) => {
  const { name } = req.body;
  cars.push(name);
  return res.json(cars);
})

server.put('/cars/:index', checkCarsInArray, checkCarsExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  cars[index] = name;
  return res.json(cars);
});

server.delete('/cars/:index', checkCarsInArray, (req, res) => {
  const { index } = req.params;
  cars.splice(index, 1);

  return res.send();
});


server.listen(3000);