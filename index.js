const express = require("express");
const app = express();

app.get('/home', function (req,res) {
    const soma = 100 + 1;


    res.json({soma: "soma"});
})

app.listen(3000);