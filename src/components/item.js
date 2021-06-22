import { useState } from "react";

function Item(props) {
  //state variable to track expanded data for the item
  const [expanded, setExpanded] = useState(false);

  //updates checkbox based on the packItem object that was mapped to this component
  function isChecked() {
    if (props.item.checked) {
      return "checked";
    } else {
      return "";
    }
  }

  //add to the component's return value if it's expanded, remove button triggers cookie update
  function expansion() {
    if (expanded) {
      return (
        <div className="ItemExpansion">
          <div className="ItemData">
            <div className="ItemDescription">{props.item.description}</div>
            <div className="ItemWeight">{props.item.weight}g</div>
          </div>
          <button
            className="ItemRemoveButton"
            onClick={() => {
              props.list.remove(props.index);
              props.update();
            }}
          >
            Remove Item
          </button>
        </div>
      );
    } else {
      return "";
    }
  }

  //main return value for the component, only if item prop exists
  //checkbox triggers cookie update
  if (props.item) {
    return (
      <div className="Item">
        <div className="ItemMain">
          <input
            type="checkbox"
            checked={isChecked()}
            className="ItemCheckbox"
            onClick={() => {
              props.item.checked = !props.item.checked;
              props.update();
              setExpanded(expanded);
            }}
          ></input>
          <div
            className="ItemName"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {props.item.name}
          </div>
        </div>
        {expansion()}
      </div>
    );
  } else {
    return "";
  }
}

export default Item;
