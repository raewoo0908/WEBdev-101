import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useState} from "react";

function App() {
  const [items, setItems] = useState(
    [{
    id: "0",
    title: "Hello World 1",
    done: true
    },
    {
      id: "1",
      title: "Hello World 2",
      done: true
    },]
  );

  let todoItems = 
  items.length > 0 && items.map((item => <Todo item={item} key={item.id} />))
  /* todoItems의 값은 false이거나 요소 배열이다. Element[]
    useState()로 초기화한 items 배열의 길이가 0 이하이면 false가 저장된다.
    items.map()은 items 배열의 요소를 순차적으로 돌면서 map()의 매개변수로 전달된 함수를 실행한다.
    '=>' 화살표 함수 표현식은 param => (expresion)의 형태로 사용하며, 좌변에는 매개변수를, 우변에는 표현식이 들어온다. 표현식의 결과가 리턴된다.
    items[0]부터 해당 인덱스에 있는 요소를 item이라는 변수에 할당하고, Todo 컴포넌트의 props.item에 item(items[0])을 저장하고, props.key에 item.id(items[0].id)를 저장한다.
    이 과정을 items 배열의 모든 인덱스에 대해 수행한다.

    !참고! <Todo />는 Todo가 react component라는 것을 알려주는 의미다. react component는 무조건 대문자로 시작한다.

    결과적으로 todoItems에는 Todo 컴포넌트로 구성된 배열이 저장된다.
    */

  return (  
    <div className="App">
      {todoItems}
        
    </div>
  );
  /*
            <div className="App">
              <Todo item = {item} />
        
            </div>
           라고 작성하는 경우,
           Todo 컴포넌트의 매개변수 props에 item을 넘겨주고 싶다.
           props.item에 값을 넘기기 위해 <Todo item = {item}>처럼 '매개변수 이름 = 값'으로 매개변수를 넘겨줄 수 있다.
           props = {item}이 아니라, item = {item}임에 유의하라.
           넘겨준 {item}은 props.item에 저장된다. 
           그래서 Todo 컴포넌트는, App 컴포넌트에서 받아온 props.item을 useState의 초기값으로 쓴다.*/ 
}


export default App;