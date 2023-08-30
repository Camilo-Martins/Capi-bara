import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./interfaces/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult, }  from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completeTodos, setCompleteTodo] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, done: false }]);
      setTodo("");
    }
  };


  const onDragEnd = (result: DropResult) =>{
    const { source, destination } =result

    if(!destination) return

    if(destination.droppableId === source.droppableId && 
      destination.index === source.index) return

    let add; 
    let active = todos  
    let complete = completeTodos

    if(source.droppableId === 'TodosList'){
      add =active[source.index]
      active.splice(source.index, 1)
    }else{
      add =complete[source.index]
      complete.splice(source.index, 1)
    }

    if(destination.droppableId === 'TodosList'){
      active.splice(destination.index, 0, add)
    }else{
      complete.splice(destination.index, 0 , add)
    }

   

    setCompleteTodo(complete)
    setTodos(active)

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
 <div className="App">
      <h1 className="heading">Tareas</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
     <TodoList
      todos={todos}
      setTodos={setTodos}
      completeTodos={completeTodos}
      setCompleteTodos={setCompleteTodo}
     />
    </div>
    </DragDropContext>

   
  );
};

export default App;
