import { MongoClient, ObjectId } from "mongodb";

const Doc = {
  _id: ObjectId,
  user_id: number,
  title: string,
  body: string,
  created_at: Date
};

async function getDoc(docId) {
  const uri = "mongodb+srv://zaynalateef:vyR9n19QAkxaxsSG@cluster0.tupjikr.mongodb.net/test";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("insertDB");
    const docs = database.collection<Doc>("docs");
    const doc = await docs.findOne({ _id: new ObjectId(docId) });
    console.log(doc);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

getDoc("<docId>").catch(console.dir);
