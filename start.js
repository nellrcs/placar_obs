const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

io.on('connection', (client) => {
    console.log("Ciente Conected ;) ");
});

app.post('/', (req, res) => {
    io.emit('dataPlacar', req.body);
    res.end('Sucesso');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/main.css', (req, res) => {
    res.sendFile(__dirname + '/css/main.css');
});

app.get('/background.png', (req, res) => {
    res.sendFile(__dirname + '/img/background.png');
});

app.get('/jquery-2.2.4.min.js', (req, res) => {
    res.sendFile(__dirname + '/js/jquery-2.2.4.min.js');
});

app.get('/painel', (req, res) => {
    res.sendFile(__dirname + '/painel.html');
});

const porta = 9873;
console.log('Server on!');
console.log(`Main page http://127.0.0.1:${porta}/`);
console.log(`Painel page http://127.0.0.1:${porta}/painel`);
server.listen(porta);


