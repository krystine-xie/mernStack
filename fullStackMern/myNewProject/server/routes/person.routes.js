const PersonController = require('../controllers/person.controller'); 

module.exports = function(app) {
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPeople);
    app.post('/api/people/new', PersonController.createPerson);
    app.get('/api/people/:id', PersonController.getPerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);
}