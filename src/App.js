import "./App.css";
import Home from "./page/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
