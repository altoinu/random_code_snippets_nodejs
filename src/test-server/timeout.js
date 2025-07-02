const express = require("express");
const app = express();
const port = 3002; // Use a port that isn't being used by other services

// This endpoint will hang forever to guarantee a timeout
// eslint-disable-next-line no-unused-vars
app.get("/slow-response", (req, res) => {
  console.log(
    `[Test Server] Received request for /slow-response. Holding connection open...`,
  );
  // We simply never call res.send() or res.json(), so the request will hang
  // until the client (your fetchData function) times out.
});

// eslint-disable-next-line no-unused-vars
app.post("/slow-response", (req, res) => {
  console.log(
    `[Test Server] Received POST request to /slow-response. Holding connection open...`,
  );
  // By never calling res.send() or res.json(), we simulate a hanging API
});

// A simple endpoint that works, for sanity checks
app.get("/fast-response", (req, res) => {
  console.log(
    `[Test Server] Received request for /fast-response. Responding immediately.`,
  );
  res.status(200).json({ message: "hello from test server" });
});

app.listen(port, () => {
  console.log(
    `[Test Server] Live test server listening on http://localhost:${port}`,
  );
});
