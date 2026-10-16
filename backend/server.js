const express = require("expess");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());          // React ko backend se baat karne ki permission
app.use(express.json());  // JSON data samajhne ke liye

app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend se hello!" });
});

app.listen(PORT, () => {
  console.log("Server chal raha hai: http://localhost:" + PORT);
});