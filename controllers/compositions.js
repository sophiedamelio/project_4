const Composition = require('../models/composition');

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    index,
	update,
	deleteComposition
}

function create(req, res) {
	
	console.log(req.file, "<--- req.file")
	console.log(req.body.title, "<--- req.body in the vcreate ctrl")

	const filePath = `${uuidv4()}${req.file.originalname}`;
	const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer}

	s3.upload(params, async function(err, data) {
		if(err) return res.status(400).json({err})

		try {
			let composition = await Composition.create({
				title: req.body.title,
				user: req.user,
				text: req.body.text,
				photoUrl: data.Location,
				notes: req.body.notes
			})
			composition = await composition.populate('user')

			res.status(201).json({composition})
		} catch(err){
			console.log(err, "Error (create ctrl)")
			res.status(400).json({err})
		}
	})
}


function update(req, res){
	console.log(req, "<--- req in the update funcction controller")
	console.log(req.body, "<--- req.body in the update controller function")
	console.log(req.file, "<--- req.file in the update ctrl")

	const filePath = `${uuidv4()}${req.file.originalname}`;
	const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer}

	s3.upload(params, async function(err, data) {
		if(err) return res.status(400).json({err})

		try {
			let composition = Composition.findByIdAndUpdate({
				_id: req.body._id,
				title: req.body.title,
				user: req.user,
				text: req.body.text,
				photoUrl: data.Location,
				notes: req.body.notes
			})
			//composition = await composition.populate('user')
			console.log(composition, "<-- composition in update ctrl")

			composition.save()
			res.status(201).json({composition})
			
		} catch(err){
			console.log(err, "Error (update ctrl)")
			res.status(400).json({err})
		}
	})
}


async function index(req, res) {
	try {
		const compositions = await Composition.find({user: req.user._id});
		console.log(compositions, "<-- compositions")
		//console.log(user, "<--- user in the comp ctrl index")
		console.log(req.user._id, "<--- req.user._id in the comp ctrl index")

		res.status(200).json({compositions: compositions});
	} catch(err) {
		res.status(400).json({err})
	}
}

async function deleteComposition(req, res){
	try {
		console.log(req.params.compId, "<--- compId to be deleted")
		const success = await Composition.deleteOne({_id: req.params.compId})
		res.status(200).json(success);
	}catch(err){
		res.status(400).json({err})
	}
}