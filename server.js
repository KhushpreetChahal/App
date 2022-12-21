const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// to run the above file run the command "node server.js"
// but the problem here is that everytime we change the content of the file we have to run the command 'node server.js' again and again