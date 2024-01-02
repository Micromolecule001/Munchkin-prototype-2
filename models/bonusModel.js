import mongoose from "mongoose";

const BonusSchema = new mongoose.Schema({
    bonusId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    bonus: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    restriction: {
        type: Array,
        required: false
    },
});

export default mongoose.model('Bonus', BonusSchema);