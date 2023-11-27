import { useState } from "react";
import "./App.css";

import { storage } from "./firebaseConfig/firebase";
import { ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";

function App() {
  const [file, setFile] = useState();

  const handleUpload = async (e) => {
    try {
      // throw new Error('fallo al subir')  // para forzar (simular) un error
      const result = await uploadFile(file);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Upload a file to firebase storage
   * @param {File} file the file to upload
   * @returns {Promise<string>} url of the uploaded file
   */
  const uploadFile = async (file) => {
    const storageRef = ref(storage, `images/${v4()}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  return (
    <>
      <h1>Storage Test</h1>
      <input onChange={(e) => setFile(e.target.files[0])} type="file" />
      <button onClick={handleUpload}>Subir</button>
      <p>link</p>
    </>
  );
}

export default App;
