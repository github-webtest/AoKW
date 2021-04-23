/****************************************
*************Created by XMAF*************
***********Age of Kingdom Wars***********
****************************************/

function settingson(){
	document.getElementById("kp_settings_div").style.display = "block";
	document.getElementById("kp_settings_div_bg_display").style.display = "block";
};

function settingsoff(){
	document.getElementById("kp_settings_div").style.display = "none";
	document.getElementById("kp_settings_div_2").style.display = "none";
	document.getElementById("kp_settings_div_bg_display").style.display = "none";
};

function settings_languageon(){
	document.getElementById("kp_settings_div").style.display = "none";
	document.getElementById("kp_settings_div_2").style.display = "block";
};

function settings_languageback(){
	document.getElementById("kp_settings_div").style.display = "block";
	document.getElementById("kp_settings_div_2").style.display = "none";
};