//I found a bug right at the end of the four hour time limit and fixing it is first on the list of things
//to do with more time. It only seems to happen when adding an item to the list when there is nothing 
//saved as a cookie, and refreshing the page when it occurs should cause the program to run properly.


//imports
import "./App.css";
import ItemList from "./components/itemList";
import AddForm from "./components/addForm";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

//classes
class packItem {
  constructor(name, checked, description, weight) {
    this.name = name;
    this.checked = checked;
    this.description = description;
    this.weight = weight;
  }
}

class packList {
  constructor(name, items) {
    this.name = name;
    if (items) {
      this.items = items;
    } else {
      this.items = [];
    }
  }
  //add or remove items from array
  remove(index) {
    this.items.splice(index, 1);
  }
  add(name, description, weight) {
    this.items.push(new packItem(name, false, description, weight));
  }
}

//main app component
function App() {
  //list state variable
  const [list, setList] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  //fill out list state variable based on presence of cookie
  useEffect(() => {
    if (!list) {
      let newListData = {
        name: "Packing List",
        items: [],
      };
      if (cookies.listCookie) {
        newListData = cookies.listCookie;
      }
      setList(new packList(newListData.name, newListData.items));
    }
  });

  //update cookie to match list
  function updateCookie() {
    if (cookies.listCookie) {
      removeCookie("listCookie");
    }
    setCookie("listCookie", list, { expires: new Date(3333, 2, 3) });
    //the changes happening to list are too deep for react to trigger an update so I force one
    setList(new packList(cookies.listCookie.name, cookies.listCookie.items));
  }

  //return value for component but only if list has been populated
  if (list) {
    return (
      <div className="App">
        <div id="mainList">
          <ItemList list={list} update={updateCookie} />
          <AddForm list={list} update={updateCookie} />
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default App;
