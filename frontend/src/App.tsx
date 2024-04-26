import { Data } from "./components/Data";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import "./App.css";

function App() {
  return (
    <>
      <Data />
      <Loading />
      <Error />
    </>
  )
}

export default App;
