import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');

 function handleDeleteItem(deletedTask){
  setTasks(tasks.filter((task) => task.text !== deletedTask));
  //filter tasks and check if task.text does not equal deletedTaskText
  }
  function handleAddTask(newTask){
    setTasks([...tasks,newTask])
  }
 const visibleTasks = tasks.filter((task) => category === "All" || task.category === category) //filter if category = all OR task.cat = cat

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
         onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm onTaskFormSubmit={handleAddTask}
          categories = {CATEGORIES.filter((cat) => cat !== "All")}
        />
      </div>
      
      <TaskList tasks={visibleTasks} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
