import React from "react";


function Task({text, category, onDeleteItem}) {

  function handleDeleteItem(){
    onDeleteItem(text);
  }
  
  return (
   
    <div className="task">
      <div className="label" >{category}</div>
      <div className="text" >{text}</div>
      <button className="delete" onClick={handleDeleteItem}>X</button>
    </div>
  );
}

export default Task;
