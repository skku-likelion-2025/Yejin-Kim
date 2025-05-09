import { useState, useEffect } from 'react';
function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ toDo });
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
    console.log({...toDos});
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='write your todo...' />
      </form>
      <button>Add Todo</button>
    </div>
  );
}
export default App;
