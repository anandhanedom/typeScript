import React, { useState, Fragment } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault(); //prevent from refreshing

    addTodo(value);

    setValue('');
  };

  // debugger;

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: true }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, i: number) => (
          <Fragment key={i}>
            <div
              style={{ textDecoration: todo.complete ? '' : 'line-through' }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(i)}>
              {todo.complete ? 'Complete' : 'Incomplete'}
            </button>
            <button type="button" onClick={() => removeTodo(i)}>
              Remove Todo
            </button>
          </Fragment>
        ))}
      </section>
    </div>
  );
}

export default App;
