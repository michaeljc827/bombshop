const next = require('next')
const routes = require('./routes')
const app = next({dev: true});
const handler = routes.getRequestHandler(app);

const express = require('express')
app.prepare().then( () => { 
    express().use(handler).listen(3000);
});
