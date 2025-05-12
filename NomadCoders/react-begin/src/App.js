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
    setToDos((currentArray) => [toDo, ...currentArray]); // 힘수를 보냄, 현재 state를 새로운 state 계산에 사용 
    setToDo(''); // value를 보냄 
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='write your todo...' />
        <button>Add Todo</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li>)} 
      {/* array의 element들을 바꿀 때 map은 함수를 넣을 수 있도록 함 map은 모든 element들에 대해 실행됨  */}
    </div>
  );
}
export default App;
