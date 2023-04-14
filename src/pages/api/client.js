import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://zaynalateef:vyR9n19QAkxaxsSG@cluster0.tupjikr.mongodb.net/test';
const client = new MongoClient(uri);

// Define the User interface
const User = {
  id: {type: "number"},
  first_name: {type: "string"},
  last_name: {type: "string"},
  email: {type: "email"},
};

// Define the Doc interface
const Doc = {
  id: 0,
  user_id: 0,
  title: "",
  body: "",
  created_at: new Date()
};

async function setupDatabase() {
  try {
    await client.connect();
    const database = client.db('notiom');

    // Create the users collection with the specified schema
    const users = database.collection<User>('users');
    await users.createIndex({ id: 1 }, { unique: true }); // ensure the id field is unique
    console.log('Users collection created successfully.');

    // Create the docs collection with the specified schema
    const docs = database.collection<Doc>('docs');
    await docs.createIndex({ id: 1 }, { unique: true }); // ensure the id field is unique
    console.log('Docs collection created successfully.');

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

setupDatabase().catch(console.error);
