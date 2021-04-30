/****************************************
*************Created by XMAF*************
***********Age of Kingdom Wars***********
****************************************/

var setselect_world_text = localStorage.getItem("setselect_world_text");

function world_0() {
	localStorage.setItem("setselect_world_text", "0");
	window.location.href = "index.html";
};

function world_1() {
	localStorage.setItem("setselect_world_text", "1");
	window.location.href = "index.html";
};

function world_2() {
	localStorage.setItem("setselect_world_text", "2");
	window.location.href = "index.html";
};

function index_save() {
	localStorage.getItem("setlogindisplay1");
	localStorage.getItem("setlogindisplay2");
	localStorage.getItem("setselect_world_text");
	
	document.getElementById("select_world_text").innerHTML = setselect_world_text;
	document.getElementById("lp_first_w1").style.display = setlogindisplay1;
	document.getElementById("lp_end_w1").style.display = setlogindisplay2;
};