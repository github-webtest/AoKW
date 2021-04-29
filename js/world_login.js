/****************************************
*************Created by XMAF*************
***********Age of Kingdom Wars***********
****************************************/

var setselect_world_text = localStorage.getItem("setselect_world_text");

function world_1() {
	localStorage.setItem("setselect_world_text", "1");
	window.location.href = "index.html";
};

function world_2() {
	localStorage.setItem("setselect_world_text", "2");
	window.location.href = "index.html";
};

function world_3() {
	localStorage.setItem("setselect_world_text", "3");
	window.location.href = "index.html";
};

function world_4() {
	localStorage.setItem("setselect_world_text", "4");
	window.location.href = "index.html";
};

function world_5() {
	localStorage.setItem("setselect_world_text", "5");
	window.location.href = "index.html";
};

function index_save() {
	localStorage.getItem("setselect_world_text");
	
	document.getElementById("select_world_text").innerHTML = setselect_world_text;
}