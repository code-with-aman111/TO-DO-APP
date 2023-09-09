
import React, { useState } from "react";
import TodoList from "./TodoList";
const App=()=>{
const[inputList,setInputList]=useState("");
const[Items,setItems]=useState([]);
const itemEvent=(e)=>{
  setInputList(e.target.value);
}
const listOfitem=()=>{
setItems((olditems)=>{
  return[...olditems,inputList]
});
setInputList("");
};
const deleteItem=(id)=>{
  setItems((olditems)=>{
    return olditems.filter((arrElem,index)=>{
       return index!==id;
    });
  });
};
return(
<div className="main_div">
<div className="center_div">
<br/>
<h1>ToDo List</h1>
<br/>
<input type="text" placeholder="Add a item"
value={inputList}
onChange={itemEvent}/>
<button onClick={listOfitem}>+</button>

<ol>
  {Items.map((itemval,index) => {
  return  <TodoList
   key={index} 
   id={index} 
   text={itemval} 
   onSelect={deleteItem}
   />;
  })}
</ol>
</div>
</div>
);
};
export default App;