const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const products = [
  { _id: 1, name: 'Gaming Laptop', price: 75000 },
  { _id: 2, name: 'Wireless Mouse', price: 1200 },
  { _id: 3, name: 'Mechanical Keyboard', price: 3500 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log('Server running on port 5000'));