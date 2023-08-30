import React, { Dispatch, SetStateAction, useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  //const InputField : React.FC<Props> = ({todo, setTodo}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          placeholder="Tareas"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">
          {" "}
          ADD{" "}
        </button>
      </form>
    </>
  );
};

export default InputField;
