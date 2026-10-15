import { useState, useEffect } from "react";
function App() {
const [message, setMessage] = useState("Loading...");
useEffect(() => {
fetch("http://localhost:5000/api/hello")
.then((res) => res.json())
.then((data) => setMessage(data.message))
.catch(() => setMessage("Backend se connect nahi hua"));
}, []);
return (
<div>
<h1>React + Express</h1>
<p>{message}</p>
</div>
);
}
export default App;