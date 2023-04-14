import { MongoClient, ObjectId } from "mongodb";

const Doc = {
  _id: { type: "ObjectId" },
  user_id: { type: "number" },
  title: { type: "string"},
  body: {type: "string"},
  created_at: {type: "Date"}
};

async function updateDoc(docId, newTitle, newBody) {
  const uri = "mongodb+srv://zaynalateef:vyR9n19QAkxaxsSG@cluster0.tupjikr.mongodb.net/test";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("insertDB");
    const docs = database.collection<Doc>("docs");
    const result = await docs.updateOne(
      { _id: new ObjectId(docId) },
      {
        $set: {
          title: newTitle,
          body: newBody,
        },
      }
    );
    console.log(
      `${result.matchedCount} document(s) matched the query criteria.`
    );
    console.log(
      `${result.modifiedCount} document(s) was/were updated successfully.`
    );
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

updateDoc("<docId>", "new title", "new body").catch(console.dir);
