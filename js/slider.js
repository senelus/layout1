var $slider = $("#slider");
var $fill = $(".bar .fill");
function setBar() {
	document.getElementById("percent").innerText = $slider.val() + "%"
	$fill.css("width", $slider.val() + "%");	
}
$slider.on("input", setBar);
setBar();