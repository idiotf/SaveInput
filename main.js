setInterval(function() {
	"use strict";
	const submitButton = document.querySelectorAll(".e13821ld2");
	submitButton.forEach(button => {
		if(button.className.includes("event")) return;
		button.addEventListener("click", function() {
			const write = button.parentNode.parentNode.parentNode.querySelector("#Write");
			localStorage.setItem("saveInput", write.value);
			const interval = setInterval(function() {
				if(!write.value) {
					write.value = localStorage.getItem("saveInput");
					write.addEventListener("input", function() {
						clearInterval(interval);
					});
				}
			});
		});
		button.classList.add("event");
	});
});
