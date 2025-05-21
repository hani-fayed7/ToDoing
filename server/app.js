import express from "express";
const app = express();


app.get("/todo", (req, res) => {
    res.send("Hello World");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log('Server running on port 3000'));
