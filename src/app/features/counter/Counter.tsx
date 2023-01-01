import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement, reset } from "./counterSlice";
import styles from "./counter.module.css";
type Props = {};

const Counter = (props: Props) => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrement] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const AddValue = Number(incrementAmount) || 0; //must be number
  const resetAll = () => {
    setIncrement(0);
    dispatch(reset());
  };
  const IncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value < 0) {
      setError("Please Put a positive value");
      return;
    } else {
      setError("");
    }
    setIncrement(value);
  };
  return (
    <section className={styles.counter}>
      <h1>Counter : {count}</h1>
      <div className={styles.buttonContainer}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(1))}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(1))}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(5))}
        >
          Decrement by 5
        </button>
      </div>
      <div className={styles.buttonContainer && styles.inputWrapper}>
        <div>
          <input
            type="number"
            placeholder="Place your amount"
            value={incrementAmount}
            onChange={IncrementHandler}
            className={styles.input}
            style={error ? { border: "1px solid salmon" } : {}}
          />
          <span>{error}</span>
        </div>
        <button
          aria-label="Increment by input value"
          onClick={() => dispatch(increment(AddValue))}
        >
          Increment By Amount
        </button>
        <button aria-label="reset amount" onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};
export default Counter;
