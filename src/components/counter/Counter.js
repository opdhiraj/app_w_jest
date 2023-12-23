import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>customhook changes</p>p
      </div>
      <div>
        <input
          type="number"
          value={amount}
          name="amount"
          onChange={(e) => setAmount(parseInt(e.target.value))}
          //parseInt ->onchange convert  into integer
        />
        <button onClick={() => setCount(amount)}>Set</button>
      </div>
    </>
  );
};

export default Counter;
