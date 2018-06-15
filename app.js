const express = require('express');
const app = express();
const moment = require('moment');

app.get('/timestamp/:query', function(req, res){
	var unix = Number(req.params.query);
	var obj = {};
	if(!isNaN(unix)) {
		var day = moment(unix);
		var nature = day.format('LL');
		obj = {
			unix: unix,
			nature: nature
		};
	} else {
		var nature = req.params.query;
		naturex = nature.replace(",", "");
		var arr = naturex.split(" ");
		var m;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		for(var i = 0; i < months.length; i++) {
			if(arr[0] === months[i]) {
				m = i + 1;
				break;
			}
    }

		var ux = arr[2].toString() + '-' + m.toString() + '-' + arr[1].toString();
		var unix = moment("1995-12-25").unix();
		obj = {
			unix: unix,
			nature: nature
		};
	}
	res.json(obj);
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/home.html');
})

app.listen(3000, () => {
	console.log('Server is running on port 3000');
})
