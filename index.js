import { addNewRace } from './controllers/raceController.js';
import { addNewClass } from './controllers/classController.js';
import app from "./configs/expressConfig.js";
import Mongoose from "mongoose";
import { getRacesData } from './controllers/raceController.js';


// ================== Connect to MongoDB ======================

Mongoose.connect("mongodb+srv://God:admin@munchkindb.cb182fh.mongodb.net/MunchkinDB?retryWrites=true&w=majority")

Mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

Mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});


// ======================= Home page ==========================

app.get("/", (req, res) => {
    res.render('homeView', {
    });
});

// ============================================================


// ============ Insert Races to DB end-point here =============

app.get("/raceAdd", (req, res) => {
    res.render('raceAddView', {
    });
});

// post 

app.post("/raceAdd", addNewRace);

// ============================================================


// ==================== Races List page =======================

app.get('/raceList', async (req, res) => {
    const racesArray = await getRacesData();
    
    res.render('raceListView', {
        RacesArray: racesArray,
    });
});

// ============================================================


// ============ Insert Classes to DB end-point here ===========
app.get("/classAdd", (req, res) => {
    res.render('classAddView', {
    });
});

app.post("/classAdd", addNewClass);

// ============================================================


// ==================== Classes List page =====================

app.get('/classList', async (req, res) => {
    const ClassArray = await getRacesData();
    
    res.render('raceListView', {
        ClassArray: ClassArray,
    });
});

// ============================================================




// else ......




// ================= listen to port 3000 ======================

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log("Server OK!");
    }
});