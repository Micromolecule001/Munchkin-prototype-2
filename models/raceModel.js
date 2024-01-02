import mongoose from "mongoose";

const RaceSchema = new mongoose.Schema({
    raceId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

export default mongoose.model('Race', RaceSchema);