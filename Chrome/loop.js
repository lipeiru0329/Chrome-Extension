var message_back = "2";
var port = chrome.runtime.connect({name:"background"});

port.onMessage.addListener(function(message,sender){
	  if(message.greeting === "hello"){
	  	message_back = "123";
	    alert(message_back);
	  }
	});

document.getElementById('clickme').addEventListener('click', runSwitchjs);
document.addEventListener("DOMContentLoaded", function() { 
     loadjs();
}, true);

function runSwitchjs() {

	change_background();
	alert("1");
  	chrome.tabs.executeScript({
    file: 'background.js'
  });
}




function loadjs(){
	alert(message_back);
	port = chrome.runtime.connect({name:"background"});
	document.getElementById('clickme').innerHTML = "Hasa";
	// chrome.tabs.executeScript({
 //    file: 'initial_ini.js'
 //    //document.getElementById('clickme').innerHTML = "Invalid";
 //    //'initial.js'
 //  });
	//document.getElementById('clickme').innerHTML = "Invalid";
	//alert("Initial");
}

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






// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//     sendResponse({counter: request.counter+1});
//   });
// chrome.runtime.onMessage.addListener(
//  function(request, sender) {
//   alert("Contentscript has received a message from from background script: ");
//   });