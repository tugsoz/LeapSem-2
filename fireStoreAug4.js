const { initializeApp, cert, ref, getDownloadURL } = require("firebase-admin/app");
const { getStorage } = require('firebase-admin/storage');
const { v4: uuid_v4 } = require('uuid')
const http = require("http");
const serviceAccount = require("./serviceAccountKey.json");

  initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'gs://sem-2-9f64c.appspot.com'
});

const bucket = getStorage().bucket();
const filePath = "./random.jpeg";

const upload = async (filePath) => {
  let uuid = uuid_v4();
  console.log(uuid);
  let data = await bucket.upload(filePath, {
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: uuid
      }
    }
  });
  let file = data[0]
  return  `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media&token=${uuid}`
}
upload(filePath);

http.createServer(async(req, res) => {
  try{
    let url = await upload(filePath);
    console.log(url);
  } catch(err){
    console.log(err);
  }
}).listen(8080);
console.log('server running', );