import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Farid");
  const [isPending, setIsPending] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const issue = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue)
    }).then(() => {
      console.log("New Issue Added");
      setIsPending(false);
    })
  };

  return ( 
    <div className="create">
      <h2>Add New Issue</h2>
      <form onSubmit={handleSubmit}>
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
        {!isPending && <button>Add Issue</button>}
        {isPending && <button disabled>Adding Issue...</button>}
      </form>
    </div>
   );
}
 
export default Create;