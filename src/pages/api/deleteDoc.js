import { MongoClient, ObjectId } from "mongodb";

const Doc = {
  _id: null,
  user_id: 0,
  title: "",
  body: "",
  created_at: new Date()
};

async function deleteDoc(docId) {
  const uri = "mongodb+srv://zaynalateef:vyR9n19QAkxaxsSG@cluster0.tupjikr.mongodb.net/test";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("insertDB");
    const docs = database.collection<Doc>("docs");
    const result = await docs.deleteOne({ _id: new ObjectId(docId) });
    console.log(`Deleted ${result.deletedCount} document(s).`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

deleteDoc("<docId>").catch(console.dir);
