function runSwitchjs() {

	change_background();
	alert("1");
  	chrome.tabs.executeScript({
    file: 'background.js'
  });
}


// function loadjs(){
// 	document.getElementById('clickme').innerHTML = "Hasa";
// 	chrome.tabs.executeScript({
//     file: 'background.js'
//     document.getElementById('clickme').innerHTML = "Invalid";
//     //'initial.js'
//   });
// 	//alert("Initial");
// }

function change_background(){
	//alert(document.getElementById('clickme').innerHTML);
	if(document.getElementById('clickme').innerHTML === "Loop"){
		document.getElementById('clickme').style.background = "#33FFFF";
		document.getElementById('clickme').innerHTML = "Looped";
	}
	else
	{	
		document.getElementById('clickme').innerHTML = "Loop";
		document.getElementById('clickme').style.background = "#9933FF";
	}
	//alert(document.getElementById('clickme').style.background);
}

document.getElementById('clickme').addEventListener('click', runSwitchjs);
// document.addEventListener("DOMContentLoaded", function() { 
//      loadjs();
// }, true);


// chrome.runtime.onMessage.addListener(
//  function(request, sender) {
//   alert("Contentscript has received a message from from background script: '" + request.message + "'");
//   });