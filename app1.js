const express = require('express')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8080

const app = express ()

app.use("*", (req, res, next) => {
	console.log("request at: ", req.baseUrl)
	next()
})

app.get("/app2", (req, res) => {
	fetch("http://localhost:8081/")
		.then(r => r.text())
		.then(text => res.send(text))
		.catch(err => res.status(500).send("couldn't reach out to app2"))
})

app.get("*",  (req, res) => {
	res.send("Hello world from app 1!")
})


app.listen(PORT, () => {
	console.log(`🎉🎉🎉🎉 APP 1 listening on port ${PORT}`)
})
