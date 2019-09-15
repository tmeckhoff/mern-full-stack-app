const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Employee = require('./employee');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute =
    'mongodb+srv://tara:gRUL0ErIUTidJOyz@cluster0-avcto.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/employees', (req, res) => {
    Employee.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/employees', (req, res) => {
    const employee = new Employee(req.body);

    employee.save((err, employee) => {
        if (err) {
            res.send(err);
        } else {
            res.send(employee);
        }
    });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));