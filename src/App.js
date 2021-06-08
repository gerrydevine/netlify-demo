import "./App.css";
import "antd/dist/antd.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <h1>My Site</h1>
      <Welcome name="web site" />
    </div>
  );
}

export default App;
