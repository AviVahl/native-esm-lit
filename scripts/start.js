import express from "express";

const port = 8080;
const app = express();
app.use(express.static(process.cwd()));
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
