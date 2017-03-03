import express      from 'express';
import logger       from 'morgan';
import path         from 'path';
import compression  from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression()); // Ligar a compressão gzip
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/hello', function(req, res) {
  res.send('Hello World');
});

app.get('/alunos', function(req, res) {
  var alunos = [{nome: 'Fulano', matricula: 123}];
  res.json(alunos);
});

app.listen(3000, function() {
  console.log('Servidor ouvindo na porta 3000');
});