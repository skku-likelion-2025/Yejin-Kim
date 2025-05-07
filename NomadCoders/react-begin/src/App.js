import { useState, useEffect } from 'react';
import Button from "./Button";
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0); // useState()는 array를 반환 
  const [keyword, setKeyword] = useState(""); // value, function
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log('i run all the time');

  useEffect(() => { // 한 번만 실행되도록 코드를 보호함 
    console.log('i run only once');
  }, []);
  useEffect(() => { 
    // if (keyword !== "" && keyword.length > 5) {
    console.log('keyword 변경 시 실행');
    // }
  }, [keyword]); // keyword를 지켜보고 있음 
  useEffect(() => {
    console.log('counter 변경 시 실행');
  }, [counter]);
  useEffect(() => {
    console.log('keyword or counter 변경 시 실행');
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here... ' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
