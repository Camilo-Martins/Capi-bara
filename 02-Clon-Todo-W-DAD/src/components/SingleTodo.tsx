import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../interfaces/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  todosList: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number
};

const SingleTodo = ({ todosList, todos, setTodos , index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todosList.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
    inputRef.current?.focus();
  },[edit])

  const handleDone = (id: number) => {
    console.log("is done" + todosList.done);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

 

  return (
    
    <Draggable draggableId={todosList.id.toString()} index={index}>
        {(provided) =>(
            <form
            className="todos__single"
            onSubmit={(e) => handleEdit(e, todosList.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            
          >
            
            {edit ? (
              <input
              ref={inputRef}
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos__single--text"
              />
            ) : todosList.done ? (
              <s className="todos__single--text">{todosList.todo}</s>
            ) : (
              <>
                <span className="todos__single--text">{todosList.todo}</span>
              </>
            )}
    
            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todosList.done) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon">
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(todosList.id)}>
                <MdDone />
              </span>
            </div>
          
          </form>
           
        )
    }

   
    </Draggable>
    
  );
};

export default SingleTodo;
