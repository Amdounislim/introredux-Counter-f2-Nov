import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { toggle } from "./JS/actions/actionShow";

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducerShow.show);

  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      <button className="visibility-btn" onClick={() => dispatch(toggle())}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show ? <Counter /> : ""}
    </div>
  );
}

export default App;
