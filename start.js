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

app.get('/PLACAR.png', (req, res) => {
    res.sendFile(__dirname + '/PLACAR.png');
});

app.get('/jquery-2.2.4.min.js', (req, res) => {
    res.sendFile(__dirname + '/jquery-2.2.4.min.js');
});

app.get('/painel', (req, res) => {
    res.sendFile(__dirname + '/painel.html');
});

server.listen(9873);

