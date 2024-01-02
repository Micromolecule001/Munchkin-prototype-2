import Express from "express";
import Mongoose from "mongoose";
import { addNewRace } from './controllers/raceController.js';
import { addNewClass } from './controllers/classController.js';



// App
const app = Express();

app.set('view engine', 'ejs');
app.use(Express.urlencoded({ extended: true })); // for handling data from HTML-form
app.use(Express.json()); // for JSON
app.use(Express.static('public'));

// Connect to MongoDB
Mongoose.connect("mongodb+srv://God:admin@munchkindb.cb182fh.mongodb.net/MunchkinDB?retryWrites=true&w=majority")

Mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

Mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.use(Express.json());

// home page

app.get("/", (req, res) => {
    res.render('homeView', {
        translation: 'there will be your translation'
    });
});


// Insert race to db end-points here

app.get("/raceAdd", (req, res) => {
    res.render('raceAddView', {
        translation: 'there will be your translation'
    });
});

app.post("/raceAdd", addNewRace);

app.get("/", (req, res) => {
  res.send("Hello World");
});



// Insert class to db end-points here
app.get("/classAdd", (req, res) => {
    res.render('classAddView', {
        translation: 'there will be your translation'
    });
});

app.post("/classAdd", addNewClass);







app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log("Server OK!");
    }
});