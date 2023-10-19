import { MongoClient } from "mongodb";
import { BASE_URL_MONGO } from "../constants/db";

export const GetAssetCollection = async (res) => {
    try {
        const client = await MongoClient.connect(BASE_URL_MONGO);
        const db = client.db();
        const collection = db.collection('assets');
        const assetCollectionList = await collection.find().toArray();
        client.close();
        console.log(assetCollectionList)
        return res.status(200).json({
            content: assetCollectionList,
        });
    } catch (err) {
        res.status(500).json({
            error: `Invalid Method: ${err}`,
        });
    }
}