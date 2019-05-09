const pollsRouter = require('express').Router();
const lista = require('./json.json');
const polls = [require('./json.json')];

pollsRouter.get('/', (request, response, next) => {
    response.json(polls);
    /*response.render('index',{
        title:'express',
        name: 'Bucky',
        videodata: lista
    });*/
});

module.exports = pollsRouter;