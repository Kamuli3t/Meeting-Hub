import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.data;

    const client = await MongoClient.connect(
      "mongodb+srv://kamuli3t:map5OZC2aY7ofRjh@cluster0.fs7ysyu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetup = db.collection("Meetups");

    const result = await meetup.insertOne(data);

    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default handler;
