const mongoose = require('mongoose');

const compositionSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	title: String,
	capo: String,
	text: String,
	notes: String
}, {
	timestamps: true
});

module.exports = mongoose.model('Composition', compositionSchema);