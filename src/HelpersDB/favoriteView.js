import React, { useState } from "react"; 
import { addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase} from "../Helpers/firebaseHelpers";
 
const FavoriteView = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
 
  const addFavorite = async () => {
    addToFirebase(
      { objectToSave: { name, description } },
      "PruebaFavoritos"
    );
  };
 
  const getFavorite = async () => {
    getFromFirebase(

      "PruebaFavoritos"
    );
   
  };
 
  const updateFavorite = async () => {
    updateFromFirebase(
        "5AgZvlslBO2klkdGKTc0",
      { objectToSave: { name, description } },
      "PruebaFavoritos"
    );
  };
 
  const deleteFavorite = async () => {
    deleteFromFirebase(
      "vlLbY96IHPWDcxEZ0gbq",
      "PruebaFavoritos"
    );
  };
 
 
  const onNameChange = (e) => {
    if (e.target.value.length > 10) {
      alert(e.target.value + " is too long");
      setName(e.target.value.substring(0, 10));
    } else {
      setName(e.target.value);
    }
  };
 
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
 
  return (
    <div>
      <h1>Favorite View</h1>
 
      <input type="text" placeholder="Name" onChange={(e) => onNameChange(e)} />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => onDescriptionChange(e)}
      />
      <button onClick={() => addFavorite()}>Add Favorite</button>
      <button onClick={() => getFavorite()}>get Favorite</button>
      <button onClick={() => updateFavorite()}>update Favorite</button>
      <button onClick={() => deleteFavorite()}>delete Favorite</button>
    </div>
  );
};
 
export default FavoriteView;