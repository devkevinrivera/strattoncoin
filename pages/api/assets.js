import { GetAssetCollection } from './utils/getAssetConnection';

export default function handlerAssets(req, res) {
  if (req.method === 'GET') {
    getAssets(req, res);
  }
}

function getAssets(req, res) {
    try {
        GetAssetCollection(res);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}