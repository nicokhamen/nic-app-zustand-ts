import { useCounterStore } from "../store/counterStore";

export const Counter: React.FC = () => {
    const {count, increment, decrement, reset} = useCounterStore();

    return(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
    )
}