var emp={
	id:1,
	name:"daniel",
	salary:1000
}

function call(){
	alert(emp.name);
}
function enableOnInput(){
	document.getElementById("link").className = "btn-link active"
}
function disableOnBlur(){
	var searchText = document.getElementById("searchText");
	console.log(searchText.value);
	if(searchText.value==""){
		document.getElementById("link").className = "btn-link disabled"
	}
}

function changeWindowLocation(){
	window.location.href = 'http://www.google.com';
}