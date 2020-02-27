const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002

app.get('/api/test', (req,res) => {
	res.send({test:'success'})
})

app.listen(PORT, () => console.log(`app is running in port ${PORT}`))
