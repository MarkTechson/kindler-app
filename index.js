const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const users = [
    {
        "name": "Chop",
        "tag": "Whaddup! Chop in the hooowwwse",
        "photo": "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
        "name": "Fen",
        "tag": "Fen, reporting for duty!",
        "photo": "https://randomuser.me/api/portraits/lego/2.jpg"
    },
    {
        "name": "Charlie",
        "tag": "Hiya, Charlie here!",
        "photo": "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
        "name": "Bex",
        "tag": "Hi, I'm Bex",
        "photo": "https://randomuser.me/api/portraits/lego/4.jpg",
    },
];

// set up some routes
app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`We are live on ${PORT}`);
});