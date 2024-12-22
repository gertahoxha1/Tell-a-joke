const express = require ('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't eggs tell jokes? They might crack up.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I told my wife she should embrace her mistakes...She hugged me.",
    "Parallel lines have so much in common.It's a shame they'll never meet.",
];

app.get('/joke', (req,res) =>{
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({joke : randomJoke}) 
});

app.listen(port, () =>{
    console.log('Serveri eshte duke u ber run: http://localhost:${port}');
})