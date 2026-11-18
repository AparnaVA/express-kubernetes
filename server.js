
const express = require("express");
const os = require("os");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from Express!</h1>
        <h2>Kubernetes with Minikube</h2>
        <p>Application is running successfully.</p>
        <p>Running inside: ${os.hostname()}</p>
    `);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
