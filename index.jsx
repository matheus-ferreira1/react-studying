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
      <h2>useState</h2>
      <div className="btn-wrapper">
        <button className="button" type="button" onClick={decrement}>Decrementar</button>
        <h3>{counter}</h3>
        <button className="button" type="button" onClick={increment}>Incrementar</button>
      </div>
    </div>
  )
}

function MyPage() {
  return (
    <div>
      <h1 className="pageTitle">Arquivo teste: estudo de hooks</h1>
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