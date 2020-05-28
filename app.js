const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 1100;


app.get('/Hi', (req, res) => {
    res.status(200).json({error: false, message:'Hello'})
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})