function hideImage() {
	var jar = document.querySelector('#jar');
	jar.setAttribute('class','hidden');
	setTimeout(function(){
		jar.setAttribute('class','visible');
	},1000);
}