import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="bg-gray-400 p-10">
      <h1 className="text-blue-300">Submit your message</h1>
      <form>
        <label>
          your message
          <input type="text" />
        </label>
        <label>
          the author
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
