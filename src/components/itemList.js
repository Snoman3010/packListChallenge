import Item from "./item";

function ItemList(props) {
  //display name of list and then map the items array to Item components
  return (
    <div className="ItemList">
      <div className="ListName">{props.list.name}</div>
      <div className="ListBody">
        {props.list.items.map((listItem, listIndex) => {
          return (
            <Item
              item={listItem}
              index={listIndex}
              list={props.list}
              update={props.update}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
