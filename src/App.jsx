import { useEffect } from "react";
import { useState } from "react"
import Accordian from "./Accordian";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])


  return (
    <>
      <div className="comments-container">
        {
          comments.map(comment => <Accordian key={comment.id} comment={comment} />)
        }
      </div>
    </>
  )
}

export default App
