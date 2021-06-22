import { useState } from "react";

function AddForm(props) {
  //state variables for each input field
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newWeight, setNewWeight] = useState(0);

  //simple set of inputs as component's return value
  return (
    <div id="NewItemForm">
      <div id="FormTitle">Add an item:</div>
      <input
        type="text"
        id="FormName"
        placeholder="Item Name"
        value={newName}
        onChange={(evt) => setNewName(evt.target.value)}
      />
      <input
        type="text"
        id="FormDescription"
        placeholder="Item Description"
        value={newDescription}
        onChange={(evt) => setNewDescription(evt.target.value)}
      />
      <input
        type="number"
        id="FormWeight"
        value={newWeight}
        onChange={(evt) => setNewWeight(evt.target.value)}
      />
      <button
        id="FormButton"
        onClick={() => {
          //button adds new item, wipes inputs, and triggers cookie update, but only if name exists
          if (newName) {
            props.list.add(newName, newDescription, newWeight);
            setNewName("");
            setNewDescription("");
            setNewWeight(0);
            props.update();
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default AddForm;
