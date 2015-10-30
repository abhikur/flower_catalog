var http = require('http');
var fs= require('fs');

var handler = function(req,res) {
	console.log(req.url)
	var namee= querystring.parse(req.url);
	console.log(namee);
	var index='';
	var toAppend='';
	if(req.url[1]=="?"){
		var name = req.url.match(/\=\w+[^&]*/gi);
		name.forEach(function(element,i){
			var spacesData=element.replace(/\+/g," ");
			if(i==0)
				toAppend+="<p>Name :"+spacesData.substring(1)+"</p>";
			else
				toAppend+="<p>Comment :"+spacesData.substring(1)+"</p>";
		})
		var data = fs.appendFileSync('guest.html',toAppend);
		res.writeHead(301,{location:"http://localhost:8000/guest.html"})
		res.end();
		
	}	
	else if(req.url=='/')
		 index= fs.readFileSync('index.html');
	else if(req.url!='/favicon.ico')
		index=fs.readFileSync('.'+req.url)
	res.end(index);
}

http.createServer(handler).listen(8000);