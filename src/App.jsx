import React, { useState } from "react";

const App = () => {
  const [started, setStarted] = useState(false);
  const [you, setYou] = useState("");
  const [them, setThem] = useState("");

  function startApp() {
    setStarted((s) => !s);
  }

  return (
    <div className="app">
      <div>
        <Button onClick={startApp}>
          {started ? "End Testing" : "Start Compatibility test"}
        </Button>
      </div>
      {started && (
        <>
          <div>
            <Forms you={you} them={them} onThem={setThem} onYou={setYou} />
          </div>

          <Result you={you} them={them} />
        </>
      )}
    </div>
  );
};

export default App;

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Forms({ you, onYou, them, onThem }) {
  function handleSubmit(e) {
    e.preventDefault();

    onThem("");
    onYou("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Enter your ages</h2>

      <div className="items">
        <span className="input">
          <label>You</label>
          <input
            type="text"
            value={you}
            onChange={(e) => onYou(+e.target.value)}
          />
        </span>

        <span className="input">
          <label>Him/her</label>
          <input
            type="text"
            value={them}
            onChange={(e) => (s = onThem(+e.target.value))}
          />
        </span>
      </div>

      <Button>Clear</Button>
    </form>
  );
}

function Result({ you, them }) {
  const age = Math.abs(you - them);

  if (!you || !them) return <h2>Please input ages</h2>;

  return (
    <h2>
      {age > 10 && age <= 200 && "Sorry, age difference is too much 👴🏽👴🏽"}
      {age === 0 && "You guys are perfect for each other 💘"}
      {age < 10 && age !== 0 && "That's Okay 👍🏽"}
      {age > 200 && "Sorry, you can't possibly be that old, so no❌"}
      <em>&nbsp;(Difference: {age} Years)</em>
    </h2>
  );
}
