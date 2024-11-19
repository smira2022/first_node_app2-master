const express = require('express');
const app = express();
const PORT = 3000 || 8000;

app.get("/user/:id", (req, res) =>{
   const userId = req.params.id; //dot notation
   res.send(`User id is ${userId}`);
});

app.get("/search", (req, res) =>{
    const query = req.query.query
    res.send(`Search query is: ${query}`);
});

app.use(express.json());

app.use((req, res, next) => {
   console.log(`Request received: ${req.method}, ${req.url}`) ;
   next();
});


app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});

