const express = require('express')
const PORT = process.env.PORT || 8081

const app = express ()

app.use("*", (req, res, next) => {
	console.log("request at: ", req.baseUrl)
	next()
})

app.get("*",  (req, res) => {
	res.send("Hello world from app 2")
})

app.listen(PORT, () => {
	console.log(`🎉🎉🎉🎉 APP 2 listening on port ${PORT}`)
})
