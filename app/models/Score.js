const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
	score: Number,
	name: String
});


const Score = mongoose.model('Score', ScoreSchema);

export default Score;
