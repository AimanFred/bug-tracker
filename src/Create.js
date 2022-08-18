import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Farid");

  return ( 
    <div className="create">
      <h2>Add New Issue</h2>
      <form>
        <label>Issue title:</label>
        <input 
          type="text"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <label>Issue body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          >
        </textarea>
        <label>Issue author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
          <option value="Farid">Farid</option>
          <option value="Haziq">Haziq</option>
          <option value="Banidom">Banidom</option>
        </select>
        <button>Add Issue</button>
      </form>
    </div>
   );
}
 
export default Create;