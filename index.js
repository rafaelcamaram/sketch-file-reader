const express = require('express');
const bodyParser = require('body-parser');
const sketchFile = require('sketch-file');

const app = express();

app.set('port', 3000);

app.use(bodyParser.json());

app.listen(3002, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});

app.get('/document', async (req, res) => {
  const readFile = async () => {
    const file = await sketchFile.readSketchFile(
      './data/sketchfilesample.sketch'
    );
    return file;
  };
  const result = await readFile();
  return res.json(result);
});
