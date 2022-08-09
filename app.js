const express = require('express');
const app = express();
const path = require('path');
const { buildDatabase } = require('./buildDatabase');
const { queryDatabase } = require('./queryDatabase');

const PORT = process.env.PORT || 3000;

async function main() {
  await buildDatabase();
}
main();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, 'public')));
});

app.post('/', async (req, res) => {
  const { username, password } = req.body;
  let payload = await queryDatabase(username, password);

  await setTimeout(() => {
    if (payload) {
      res.send({ payload });
      return;
    }
    res.send({ loggedIn: false });
    return;
  }, Math.random() * 1000);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}.`);
});
