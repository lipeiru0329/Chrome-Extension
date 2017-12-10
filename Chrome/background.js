//alert("2");
var x = document.getElementsByTagName("video");

alert("background");
//alert(typeof x[0].loop);

if(document.getElementById('clickme').innerHTML === "Loop"){
	x[0].loop = true;
}
else if(document.getElementById('clickme').innerHTML === "Looped")
{	
	x[0].loop = false;
}
else
{

}
