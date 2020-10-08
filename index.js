const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sketchFile = require('sketch-file');

const app = express();

const PORT = process.env.PORT || 3004;
app.set('port', PORT);
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
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
