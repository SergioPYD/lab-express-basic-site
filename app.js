const express = require('express')
const app = express()
const port = 3000

//Carpeta con data publica
app.use( express.static("public") ) 

app.get('/', (req, res) => {
  res.send('Pagina de Sergio/Dani')
}) 




app.get("/home", (req, res, next) => {
 
  console.log( __dirname ) // la direccion absoluta de esta ubicación
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html")
})



app.get("*", (req, res) => {
  res.send("Sorry, page not found...it`s Jorge & Pedro & Antonio´s fault")
})

// // or also works
// app.use((req, res) => {
//   res.send("Sorry, page not found...Blame our developer")
// })















//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})