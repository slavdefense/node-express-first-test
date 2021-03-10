const express = require("express");
const app = express();
// app.use(() => {
//   console.log("we got a new request");
// });
// app.listen(3000);

// app.use((req, res) => {
//   console.log("we go a request");
//   res.send({ david: "hello" });
// });
app.get("/r/:subreddit", (req, res) => {
  res.send("this is a subreddit");
  console.log(req.params);
});

app.get("/nepal/:kathmandu", (req, res) => {
  const { kathmandu } = req.params;
  res.send(`you are in the kathmandu zone of your parameter!! ${kathmandu}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// app.get("/r/:college/:university", (req, res) => {
//   const { college, university } = req.params;
//   res.send(
//     `you first letter after r is ${college} and your second is ${university}`
//   );
// });

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("hi");
});

// app.get("/cats", (req, res) => {
//   console.log("we got cats");
// });

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});
app.get("/", (req, res) => {
  res.send("home");
});

app.post("/posts", (req, res) => {
  res.send("this is a post request");
});

app.get("*", (req, res) => {
  res.send("I dont know that path");
});
