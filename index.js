import { addNewRace } from './controllers/raceController.js';
import { addNewClass } from './controllers/classController.js';
import app from "./configs/expressConfig.js";
import Mongoose from "mongoose";

// Connect to MongoDB
Mongoose.connect("mongodb+srv://God:admin@munchkindb.cb182fh.mongodb.net/MunchkinDB?retryWrites=true&w=majority")

Mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

Mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});


// home page

app.get("/", (req, res) => {
    res.render('homeView', {
    });
});


// Insert race to db end-points here

app.post("/raceAdd", addNewRace, (req, res) => {
    res.render('raceAddView', {
    });
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