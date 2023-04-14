import { MongoClient } from "mongodb";

const Doc = {
  user_id: 0,
  title: "",
  body: "",
  created_at: new Date()
};

async function createDoc(Doc) {
  const uri = "mongodb+srv://zaynalateef:vyR9n19QAkxaxsSG@cluster0.tupjikr.mongodb.net/test";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("insertDB");
    const docs = database.collection<Doc>("docs");
    const result = await docs.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

const newDoc = {
  user_id: 1,
  title: "My new document",
  body: "This is the body of my new document.",
  created_at: new Date(),
};

createDoc(newDoc).catch(console.dir);
