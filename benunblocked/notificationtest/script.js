if (!("Notification" in window)) {
	alert("This browser does not support system notifications");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
	// If it's okay let's create a notification
	console.log("permission already granted;");
	var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== 'denied') {
	console.log("permission denied;");
	Notification.requestPermission(function (permission) {
		// If the user accepts, let's create a notification
		console.log("permission requested;");
		if (permission === "granted") {
			console.log("permission granted;");
			setTimeout(function(){
				//var notification = new Notification("Hi there!");
				
				Notification.requestPermission().then(function(result) {
					console.log("notfication created:");
					console.log(result);
				});
			}, 5000);
		}
	});
}
