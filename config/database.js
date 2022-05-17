const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

mongoose.connect(
  connectionString,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});