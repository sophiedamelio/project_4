const mongoose = require('mongoose');

const compositionSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	title: String,
	text: String,
	photoUrl: String,
}, {
	timestamps: true
});

module.exports = mongoose.model('Composition', compositionSchema);