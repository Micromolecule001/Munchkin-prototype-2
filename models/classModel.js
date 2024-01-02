import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    classId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    abilities: {
        type: Array,
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
});

export default mongoose.model('Class', ClassSchema);