// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ response: "Hello From DSCE" }));
app.get('/will', (req, res) => res.json({ response: "Hello World" }));
app.get('/ready', (req, res) => res.json({ response: "Great!, It works!" }));

module.exports = app;
