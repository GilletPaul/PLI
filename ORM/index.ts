import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import {users} from  './seeders/users';
import {programs} from  './seeders/programs';
import {exos} from './seeders/exo';

const createProgram = () => {
    programs.map(program => {
        db.program.create(program)
    })
}
createProgram();

const createUsers = () => {
    users.map(user => {
        db.User.create(user)
    })
}
createUsers();

const createExos = () => {
    exos.map(exo => {
        db.Exo.create(exo)
    })
}

app.get('/Users', (req, res) => {
    db.User.findAll({
        include: {
            model: db.groups
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

app.get('/Programs', (req, res) => {
    db.program.findAll().then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

app.get('/Exos', (req, res) => {
    db.exo.findAll().then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

app.get('/Groups', (req, res) => {
    db.groups.findAll().then((result: object) => res.json(result)).catch((err: object) => console.error(err));    
})

app.get('/GroupsMsg', (req, res) => {
    db.groups_msg.findAll().then((result: object) => res.json(result)).catch((err: object) => console.error(err));    
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})