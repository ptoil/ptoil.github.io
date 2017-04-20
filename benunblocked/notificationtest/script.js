if (!("Notification" in window)) {
	alert("This browser does not support system notifications");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
	// If it's okay let's create a notification
	text.innerHTML += "     permission already granted;";
	var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== 'denied') {
	text.innerHTML += "     permission denied;";
	Notification.requestPermission(function (permission) {
		// If the user accepts, let's create a notification
		text.innerHTML += "     permission requested;";
		if (permission === "granted") {
			text.innerHTML += "     permission granted;";
			setTimeout(function(){
				var notification = new Notification("Hi there!");
				text.innerHTML += "     notfication created;";
			}, 5000);
		}
	});
}
