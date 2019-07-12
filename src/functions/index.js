import * as functions from "firebase-functions";
import express from "express";
import bodyParser from 'body-parser';
import Config from './config';

import test from './test';

// Initialize http-server
const app = new express();
app.use(bodyParser.urlencoded({
    extended: false
}))

// Setup json parser
app.use(bodyParser.json());

exports.api = functions.https.onRequest(app);

// Binding path
app.use('/test/', test);

// Routes
app.get('*', (req, res) => {
    res.send(`ezBot API Entry(${Config.env})`);
});

app.post('*', (req, res) => {
    res.send(`ezBot API Entry(${Config.env})`);
});

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function clientErrorHandler(err, req, res, next) {

    if (req.xhr) {
        res.status(500).send({
            err: '[ezBot] Unknown Error!'
        });
    } else {
        next(err);
    }
}

function logErrors(err, req, res, next) {
    if (err.mapped) {
        err.message = err.mapped();
    }
    if (err.stack) {
        console.error('err code: ', err.code, '\nstack:', err.stack);
    }
    if (err.message) {
        console.error('err code: ', err.code, '\nmessage:', err.message);
    }
    next(err);
}

function errorHandler(err, req, res, next) {
    let status = err.code || 500;
    if (status.toString().length > 3) {
        status = status.toString().subString(0, 3);
    }
    res.status(status);
    res.send({
        status,
        errors: {
            message: err.message,
            code: err.code
        }
    });
}