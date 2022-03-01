const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://sophiedameSummerAllergies15@cluster0.stz8e.mongodb.net/songSpace?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});