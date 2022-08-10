var CronJob = require('cron').CronJob;
console.log("start");
var job = new CronJob(
	'0 0 0 * * *',
	function() {
		console.log('You will see this message every second');
		console.log(new Date())
	},
	null,
	true,
	'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
job.start()
