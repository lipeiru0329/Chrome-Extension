var message_back = 0;

var have_video = 2;
var have_no_video = 1;
var port = chrome.runtime.connect({name:"initial_ini"});

port.onMessage.addListener(function(message,sender){
	  if(message.greeting === "no_video"){
	  	message_back = "1";
	  	chrome.storage.local.set({'value': message_back}, function() {
          // Notify that we saved.
          //alert("message_save");
        });
	    //alert(message_back);
	   
	  }
	  else if(message.greeting === "video"){
	  	message_back = "2";
	  	chrome.storage.local.set({'value': message_back}, function() {
          // Notify that we saved.
          //alert("message_save");
        });
	    //alert(message_back);
	    alert(message.greeting);
	  }
	  
	});

document.getElementById('clickme').addEventListener('click', runSwitchjs);
document.addEventListener("DOMContentLoaded", function() { 
	var as = myunction();
     loadjs();
}, true);

function runSwitchjs() {

	change_background();
	//alert("1");
	if(document.getElementById('clickme').innerHTML === "Loop")
	{
		chrome.tabs.executeScript({
	    file: 'background_loop.js'
	  });
	}
	else
	{
		chrome.tabs.executeScript({
	    file: 'background_looped.js'
	  });
	}	  	
}

function myunction(){
	chrome.storage.local.get('value', function(result){
		message_back = result.value;
		//alert(message_back);
		sync_finish = 1;
		alert(message_back + " sync");
	});
	return message_back;
}


function loadjs(){
	var syc_finish = 0;
	//alert(message_back);
	//port = chrome.runtime.connect({name:"initial_ini"});
	var as = myunction();
	alert(syc_finish + " before");
	// while(true){
	// 	if(syc_finish == 1){
	// 		alert(syc_finish);
	// 		break;
	// 	}	
	// }
	//alert(1);
	//alert(typeof(message_back));
	//alert(message_back + 2);
	 if(message_back === "2")
		document.getElementById('clickme').innerHTML = "Loop";
	else if(message_back === "1")
		document.getElementById('clickme').innerHTML = "Invalid";
	sync_finish = 0;
	//alert(10)
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