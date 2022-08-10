const express = require('express');
const app = express()
const PORT = process.env.PORT | 3000;
app.get('/',(req,res)=>{
	res.send("The sever is up and running")
})
var CronJob = require('cron').CronJob;
console.log("start");
var job = new CronJob(
	'*/10 * * * * *',
	function() {
		let d = new Date()
		console.log('Running time:-',d);
	},
	null,
	true,
	'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
job.start()

app.listen(PORT,()=>{
	console.log(`the sever is up and running at port ${PORT}`);
})
