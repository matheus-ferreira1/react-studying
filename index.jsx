const {useState} = React;

function Counter() {

  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div className="counter">
      <button className="button" type="button" onClick={decrement}>Decrementar</button>
      <h2>{counter}</h2>
      <button className="button" type="button" onClick={increment}>Incrementar</button>
    </div>
  )
}

function MyPage() {
  return (
    <div>
      <h1>Arquivo teste: estudo de hooks</h1>
    </div>
  )
};

function App() {
  return (
    <div>
      <MyPage />
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));