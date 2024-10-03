const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	var a = 1;
	return res.send('2')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})