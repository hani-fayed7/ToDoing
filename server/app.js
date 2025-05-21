import express from 'express';
import {testDBConnection, todo, create_todo} from './config/database.js';
import dotenv from 'dotenv'

const app = express();
dotenv.config({path: '../.env'});

app.get("/todo", async (req, res) => {
    const todos = await testDBConnection();
    res.send(todos);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log('Server running on port 3000'));
