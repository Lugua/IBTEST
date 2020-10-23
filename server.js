// Section 1
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const log4js = require('log4js');
const helmet = require('helmet');
const compression = require('compression');



global.express = express;

const cfgFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'params.json'), 'utf-8'));


// Section 2
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));



// Load server params
global.config = cfgFile;


const vLog4jsConf = global.config.environment.log4js;
log4js.configure(vLog4jsConf);
const logger = log4js.getLogger(vLog4jsConf.appenders[0]);
global.logger = logger;



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept,Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
app.use(bodyParser.json({
    limit: '25mb',
}));

app.use(helmet());
app.use(compression());

// Rutas generales
app.use(require('./routes/app.js'));

global.cabysProducts = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'cabys.json'), 'utf-8'));

app.listen(global.config.environment.port, () => console.log(global.config.environment.appName, "listening on port: ", global.config.environment.port));
