import { app2 } from "./firebaseStore";
import { storage } from "./firebaseStore";
import {useState} from "react";
import { ref, uploadBytes } from "firebase/storage";
import "./Pouf.css"



function Upload() {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(()=> {
      alert("Image Uploaded")
    })
  };

  return (
    <div className="poulet">
      <h1>Drop the file, et appuyer sur Upload Image</h1>
      <p>Un message de confirmation apparaitra</p>
      <input type="file" className="image" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
      <button onClick={uploadImage}>Upload image</button>
      <p>MERCI</p>
    </div>
  );
}

export default Upload;
