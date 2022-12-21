import ReactMarkdown from "react-markdown";
import { useState } from "react";
import "./App.css";

function App() {
  let string = "";

  const newClicked = (event) => {
    newOnpress(event.target.value);
  };

  const [onPress, newOnpress] = useState(string);

  return (
    <div className="main_container">
      <div className="text_container">
        <textarea
          placeholder="-- Input Text --"
          onChange={newClicked}
        ></textarea>
      </div>
      <div className="markdown_preview">
        <ReactMarkdown>{onPress}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
