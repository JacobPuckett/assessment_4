const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { 
    getCompliment,
    getFortune,
    addMovie,
    deleteMovie,
    getMovie,
    editMovie,
    getGame,
    deleteGame
    // getImg
 } = require('./controller')

 app.get("/api/compliment", getCompliment);
 app.get("/api/fortune", getFortune)

// app.post("/api/imgs/:img", getImg)
app.get('/api/games', getGame)
app.delete('/api/delete', deleteGame)


app.get("/api/movies", getMovie)
app.delete("/api/movies/:index", deleteMovie)
app.post("/api/movies/:movie", addMovie)
app.put("/api/movies", editMovie)

app.listen(4000, () => console.log("Server running on 4000"));
