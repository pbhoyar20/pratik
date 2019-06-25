var express = require("express");
var app = express();

var medicineController =function(req,res){
	console.log("invoking rest api for medicine");
		
		var medicines=[
		{ medId:1, medName:"abcde", medComapny:"xyzuv", medType:"tablet", unitPrice:20, quantity:200 },
		{ medId:2, medName:"bgdsfg", medComapny:"sdfgdf", medType:"syrup", unitPrice:15, quantity:100 },
		{ medId:1, medName:"dfhdhyd", medComapny:"bjvjfhj", medType:"tablet", unitPrice:25, quantity:250 }
		];
		res.send(medicines);
};

app.get("/medicines",medicineController);
var server= app.listen(8000, function(){
	 var host= server.address().address;
	 var port= server.address().port;
	 console.log("listening to port number::8000");
}