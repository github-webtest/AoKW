/****************************************
*************Created by XMAF*************
***********Age of Kingdom Wars***********
****************************************/

var king_name = sessionStorage.getItem("king_name");
var kip_display_none_kingname = sessionStorage.getItem("kip_display_none_kingname");
var kip_display_block_kingname = sessionStorage.getItem("kip_display_block_kingname");
var setflags = sessionStorage.getItem("setflags");
var setflag_language = sessionStorage.getItem("setflag_language");
var setflag_head_language = sessionStorage.getItem("setflag_head_language");
var setsettings_language = sessionStorage.getItem("setsettings_language");
var setworldtext_language = sessionStorage.getItem("setworldtext_language");
var setkp_setting_king_name = sessionStorage.getItem("setkp_setting_king_name");
var setkp_process_text = sessionStorage.getItem("setkp_process_text");
var setkp_messages_text = sessionStorage.getItem("setkp_messages_text");
var setkp_buydiamonds_text = sessionStorage.getItem("setkp_buydiamonds_text");
var setsetting_a1_bottom_text = sessionStorage.getItem("setsetting_a1_bottom_text");
var setking_name_input_button = sessionStorage.getItem("setking_name_input_button");
var setquests_text = sessionStorage.getItem("setquests_text");
var setmarket_text = sessionStorage.getItem("setmarket_text");
var setmarket_text2 = sessionStorage.getItem("setmarket_text2");
var setbuildingcapacity_text = sessionStorage.getItem("setbuildingcapacity_text");
var setannouncement_text = sessionStorage.getItem("setannouncement_text");
var setannouncement_text2 = sessionStorage.getItem("setannouncement_text2");
var setnews_text = sessionStorage.getItem("setnews_text");
var setmenus_military_text = sessionStorage.getItem("setmenus_military_text");
var setmenus_logs_text = sessionStorage.getItem("setmenus_logs_text");
var setmenus_map_text = sessionStorage.getItem("setmenus_map_text");
var setmenus_allies_text = sessionStorage.getItem("setmenus_allies_text");
var setmenus_leaderboard_text = sessionStorage.getItem("setmenus_leaderboard_text");
var setbonus_text1 = sessionStorage.getItem("setbonus_text1");
var setbonus_text2 = sessionStorage.getItem("setbonus_text2");
var setnotifications_text = sessionStorage.getItem("setnotifications_text");
var settrade_text = sessionStorage.getItem("settrade_text");
var setkings_text = sessionStorage.getItem("setkings_text");
var setembassies_text = sessionStorage.getItem("setembassies_text");
var setlbottom_text = sessionStorage.getItem("setlbottom_text");
var setarmies_text = sessionStorage.getItem("setarmies_text");
var setsupportunits_text = sessionStorage.getItem("setsupportunits_text");
var settradewagon_text = sessionStorage.getItem("settradewagon_text");
var setproduce_text = sessionStorage.getItem("setproduce_text");
var setupgrade_text = sessionStorage.getItem("setupgrade_text");
var setinfo_text = sessionStorage.getItem("setinfo_text");
var setage_text = sessionStorage.getItem("setage_text");
var setfarmer_text = sessionStorage.getItem("setfarmer_text");
var setwoodcutter_text = sessionStorage.getItem("setwoodcutter_text");
var setgoldminer_text = sessionStorage.getItem("setgoldminer_text");
var settype_text = sessionStorage.getItem("settype_text");
var setclass_text = sessionStorage.getItem("setclass_text");
var setpeasant_text = sessionStorage.getItem("setpeasant_text");
var setvillage_text = sessionStorage.getItem("setvillage_text");
var setvillage_text2 = sessionStorage.getItem("setvillage_text2");
var setbronze_text = sessionStorage.getItem("setbronze_text");
var setiron_text = sessionStorage.getItem("setiron_text");
var setancient_text = sessionStorage.getItem("setancient_text");
var setclassical_text = sessionStorage.getItem("setclassical_text");
var sethellenistic_text = sessionStorage.getItem("sethellenistic_text");
var setbronzeage_text = sessionStorage.getItem("setbronzeage_text");
var setironage_text = sessionStorage.getItem("setironage_text");
var setancientage_text = sessionStorage.getItem("setancientage_text");
var setclassicalage_text = sessionStorage.getItem("setclassicalage_text");
var sethellenisticage_text = sessionStorage.getItem("sethellenisticage_text");
var setkipdisplay1 = sessionStorage.getItem("setkipdisplay1");
var setkipdisplay2 = sessionStorage.getItem("setkipdisplay2");
var setkipdisplay3 = sessionStorage.getItem("setkipdisplay3");
var setkipdisplay4 = sessionStorage.getItem("setkipdisplay4");
var setkipdisplay5 = sessionStorage.getItem("setkipdisplay5");
var setkipnabdisplay1 = sessionStorage.getItem("setkipnabdisplay1");
var setkipnabdisplay2 = sessionStorage.getItem("setkipnabdisplay2");
var setkipnabdisplay3 = sessionStorage.getItem("setkipnabdisplay3");
var setkipnabdisplay4 = sessionStorage.getItem("setkipnabdisplay4");
var setnextage_text = sessionStorage.getItem("setnextage_text");
var setage_img = sessionStorage.getItem("setage_img");
var setlogindisplay1 = sessionStorage.getItem("setlogindisplay1");
var setlogindisplay2 = sessionStorage.getItem("setlogindisplay2");
var settoageiron1 = sessionStorage.getItem("settoageiron1");
var settoageiron2 = sessionStorage.getItem("settoageiron2");
var settoageancient1 = sessionStorage.getItem("settoageancient1");
var settoageancient2 = sessionStorage.getItem("settoageancient2");
var settoageclassical1 = sessionStorage.getItem("settoageclassical1");
var settoageclassical2 = sessionStorage.getItem("settoageclassical2");
var settoagehellenistic1 = sessionStorage.getItem("settoagehellenistic1");
var settoagehellenistic2 = sessionStorage.getItem("settoagehellenistic2");
var setage_points = sessionStorage.getItem("setage_points");
var setkip_text1 = sessionStorage.getItem("setkip_text1");
var setkip_text2 = sessionStorage.getItem("setkip_text2");
var setkip_text3 = sessionStorage.getItem("setkip_text3");
var setkip_text4 = sessionStorage.getItem("setkip_text4");
var setkip_text5 = sessionStorage.getItem("setkip_text5");
var setkip_text2_display = sessionStorage.getItem("setkip_text2_display");
var setkip_text3_display = sessionStorage.getItem("setkip_text3_display");
var setkip_text4_display = sessionStorage.getItem("setkip_text4_display");
var setkip_text5_display = sessionStorage.getItem("setkip_text5_display");
var seteconomy_text = sessionStorage.getItem("seteconomy_text");
var sethour_text = sessionStorage.getItem("sethour_text");
var setfood_text = sessionStorage.getItem("setfood_text");
var setwood_text = sessionStorage.getItem("setwood_text");
var setgold_text = sessionStorage.getItem("setgold_text");
var setdiamond_text = sessionStorage.getItem("setdiamond_text");
var setpopulation_text = sessionStorage.getItem("setpopulation_text");
var setkingdomcenter_text = sessionStorage.getItem("setkingdomcenter_text");
var setcolonies_text = sessionStorage.getItem("setcolonies_text");
var setcities_text = sessionStorage.getItem("setcities_text");
var setspy_text = sessionStorage.getItem("setspy_text");
var setstoragelimit_text = sessionStorage.getItem("setstoragelimit_text");
var setarcher_text = sessionStorage.getItem("setarcher_text");
var setplaces_text = sessionStorage.getItem("setplaces_text");
var setsearch_text = sessionStorage.getItem("setsearch_text");
var setsearch_input_text = sessionStorage.getItem("setsearch_input_text");
var setrandom_mapX = sessionStorage.getItem("setrandom_mapX");
var setrandom_mapY = sessionStorage.getItem("setrandom_mapY");

/* kp_settings */

function king_name_save() {
	sessionStorage.getItem("setkp_setting_king_name");
	
	var king_nameItem = document.getElementById("king_name_input").value;
	sessionStorage.setItem("king_name", king_nameItem);
	var kip_display_none_kingnameItem = "none";
	sessionStorage.setItem("kip_display_none_kingname", kip_display_none_kingnameItem);
	var kip_display_block_kingnameItem = "block";
	sessionStorage.setItem("kip_display_block_kingname", kip_display_block_kingnameItem);
	window.location.reload();
	
	Android.showToast(setkp_setting_king_name + ": " + king_nameItem);
};

function settings_languageEN(){
    var setflagEN = "url('images/united_states_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagEN);
	
	var setflag_languageEN = "English";
	sessionStorage.setItem("setflag_language", setflag_languageEN);
	
	var setflag_head_languageEN = "Language";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageEN);
	
	var setsettings_languageEN = "Settings";
	sessionStorage.setItem("setsettings_language", setsettings_languageEN);
	
	var setworldtext_languageEN = "World ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageEN);
	
	var setkp_setting_king_nameEN = "King name";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameEN);
	
	var setkp_process_textEN = "Process";
	sessionStorage.setItem("setkp_process_text", setkp_process_textEN);
	
	var setkp_messages_textEN = "Messages";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textEN);
	
	var setkp_buydiamonds_textEN = "Buy Diamonds";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textEN);
	
	var setsetting_a1_bottom_textEN = "King names must contain a maximum of 12 characters.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textEN);
	
	var setking_name_input_buttonEN = "Save";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonEN);
	
	var setquests_textEN = "Quests";
	sessionStorage.setItem("setquests_text", setquests_textEN);
	
	var setmarket_textEN = "Market";
	sessionStorage.setItem("setmarket_text", setmarket_textEN);
	
	var setmarket_text2EN = "Craft trade wagons and trade with other kingdoms!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2EN);
	
	var setbuildingcapacity_textEN = "Building capacity:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textEN);
	
	var setannouncement_textEN = "Announcement:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textEN);
	
	var setannouncement_text2EN = "Announcement";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2EN);
	
	var setnews_textEN = "News";
	sessionStorage.setItem("setnews_text", setnews_textEN);
	
	var setmenus_military_textEN = "Military";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textEN);
	
	var setmenus_logs_textEN = "Logs";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textEN);
	
	var setmenus_map_textEN = "Map";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textEN);
	
	var setmenus_allies_textEN = "Allies";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textEN);
	
	var setmenus_leaderboard_textEN = "Ranking";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textEN);
	
	var setbonus_text1EN = "Choose one of the treasure chests";
	sessionStorage.setItem("setbonus_text1", setbonus_text1EN);
	
	var setbonus_text2EN = "Your reward";
	sessionStorage.setItem("setbonus_text2", setbonus_text2EN);

    var setnotifications_textEN = "Notifications";
    sessionStorage.setItem("setnotifications_text", setnotifications_textEN);

    var settrade_textEN = "Trade";
    sessionStorage.setItem("settrade_text", settrade_textEN);

    var setkings_textEN = "Kings";
    sessionStorage.setItem("setkings_text", setkings_textEN);
    
    var setembassies_textEN = "Embassies";
    sessionStorage.setItem("setembassies_text", setembassies_textEN);
    
    var setlbottom_textEN = "You are not a member of an alliance!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textEN);

    var setarmies_textEN = "Armies";
    sessionStorage.setItem("setarmies_text", setarmies_textEN);

    var setsupportunits_textEN = "Support Units";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textEN);

    var settradewagon_textEN = "Trade Wagon ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textEN);

    var setproduce_textEN = "Produce";
    sessionStorage.setItem("setproduce_text", setproduce_textEN);

    var setupgrade_textEN = "Upgrade";
    sessionStorage.setItem("setupgrade_text", setupgrade_textEN);

    var setinfo_textEN = "Info";
    sessionStorage.setItem("setinfo_text", setinfo_textEN);

    var setage_textEN = "Age";
    sessionStorage.setItem("setage_text", setage_textEN);

    var setfarmer_textEN = "Farmer";
    sessionStorage.setItem("setfarmer_text", setfarmer_textEN);

    var setwoodcutter_textEN = "Woodcutter";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textEN);

    var setgoldminer_textEN = "Gold Miner";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textEN);

    var settype_textEN = "Type";
    sessionStorage.setItem("settype_text", settype_textEN);

    var setclass_textEN = "Class";
    sessionStorage.setItem("setclass_text", setclass_textEN);

    var setvillage_textEN = "Village";
    sessionStorage.setItem("setvillage_text", setvillage_textEN);

    var setvillage_text2EN = "Produce resources and improve the economy of the kingdom thanks to the peasants!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2EN);

    var setpeasant_textEN = "Peasant";
    sessionStorage.setItem("setpeasant_text", setpeasant_textEN);

    var setbronze_textEN = "Bronze";
    sessionStorage.setItem("setbronze_text", setbronze_textEN);

    var setiron_textEN = "Iron";
    sessionStorage.setItem("setiron_text", setiron_textEN);

    var setancient_textEN = "Ancient";
    sessionStorage.setItem("setancient_text", setancient_textEN);

    var setclassical_textEN = "Classical";
    sessionStorage.setItem("setclassical_text", setclassical_textEN);

    var sethellenistic_textEN = "Hellenistic";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textEN);

    var setbronzeage_textEN = "Bronze Age";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textEN);

    var setironage_textEN = "Iron Age";
    sessionStorage.setItem("setironage_text", setironage_textEN);

    var setancientage_textEN = "Ancient Age";
    sessionStorage.setItem("setancientage_text", setancientage_textEN);

    var setclassicalage_textEN = "Classical Age";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textEN);

    var sethellenisticage_textEN = "Hellenistic Age";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textEN);

    var setnextage_textEN = "Next Age";
    sessionStorage.setItem("setnextage_text", setnextage_textEN);

    var setage_pointsEN = "Age Points";
    sessionStorage.setItem("setage_points", setage_pointsEN);

    var setkip_text1EN = "Kingdom Info";
    sessionStorage.setItem("setkip_text1", setkip_text1EN);

    var setkip_text2EN = "1000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text2", setkip_text2EN);

    var setkip_text3EN = "3000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text3", setkip_text3EN);

    var setkip_text4EN = "7000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text4", setkip_text4EN);

    var setkip_text5EN = "15000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text5", setkip_text5EN);

    var seteconomy_textEN = "Economy";
    sessionStorage.setItem("seteconomy_text", seteconomy_textEN);

    var sethour_textEN = "Hour";
    sessionStorage.setItem("sethour_text", sethour_textEN);

    var setfood_textEN = "Food";
    sessionStorage.setItem("setfood_text", setfood_textEN);

    var setwood_textEN = "Wood";
    sessionStorage.setItem("setwood_text", setwood_textEN);

    var setgold_textEN = "Gold";
    sessionStorage.setItem("setgold_text", setgold_textEN);

    var setdiamond_textEN = "Diamond";
    sessionStorage.setItem("setdiamond_text", setdiamond_textEN);

    var setpopulation_textEN = "Population";
    sessionStorage.setItem("setpopulation_text", setpopulation_textEN);

    var setkingdomcenter_textEN = "Kingdom Center";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textEN);

    var setcolonies_textEN = "Colonies";
    sessionStorage.setItem("setcolonies_text", setcolonies_textEN);

    var setcities_textEN = "Cities";
    sessionStorage.setItem("setcities_text", setcities_textEN);

    var setspy_textEN = "Spy";
    sessionStorage.setItem("setspy_text", setspy_textEN);

    var setstoragelimit_textEN = "Storage Limit";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textEN);

    var setarcher_textEN = "Archer";
    sessionStorage.setItem("setarcher_text", setarcher_textEN);

    var setplaces_textEN = "Places";
    sessionStorage.setItem("setplaces_text", setplaces_textEN);

    var setsearch_textEN = "Search";
    sessionStorage.setItem("setsearch_text", setsearch_textEN);

    var setsearch_input_textEN = "Search for Players, Colonies and Cities";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textEN);
	
	window.location.reload();
	
	Android.showToast('Language successfully changed');
};

function settings_languageDE(){
	var setflagDE = "url('images/germany_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagDE);
	
	var setflag_languageDE = "Deutsche";
	sessionStorage.setItem("setflag_language", setflag_languageDE);
	
	var setflag_head_languageDE = "Sprache";
    sessionStorage.setItem("setflag_head_language", setflag_head_languageDE);
	
	var setsettings_languageDE = "Einstellungen";
	sessionStorage.setItem("setsettings_language", setsettings_languageDE);
	
	var setworldtext_languageDE = "Welt ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageDE);
	
	var setkp_setting_king_nameDE = "Königsname";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameDE);
	
	var setkp_process_textDE = "Prozess";
	sessionStorage.setItem("setkp_process_text", setkp_process_textDE);
	
	var setkp_messages_textDE = "Mitteilungen";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textDE);
	
	var setkp_buydiamonds_textDE = "Diamanten Kaufen";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textDE);
	
	var setsetting_a1_bottom_textDE = "Königsnamen dürfen maximal 12 Zeichen enthalten.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textDE);
	
	var setking_name_input_buttonDE = "Sparen";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonDE);
	
	var setquests_textDE = "Quests";
	sessionStorage.setItem("setquests_text", setquests_textDE);
	
	var setmarket_textDE = "Markt";
	sessionStorage.setItem("setmarket_text", setmarket_textDE);
	
	var setmarket_text2DE = "Basteln Sie Handelswagen und handeln Sie mit anderen Königreichen!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2DE);
	
	var setbuildingcapacity_textDE = "Gebäudekapazität:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textDE);
	
	var setannouncement_textDE = "Ankündigung:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textDE);
	
	var setannouncement_text2DE = "Ankündigung";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2DE);
	
	var setnews_textDE = "Nachrichten";
	sessionStorage.setItem("setnews_text", setnews_textDE);
	
	var setmenus_military_textDE = "Militär";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textDE);
	
	var setmenus_logs_textDE = "Protokolle";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textDE);
	
	var setmenus_map_textDE = "Karte";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textDE);
	
	var setmenus_allies_textDE = "Alliierte";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textDE);
	
	var setmenus_leaderboard_textDE = "Rangfolge";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textDE);
	
	var setbonus_text1DE = "Wähle eine der Schatzkisten";
	sessionStorage.setItem("setbonus_text1", setbonus_text1DE);
	
	var setbonus_text2DE = "Deine Belohnung";
	sessionStorage.setItem("setbonus_text2", setbonus_text2DE);

    var setnotifications_textDE = "Benachrichtigungen";
    sessionStorage.setItem("setnotifications_text", setnotifications_textDE);

    var settrade_textDE = "Handel";
    sessionStorage.setItem("settrade_text", settrade_textDE);

    var setkings_textDE = "Könige";
    sessionStorage.setItem("setkings_text", setkings_textDE);
    
    var setembassies_textDE = "Botschaften";
    sessionStorage.setItem("setembassies_text", setembassies_textDE);
    
    var setlbottom_textDE = "Sie sind kein Mitglied einer Allianz!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textDE);

    var setarmies_textDE = "Armeen";
    sessionStorage.setItem("setarmies_text", setarmies_textDE);

    var setsupportunits_textDE = "Support-Einheiten";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textDE);

    var settradewagon_textDE = "Handelswagen ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textDE);

    var setproduce_textDE = "Produzieren";
    sessionStorage.setItem("setproduce_text", setproduce_textDE);

    var setupgrade_textDE = "Nachrüsten";
    sessionStorage.setItem("setupgrade_text", setupgrade_textDE);

    var setinfo_textDE = "Die Info";
    sessionStorage.setItem("setinfo_text", setinfo_textDE);

    var setage_textDE = "Alter";
    sessionStorage.setItem("setage_text", setage_textDE);

    var setfarmer_textDE = "Farmer";
    sessionStorage.setItem("setfarmer_text", setfarmer_textDE);

    var setwoodcutter_textDE = "Holzfäller";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textDE);

    var setgoldminer_textDE = "Goldgräber";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textDE);

    var settype_textDE = "Typ";
    sessionStorage.setItem("settype_text", settype_textDE);

    var setclass_textDE = "Klasse";
    sessionStorage.setItem("setclass_text", setclass_textDE);

    var setvillage_textDE = "Dorf";
    sessionStorage.setItem("setvillage_text", setvillage_textDE);

    var setvillage_text2DE = "Produziere Ressourcen und verbessere die Wirtschaft des Königreichs dank der Bauern!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2DE);

    var setpeasant_textDE = "Bauer";
    sessionStorage.setItem("setpeasant_text", setpeasant_textDE);

    var setbronze_textDE = "Bronze";
    sessionStorage.setItem("setbronze_text", setbronze_textDE);

    var setiron_textDE = "Eisen";
    sessionStorage.setItem("setiron_text", setiron_textDE);

    var setancient_textDE = "Uralt";
    sessionStorage.setItem("setancient_text", setancient_textDE);

    var setclassical_textDE = "Klassik";
    sessionStorage.setItem("setclassical_text", setclassical_textDE);

    var sethellenistic_textDE = "Hellenistisch";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textDE);

    var setbronzeage_textDE = "Bronzezeit";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textDE);

    var setironage_textDE = "Eisenzeit";
    sessionStorage.setItem("setironage_text", setironage_textDE);

    var setancientage_textDE = "Altertum";
    sessionStorage.setItem("setancientage_text", setancientage_textDE);

    var setclassicalage_textDE = "Klassisches Alter";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textDE);

    var sethellenisticage_textDE = "Hellenistisches Zeitalter";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textDE);

    var setnextage_textDE = "Nächstes Alter";
    sessionStorage.setItem("setnextage_text", setnextage_textDE);

    var setage_pointsDE = "Alterspunkte";
    sessionStorage.setItem("setage_points", setage_pointsDE);

    var setkip_text1EN = "Königreich Info";
    sessionStorage.setItem("setkip_text1", setkip_text1EN);

    var setkip_text2DE = "1000 Alterspunkte sind erforderlich um zum nächsten Alter zu gelangen.";
    sessionStorage.setItem("setkip_text2", setkip_text2DE);

    var setkip_text3DE = "3000 Alterspunkte sind erforderlich um zum nächsten Alter zu gelangen.";
    sessionStorage.setItem("setkip_text3", setkip_text3DE);

    var setkip_text4DE = "7000 Alterspunkte sind erforderlich um zum nächsten Alter zu gelangen.";
    sessionStorage.setItem("setkip_text4", setkip_text4DE);

    var setkip_text5DE = "15000 Alterspunkte sind erforderlich um zum nächsten Alter zu gelangen.";
    sessionStorage.setItem("setkip_text5", setkip_text5DE);

    var seteconomy_textDE = "Wirtschaft";
    sessionStorage.setItem("seteconomy_text", seteconomy_textDE);

    var sethour_textDE = "Stunde";
    sessionStorage.setItem("sethour_text", sethour_textDE);

    var setfood_textDE = "Essen";
    sessionStorage.setItem("setfood_text", setfood_textDE);

    var setwood_textDE = "Holz";
    sessionStorage.setItem("setwood_text", setwood_textDE);

    var setgold_textDE = "Gold";
    sessionStorage.setItem("setgold_text", setgold_textDE);

    var setdiamond_textDE = "Diamant";
    sessionStorage.setItem("setdiamond_text", setdiamond_textDE);

    var setpopulation_textDE = "Population";
    sessionStorage.setItem("setpopulation_text", setpopulation_textDE);

    var setkingdomcenter_textDE = "Königreichszentrum";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textDE);

    var setcolonies_textDE = "Kolonien";
    sessionStorage.setItem("setcolonies_text", setcolonies_textDE);

    var setcities_textDE = "Städte";
    sessionStorage.setItem("setcities_text", setcities_textDE);

    var setspy_textDE = "Spion";
    sessionStorage.setItem("setspy_text", setspy_textDE);

    var setstoragelimit_textDE = "Speicherlimit";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textDE);

    var setarcher_textDE = "Bogenschütze";
    sessionStorage.setItem("setarcher_text", setarcher_textDE);

    var setplaces_textDE = "Setzt";
    sessionStorage.setItem("setplaces_text", setplaces_textDE);

    var setsearch_textDE = "Suche";
    sessionStorage.setItem("setsearch_text", setsearch_textDE);

    var setsearch_input_textDE = "Suche nach Spielern, Kolonien und Städten";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textDE);
	
	window.location.reload();
	
	Android.showToast('Sprache erfolgreich geändert');
};

function settings_languageFR(){
	var setflagFR = "url('images/france_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagFR);
	
	var setflag_languageFR = "Français";
	sessionStorage.setItem("setflag_language", setflag_languageFR);
	
	var setflag_head_languageFR = "Langue";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageFR);
	
	var setsettings_languageFR = "Paramètres";
	sessionStorage.setItem("setsettings_language", setsettings_languageFR);
	
	var setworldtext_languageFR = "Monde ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageFR);
	
	var setkp_setting_king_nameFR = "Nom du roi";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameFR);
	
	var setkp_process_textFR = "Traiter";
	sessionStorage.setItem("setkp_process_text", setkp_process_textFR);
	
	var setkp_messages_textFR = "Messages";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textFR);
	
	var setkp_buydiamonds_textFR = "Acheter Diamants";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textFR);
	
	var setsetting_a1_bottom_textFR = "Les noms de roi doivent contenir un maximum de 12 caractères.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textFR);
	
	var setking_name_input_buttonFR = "Sauvegarder";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonFR);
	
	var setquests_textFR = "Quêtes";
	sessionStorage.setItem("setquests_text", setquests_textFR);
	
	var setmarket_textFR = "Marché";
	sessionStorage.setItem("setmarket_text", setmarket_textFR);
	
	var setmarket_text2FR = "Fabriquez des chariots et échangez avec d'autres royaumes!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2FR);
	
	var setbuildingcapacity_textFR = "Capacité de construction:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textFR);
	
	var setannouncement_textFR = "Annonce:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textFR);
	
	var setannouncement_text2FR = "Annonce";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2FR);
	
	var setnews_textFR = "Nouvelles";
	sessionStorage.setItem("setnews_text", setnews_textFR);
	
	var setmenus_military_textFR = "Militaire";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textFR);
	
	var setmenus_logs_textFR = "Journaux";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textFR);
	
	var setmenus_map_textFR = "Carte";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textFR);
	
	var setmenus_allies_textFR = "Alliés";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textFR);
	
	var setmenus_leaderboard_textFR = "Classement";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textFR);
	
	var setbonus_text1FR = "Choisissez l'un des coffres au trésor";
	sessionStorage.setItem("setbonus_text1", setbonus_text1FR);
	
	var setbonus_text2FR = "Ta récompense";
	sessionStorage.setItem("setbonus_text2", setbonus_text2FR);

    var setnotifications_textFR = "Notifications";
    sessionStorage.setItem("setnotifications_text", setnotifications_textFR);

    var settrade_textFR = "Échanger";
    sessionStorage.setItem("settrade_text", settrade_textFR);

    var setkings_textFR = "Rois";
    sessionStorage.setItem("setkings_text", setkings_textFR);
    
    var setembassies_textFR = "Ambassades";
    sessionStorage.setItem("setembassies_text", setembassies_textFR);
    
    var setlbottom_textFR = "Vous n'êtes pas membre d'une alliance!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textFR);

    var setarmies_textFR = "Armées";
    sessionStorage.setItem("setarmies_text", setarmies_textFR);

    var setsupportunits_textFR = "Unités de soutien";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textFR);

    var settradewagon_textFR = "Wagon de commerce ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textFR);

    var setproduce_textFR = "Produire";
    sessionStorage.setItem("setproduce_text", setproduce_textFR);

    var setupgrade_textFR = "Améliorer";
    sessionStorage.setItem("setupgrade_text", setupgrade_textFR);

    var setinfo_textFR = "Info";
    sessionStorage.setItem("setinfo_text", setinfo_textFR);

    var setage_textFR = "Âge";
    sessionStorage.setItem("setage_text", setage_textFR);

    var setfarmer_textFR = "Agriculteur";
    sessionStorage.setItem("setfarmer_text", setfarmer_textFR);

    var setwoodcutter_textFR = "Bûcheron";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textFR);

    var setgoldminer_textFR = "Chercheur d'or";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textFR);

    var settype_textFR = "Taper";
    sessionStorage.setItem("settype_text", settype_textFR);

    var setclass_textFR = "Classer";
    sessionStorage.setItem("setclass_text", setclass_textFR);

    var setvillage_textFR = "Village";
    sessionStorage.setItem("setvillage_text", setvillage_textFR);

    var setvillage_text2FR = "Produisez des ressources et améliorez l'économie du royaume grâce aux paysans!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2FR);

    var setpeasant_textFR = "Paysan";
    sessionStorage.setItem("setpeasant_text", setpeasant_textFR);

    var setbronze_textFR = "Bronze";
    sessionStorage.setItem("setbronze_text", setbronze_textFR);

    var setiron_textFR = "Le fer";
    sessionStorage.setItem("setiron_text", setiron_textFR);

    var setancient_textFR = "Ancien";
    sessionStorage.setItem("setancient_text", setancient_textFR);

    var setclassical_textFR = "Classique";
    sessionStorage.setItem("setclassical_text", setclassical_textFR);

    var sethellenistic_textFR = "Hellénistique";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textFR);

    var setbronzeage_textFR = "Âge de bronze";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textFR);

    var setironage_textFR = "Âge de fer";
    sessionStorage.setItem("setironage_text", setironage_textFR);

    var setancientage_textFR = "Âge antique";
    sessionStorage.setItem("setancientage_text", setancientage_textFR);

    var setclassicalage_textFR = "Âge classique";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textFR);

    var sethellenisticage_textFR = "Âge hellénistique";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textFR);

    var setnextage_textFR = "Âge suivant";
    sessionStorage.setItem("setnextage_text", setnextage_textFR);

    var setage_pointsFR = "Points d'âge";
    sessionStorage.setItem("setage_points", setage_pointsFR);

    var setkip_text1FR = "Infos sur le royaume";
    sessionStorage.setItem("setkip_text1", setkip_text1FR);

    var setkip_text2FR = "1000 points d'âge sont nécessaires pour passer à l'âge suivant.";
    sessionStorage.setItem("setkip_text2", setkip_text2FR);

    var setkip_text3FR = "3000 points d'âge sont nécessaires pour passer à l'âge suivant.";
    sessionStorage.setItem("setkip_text3", setkip_text3FR);

    var setkip_text4FR = "7000 points d'âge sont nécessaires pour passer à l'âge suivant.";
    sessionStorage.setItem("setkip_text4", setkip_text4FR);

    var setkip_text5FR = "15000 points d'âge sont nécessaires pour passer à l'âge suivant.";
    sessionStorage.setItem("setkip_text5", setkip_text5FR);

    var seteconomy_textFR = "Économie";
    sessionStorage.setItem("seteconomy_text", seteconomy_textFR);

    var sethour_textFR = "Heure";
    sessionStorage.setItem("sethour_text", sethour_textFR);

    var setfood_textFR = "Aliments";
    sessionStorage.setItem("setfood_text", setfood_textFR);

    var setwood_textFR = "Bois";
    sessionStorage.setItem("setwood_text", setwood_textFR);

    var setgold_textFR = "Or";
    sessionStorage.setItem("setgold_text", setgold_textFR);

    var setdiamond_textFR = "Diamant";
    sessionStorage.setItem("setdiamond_text", setdiamond_textFR);

    var setpopulation_textFR = "Population";
    sessionStorage.setItem("setpopulation_text", setpopulation_textFR);

    var setkingdomcenter_textFR = "Centre du Royaume";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textFR);

    var setcolonies_textFR = "Colonies";
    sessionStorage.setItem("setcolonies_text", setcolonies_textFR);

    var setcities_textFR = "Villes";
    sessionStorage.setItem("setcities_text", setcities_textFR);

    var setspy_textFR = "Espionner";
    sessionStorage.setItem("setspy_text", setspy_textFR);

    var setstoragelimit_textFR = "Limite de stockage";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textFR);

    var setarcher_textFR = "Archer";
    sessionStorage.setItem("setarcher_text", setarcher_textFR);

    var setplaces_textFR = "Des endroits";
    sessionStorage.setItem("setplaces_text", setplaces_textFR);

    var setsearch_textFR = "Rechercher";
    sessionStorage.setItem("setsearch_text", setsearch_textFR);

    var setsearch_input_textFR = "Rechercher des joueurs, des colonies et des villes";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textFR);
	
	window.location.reload();
	
	Android.showToast('Langue modifiée avec succès');
};

function settings_languageRU(){
	var setflagRU = "url('images/russia_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagRU);
	
	var setflag_languageRU = "Pусский";
	sessionStorage.setItem("setflag_language", setflag_languageRU);
	
	var setflag_head_languageRU = "язык";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageRU);
	
	var setsettings_languageRU = "Настройки";
	sessionStorage.setItem("setsettings_language", setsettings_languageRU);
	
	var setworldtext_languageRU = "Мир ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageRU);
	
	var setkp_setting_king_nameRU = "Имя короля";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameRU);
	
	var setkp_process_textRU = "Процесс";
	sessionStorage.setItem("setkp_process_text", setkp_process_textRU);
	
	var setkp_messages_textRU = "Сообщения";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textRU);
	
	var setkp_buydiamonds_textRU = "бриллианты";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textRU);
	
	var setsetting_a1_bottom_textRU = "Имена королей должны содержать не более 12 символов.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textRU);
	
	var setking_name_input_buttonRU = "Сохранить";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonRU);
	
	var setquests_textRU = "Квесты";
	sessionStorage.setItem("setquests_text", setquests_textRU);
	
	var setmarket_textRU = "Рынок";
	sessionStorage.setItem("setmarket_text", setmarket_textRU);
	
	var setmarket_text2RU = "Создавайте торговые повозки и торгуйте с другими королевствами!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2RU);
	
	var setbuildingcapacity_textRU = "Вместимость здания:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textRU);
	
	var setannouncement_textRU = "Объявление:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textRU);
	
	var setannouncement_text2RU = "Объявление";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2RU);
	
	var setnews_textRU = "Новости";
	sessionStorage.setItem("setnews_text", setnews_textRU);
	
	var setmenus_military_textRU = "Военный";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textRU);
	
	var setmenus_logs_textRU = "Журналы";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textRU);
	
	var setmenus_map_textRU = "карта";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textRU);
	
	var setmenus_allies_textRU = "Союзники";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textRU);
	
	var setmenus_leaderboard_textRU = "Рейтинг";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textRU);
	
	var setbonus_text1RU = "Выберите один из сундуков с сокровищами";
	sessionStorage.setItem("setbonus_text1", setbonus_text1RU);
	
	var setbonus_text2RU = "Ваша награда";
	sessionStorage.setItem("setbonus_text2", setbonus_text2RU);
	
	var setnotifications_textRU = "Уведомления";
    sessionStorage.setItem("setnotifications_text", setnotifications_textRU);

    var settrade_textRU = "Торговля";
    sessionStorage.setItem("settrade_text", settrade_textRU);

    var setkings_textRU = "Короли";
    sessionStorage.setItem("setkings_text", setkings_textRU);
    
    var setembassies_textRU = "Посольства";
    sessionStorage.setItem("setembassies_text", setembassies_textRU);
    
    var setlbottom_textRU = "Вы не состоите в альянсе!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textRU);

    var setarmies_textRU = "Армии";
    sessionStorage.setItem("setarmies_text", setarmies_textRU);

    var setsupportunits_textRU = "войска поддержки";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textRU);

    var settradewagon_textRU = "Торговый вагон ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textRU);

    var setproduce_textRU = "Производить";
    sessionStorage.setItem("setproduce_text", setproduce_textRU);

    var setupgrade_textRU = "Обновление";
    sessionStorage.setItem("setupgrade_text", setupgrade_textRU);

    var setinfo_textRU = "Информация";
    sessionStorage.setItem("setinfo_text", setinfo_textRU);

    var setage_textRU = "Возраст";
    sessionStorage.setItem("setage_text", setage_textRU);

    var setfarmer_textRU = "Фермер";
    sessionStorage.setItem("setfarmer_text", setfarmer_textRU);

    var setwoodcutter_textRU = "Дровосек";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textRU);

    var setgoldminer_textRU = "Золотоискатель";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textRU);

    var settype_textRU = "Тип";
    sessionStorage.setItem("settype_text", settype_textRU);

    var setclass_textRU = "Класс";
    sessionStorage.setItem("setclass_text", setclass_textRU);

    var setvillage_textRU = "Деревня";
    sessionStorage.setItem("setvillage_text", setvillage_textRU);

    var setvillage_text2RU = "Добывайте ресурсы и улучшайте экономику королевства благодаря крестьянам!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2RU);

    var setpeasant_textRU = "Крестьянин";
    sessionStorage.setItem("setpeasant_text", setpeasant_textRU);

    var setbronze_textRU = "Бронза";
    sessionStorage.setItem("setbronze_text", setbronze_textRU);

    var setiron_textRU = "Утюг";
    sessionStorage.setItem("setiron_text", setiron_textRU);

    var setancient_textRU = "Древний";
    sessionStorage.setItem("setancient_text", setancient_textRU);

    var setclassical_textRU = "Классический";
    sessionStorage.setItem("setclassical_text", setclassical_textRU);

    var sethellenistic_textRU = "Эллинистический";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textRU);

    var setbronzeage_textRU = "Бронзовый век";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textRU);

    var setironage_textRU = "Железный век";
    sessionStorage.setItem("setironage_text", setironage_textRU);

    var setancientage_textRU = "Древний век";
    sessionStorage.setItem("setancientage_text", setancientage_textRU);

    var setclassicalage_textRU = "Классическая эпоха";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textRU);

    var sethellenisticage_textRU = "Эллинистический век";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textRU);

    var setnextage_textRU = "Следующая эпоха";
    sessionStorage.setItem("setnextage_text", setnextage_textRU);

    var setage_pointsRU = "Возрастные баллы";
    sessionStorage.setItem("setage_points", setage_pointsRU);

    var setkip_text1RU = "Информация о королевстве";
    sessionStorage.setItem("setkip_text1", setkip_text1RU);

    var setkip_text2RU = "Для перехода в следующий возраст требуется 1000 возрастных баллов.";
    sessionStorage.setItem("setkip_text2", setkip_text2RU);

    var setkip_text3RU = "Для перехода в следующий возраст требуется 3000 возрастных баллов.";
    sessionStorage.setItem("setkip_text3", setkip_text3RU);

    var setkip_text4RU = "Для перехода в следующий возраст требуется 7000 возрастных баллов.";
    sessionStorage.setItem("setkip_text4", setkip_text4RU);

    var setkip_text5RU = "Для перехода в следующий возраст требуется 15000 возрастных баллов.";
    sessionStorage.setItem("setkip_text5", setkip_text5RU);

    var seteconomy_textRU = "Экономика";
    sessionStorage.setItem("seteconomy_text", seteconomy_textRU);

    var sethour_textRU = "Час";
    sessionStorage.setItem("sethour_text", sethour_textRU);

    var setfood_textRU = "Еда";
    sessionStorage.setItem("setfood_text", setfood_textRU);

    var setwood_textRU = "Древесина";
    sessionStorage.setItem("setwood_text", setwood_textRU);

    var setgold_textRU = "Золото";
    sessionStorage.setItem("setgold_text", setgold_textRU);

    var setdiamond_textRU = "Алмазный";
    sessionStorage.setItem("setdiamond_text", setdiamond_textRU);

    var setpopulation_textRU = "Население";
    sessionStorage.setItem("setpopulation_text", setpopulation_textRU);

    var setkingdomcenter_textRU = "Центр Царства";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textRU);

    var setcolonies_textRU = "Колонии";
    sessionStorage.setItem("setcolonies_text", setcolonies_textRU);

    var setcities_textRU = "Города";
    sessionStorage.setItem("setcities_text", setcities_textRU);

    var setspy_textRU = "Шпион";
    sessionStorage.setItem("setspy_text", setspy_textRU);

    var setstoragelimit_textRU = "Предел хранения";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textRU);

    var setarcher_textRU = "Лучник";
    sessionStorage.setItem("setarcher_text", setarcher_textRU);

    var setplaces_textRU = "Места";
    sessionStorage.setItem("setplaces_text", setplaces_textRU);

    var setsearch_textRU = "Поиск";
    sessionStorage.setItem("setsearch_text", setsearch_textRU);

    var setsearch_input_textRU = "Поиск игроков, колоний и городов";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textRU);
	
	window.location.reload();
	
	Android.showToast('Язык успешно изменен');
};

function settings_languageTR(){
	var setflagTR = "url('images/turkey_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagTR);
	
	var setflag_languageTR = "Türkçe";
	sessionStorage.setItem("setflag_language", setflag_languageTR);
	
	var setflag_head_languageTR = "Dil";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageTR);
	
	var setsettings_languageTR = "Ayarlar";
	sessionStorage.setItem("setsettings_language", setsettings_languageTR);
	
	var setworldtext_languageTR = "Dünya ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageTR);
	
	var setkp_setting_king_nameTR = "Kral adı";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameTR);
	
	var setkp_process_textTR = "İşlemler";
	sessionStorage.setItem("setkp_process_text", setkp_process_textTR);
	
	var setkp_messages_textTR = "Mesajlar";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textTR);
	
	var setkp_buydiamonds_textTR = "Elmas Satın al";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textTR);
	
	var setsetting_a1_bottom_textTR = "Kral isimleri en fazla 12 karakter içermelidir.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textTR);
	
	var setking_name_input_buttonTR = "Kaydet";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonTR);
	
	var setquests_textTR = "Görevler";
	sessionStorage.setItem("setquests_text", setquests_textTR);
	
	var setmarket_textTR = "Market";
	sessionStorage.setItem("setmarket_text", setmarket_textTR);
	
	var setmarket_text2TR = "Ticaret vagonları üretin ve diğer krallıklarla ticaret yapın!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2TR);
	
	var setbuildingcapacity_textTR = "Bina kapasitesi:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textTR);
	
	var setannouncement_textTR = "Duyuru:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textTR);
	
	var setannouncement_text2TR = "Duyuru";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2TR);
	
	var setnews_textTR = "Haberler";
	sessionStorage.setItem("setnews_text", setnews_textTR);
	
	var setmenus_military_textTR = "Askeri";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textTR);
	
	var setmenus_logs_textTR = "Kayıtlar";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textTR);
	
	var setmenus_map_textTR = "Harita";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textTR);
	
	var setmenus_allies_textTR = "İttifaklar";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textTR);
	
	var setmenus_leaderboard_textTR = "Sıralama";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textTR);
	
	var setbonus_text1TR = "Hazine sandıklarından birini seçin";
	sessionStorage.setItem("setbonus_text1", setbonus_text1TR);
	
	var setbonus_text2TR = "Senin ödülün";
	sessionStorage.setItem("setbonus_text2", setbonus_text2TR);
	
	var setnotifications_textTR = "Bildirimler";
    sessionStorage.setItem("setnotifications_text", setnotifications_textTR);

    var settrade_textTR = "Ticaret";
    sessionStorage.setItem("settrade_text", settrade_textTR);

    var setkings_textTR = "Krallar";
    sessionStorage.setItem("setkings_text", setkings_textTR);
    
    var setembassies_textTR = "Elçilikler";
    sessionStorage.setItem("setembassies_text", setembassies_textTR);
    
    var setlbottom_textTR = "Bir ittifaka üye değilsiniz!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textTR);

    var setarmies_textTR = "Ordular";
    sessionStorage.setItem("setarmies_text", setarmies_textTR);

    var setsupportunits_textTR = "Destek Üniteleri";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textTR);

    var settradewagon_textTR = "Ticaret Vagonu ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textTR);

    var setproduce_textTR = "Üret";
    sessionStorage.setItem("setproduce_text", setproduce_textTR);

    var setupgrade_textTR = "Yükselt";
    sessionStorage.setItem("setupgrade_text", setupgrade_textTR);

    var setinfo_textTR = "Bilgi";
    sessionStorage.setItem("setinfo_text", setinfo_textTR);

    var setage_textTR = "Çağ";
    sessionStorage.setItem("setage_text", setage_textTR);

    var setfarmer_textTR = "Çiftçi";
    sessionStorage.setItem("setfarmer_text", setfarmer_textTR);

    var setwoodcutter_textTR = "Oduncu";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textTR);

    var setgoldminer_textTR = "Altın Madencisi";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textTR);

    var settype_textTR = "Tür";
    sessionStorage.setItem("settype_text", settype_textTR);

    var setclass_textTR = "Sınıf";
    sessionStorage.setItem("setclass_text", setclass_textTR);

    var setvillage_textTR = "Köy";
    sessionStorage.setItem("setvillage_text", setvillage_textTR);

    var setvillage_text2TR = "Köylüler sayesinde kaynak üretin ve krallığın ekonomisini iyileştirin!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2TR);

    var setpeasant_textTR = "Köylü";
    sessionStorage.setItem("setpeasant_text", setpeasant_textTR);

    var setbronze_textTR = "Tunç";
    sessionStorage.setItem("setbronze_text", setbronze_textTR);

    var setiron_textTR = "Demir";
    sessionStorage.setItem("setiron_text", setiron_textTR);

    var setancient_textTR = "Antik";
    sessionStorage.setItem("setancient_text", setancient_textTR);

    var setclassical_textTR = "Klasik";
    sessionStorage.setItem("setclassical_text", setclassical_textTR);

    var sethellenistic_textTR = "Helenistik";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textTR);

    var setbronzeage_textTR = "Tunç Çağı";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textTR);

    var setironage_textTR = "Demir Çağı";
    sessionStorage.setItem("setironage_text", setironage_textTR);

    var setancientage_textTR = "Antik Çağı";
    sessionStorage.setItem("setancientage_text", setancientage_textTR);

    var setclassicalage_textTR = "Klasik Çağı";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textTR);

    var sethellenisticage_textTR = "Helenistik Çağı";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textTR);

    var setnextage_textTR = "Çağı Geç";
    sessionStorage.setItem("setnextage_text", setnextage_textTR);

    var setage_pointsTR = "Çağ Puanı";
    sessionStorage.setItem("setage_points", setage_pointsTR);

    var setkip_text1TR = "Krallık Bilgileri";
    sessionStorage.setItem("setkip_text1", setkip_text1TR);

    var setkip_text2TR = "Bir sonraki çağa geçmek için 1000 çağ puanı gerekmektedir.";
    sessionStorage.setItem("setkip_text2", setkip_text2TR);

    var setkip_text3TR = "Bir sonraki çağa geçmek için 3000 çağ puanı gerekmektedir.";
    sessionStorage.setItem("setkip_text3", setkip_text3TR);

    var setkip_text4TR = "Bir sonraki çağa geçmek için 7000 çağ puanı gerekmektedir.";
    sessionStorage.setItem("setkip_text4", setkip_text4TR);

    var setkip_text5TR = "Bir sonraki çağa geçmek için 15000 çağ puanı gerekmektedir.";
    sessionStorage.setItem("setkip_text5", setkip_text5TR);

    var seteconomy_textTR = "Ekonomi";
    sessionStorage.setItem("seteconomy_text", seteconomy_textTR);

    var sethour_textTR = "Saat";
    sessionStorage.setItem("sethour_text", sethour_textTR);

    var setfood_textTR = "Besin";
    sessionStorage.setItem("setfood_text", setfood_textTR);

    var setwood_textTR = "Odun";
    sessionStorage.setItem("setwood_text", setwood_textTR);

    var setgold_textTR = "Altın";
    sessionStorage.setItem("setgold_text", setgold_textTR);

    var setdiamond_textTR = "Elmas";
    sessionStorage.setItem("setdiamond_text", setdiamond_textTR);

    var setpopulation_textTR = "Nüfus";
    sessionStorage.setItem("setpopulation_text", setpopulation_textTR);

    var setkingdomcenter_textTR = "Krallık Merkezi";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textTR);

    var setcolonies_textTR = "Koloniler";
    sessionStorage.setItem("setcolonies_text", setcolonies_textTR);

    var setcities_textTR = "Şehirler";
    sessionStorage.setItem("setcities_text", setcities_textTR);

    var setspy_textTR = "Casus";
    sessionStorage.setItem("setspy_text", setspy_textTR);

    var setstoragelimit_textTR = "Depolama Sınırı";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textTR);

    var setarcher_textTR = "Okçu";
    sessionStorage.setItem("setarcher_text", setarcher_textTR);

    var setplaces_textTR = "Yerler";
    sessionStorage.setItem("setplaces_text", setplaces_textTR);

    var setsearch_textTR = "Arama";
    sessionStorage.setItem("setsearch_text", setsearch_textTR);

    var setsearch_input_textTR = "Oyuncuları, Kolonileri ve Şehirleri Ara";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textTR);
	
	window.location.reload();
	
	Android.showToast('Dil başarıyla değiştirildi');
};

function settings_languagePT(){
	var setflagPT = "url('images/portugal_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagPT);
	
	var setflag_languagePT = "Português";
	sessionStorage.setItem("setflag_language", setflag_languagePT);
	
	var setflag_head_languagePT = "língua";
	sessionStorage.setItem("setflag_head_language", setflag_head_languagePT);
	
	var setsettings_languagePT = "Definições";
	sessionStorage.setItem("setsettings_language", setsettings_languagePT);
	
	var setworldtext_languagePT = "Mundo ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languagePT);
	
	var setkp_setting_king_namePT = "Nome do rei";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_namePT);
	
	var setkp_process_textPT = "Processar";
	sessionStorage.setItem("setkp_process_text", setkp_process_textPT);
	
	var setkp_messages_textPT = "Mensagens";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textPT);
	
	var setkp_buydiamonds_textPT = "Diamantes";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textPT);
	
	var setsetting_a1_bottom_textPT = "Os nomes dos reis devem conter no máximo 12 caracteres.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textPT);
	
	var setking_name_input_buttonPT = "Salvar";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonPT);
	
	var setquests_textPT = "Missões";
	sessionStorage.setItem("setquests_text", setquests_textPT);
	
	var setmarket_textPT = "Mercado";
	sessionStorage.setItem("setmarket_text", setmarket_textPT);
	
	var setmarket_text2PT = "Crie carroças de comércio e negocie com outros reinos!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2PT);
	
	var setbuildingcapacity_textPT = "Capacidade de construção:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textPT);
	
	var setannouncement_textPT = "Anúncio:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textPT);
	
	var setannouncement_text2PT = "Anúncio";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2PT);
	
	var setnews_textPT = "Notícias";
	sessionStorage.setItem("setnews_text", setnews_textPT);
	
	var setmenus_military_textPT = "Militares";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textPT);
	
	var setmenus_logs_textPT = "Histórico";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textPT);
	
	var setmenus_map_textPT = "Mapa";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textPT);
	
	var setmenus_allies_textPT = "Aliados";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textPT);
	
	var setmenus_leaderboard_textPT = "Ranking";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textPT);
	
	var setbonus_text1PT = "Escolha um dos baús de tesouro";
	sessionStorage.setItem("setbonus_text1", setbonus_text1PT);
	
	var setbonus_text2PT = "Sua recompensa";
	sessionStorage.setItem("setbonus_text2", setbonus_text2PT);
	
	var setnotifications_textPT = "Notificações";
    sessionStorage.setItem("setnotifications_text", setnotifications_textPT);

    var settrade_textPT = "Troca";
    sessionStorage.setItem("settrade_text", settrade_textPT);

    var setkings_textPT = "Reis";
    sessionStorage.setItem("setkings_text", setkings_textPT);
    
    var setembassies_textPT = "Embaixadas";
    sessionStorage.setItem("setembassies_text", setembassies_textPT);
    
    var setlbottom_textPT = "Você não é membro de uma aliança!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textPT);

    var setarmies_textPT = "Exércitos";
    sessionStorage.setItem("setarmies_text", setarmies_textPT);

    var setsupportunits_textPT = "Unidades de Apoio";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textPT);

    var settradewagon_textPT = "Vagão de comércio ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textPT);

    var setproduce_textPT = "Produzir";
    sessionStorage.setItem("setproduce_text", setproduce_textPT);

    var setupgrade_textPT = "Melhoria";
    sessionStorage.setItem("setupgrade_text", setupgrade_textPT);

    var setinfo_textPT = "Informações";
    sessionStorage.setItem("setinfo_text", setinfo_textPT);

    var setage_textPT = "Era";
    sessionStorage.setItem("setage_text", setage_textPT);

    var setfarmer_textPT = "Agricultor";
    sessionStorage.setItem("setfarmer_text", setfarmer_textPT);

    var setwoodcutter_textPT = "Lenhador";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textPT);

    var setgoldminer_textPT = "Garimpeiro";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textPT);

    var settype_textPT = "Tipo";
    sessionStorage.setItem("settype_text", settype_textPT);

    var setclass_textPT = "Classe";
    sessionStorage.setItem("setclass_text", setclass_textPT);

    var setvillage_textPT = "Vila";
    sessionStorage.setItem("setvillage_text", setvillage_textPT);

    var setvillage_text2PT = "Produza recursos e melhore a economia do reino graças aos camponeses!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2PT);

    var setpeasant_textPT = "Camponês";
    sessionStorage.setItem("setpeasant_text", setpeasant_textPT);

    var setbronze_textPT = "Bronze";
    sessionStorage.setItem("setbronze_text", setbronze_textPT);

    var setiron_textPT = "Ferro";
    sessionStorage.setItem("setiron_text", setiron_textPT);

    var setancient_textPT = "Antigo";
    sessionStorage.setItem("setancient_text", setancient_textPT);

    var setclassical_textPT = "Clássico";
    sessionStorage.setItem("setclassical_text", setclassical_textPT);

    var sethellenistic_textPT = "Helenístico";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textPT);

    var setbronzeage_textPT = "Idade do bronze";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textPT);

    var setironage_textPT = "Era do aço";
    sessionStorage.setItem("setironage_text", setironage_textPT);

    var setancientage_textPT = "Idade Antiga";
    sessionStorage.setItem("setancientage_text", setancientage_textPT);

    var setclassicalage_textPT = "Idade Clássica";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textPT);

    var sethellenisticage_textPT = "Era helenística";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textPT);

    var setnextage_textPT = "Próxima Era";
    sessionStorage.setItem("setnextage_text", setnextage_textPT);

    var setage_pointsPT = "Pontos de Idade";
    sessionStorage.setItem("setage_points", setage_pointsPT);

    var setkip_text1PT = "Informação do Reino";
    sessionStorage.setItem("setkip_text1", setkip_text1PT);

    var setkip_text2PT = "São necessários 1000 pontos de idade para passar para a próxima idade.";
    sessionStorage.setItem("setkip_text2", setkip_text2PT);

    var setkip_text3PT = "São necessários 3000 pontos de idade para passar para a próxima idade.";
    sessionStorage.setItem("setkip_text3", setkip_text3PT);

    var setkip_text4PT = "São necessários 7000 pontos de idade para passar para a próxima idade.";
    sessionStorage.setItem("setkip_text4", setkip_text4PT);

    var setkip_text5PT = "São necessários 15000 pontos de idade para passar para a próxima idade.";
    sessionStorage.setItem("setkip_text5", setkip_text5PT);

    var seteconomy_textPT = "Economia";
    sessionStorage.setItem("seteconomy_text", seteconomy_textPT);

    var sethour_textPT = "Hora";
    sessionStorage.setItem("sethour_text", sethour_textPT);

    var setfood_textPT = "Comida";
    sessionStorage.setItem("setfood_text", setfood_textPT);

    var setwood_textPT = "Madeira";
    sessionStorage.setItem("setwood_text", setwood_textPT);

    var setgold_textPT = "Ouro";
    sessionStorage.setItem("setgold_text", setgold_textPT);

    var setdiamond_textPT = "Diamante";
    sessionStorage.setItem("setdiamond_text", setdiamond_textPT);

    var setpopulation_textPT = "População";
    sessionStorage.setItem("setpopulation_text", setpopulation_textPT);

    var setkingdomcenter_textPT = "Kingdom Centre";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textPT);

    var setcolonies_textPT = "Colônias";
    sessionStorage.setItem("setcolonies_text", setcolonies_textPT);

    var setcities_textPT = "Cidades";
    sessionStorage.setItem("setcities_text", setcities_textPT);

    var setspy_textPT = "Espião";
    sessionStorage.setItem("setspy_text", setspy_textPT);

    var setstoragelimit_textPT = "Limite de Armazenamento";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textPT);

    var setarcher_textPT = "Arqueiro";
    sessionStorage.setItem("setarcher_text", setarcher_textPT);

    var setplaces_textPT = "Locais";
    sessionStorage.setItem("setplaces_text", setplaces_textPT);

    var setsearch_textPT = "Procurar";
    sessionStorage.setItem("setsearch_text", setsearch_textPT);

    var setsearch_input_textPT = "Procure jogadores, colônias e cidades";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textPT);
	
	window.location.reload();
	
	Android.showToast('Idioma alterado com sucesso');
};

function settings_languageES(){
	var setflagES = "url('images/spain_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagES);
	
	var setflag_languageES = "Español";
	sessionStorage.setItem("setflag_language", setflag_languageES);
	
	var setflag_head_languageES = "idioma";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageES);
	
	var setsettings_languageES = "Ajustes";
	sessionStorage.setItem("setsettings_language", setsettings_languageES);
	
	var setworldtext_languageES = "Mundo ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageES);
	
	var setkp_setting_king_nameES = "Nombre del rey";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameES);
	
	var setkp_process_textES = "Proceso";
	sessionStorage.setItem("setkp_process_text", setkp_process_textES);
	
	var setkp_messages_textES = "Mensajes";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textES);
	
	var setkp_buydiamonds_textES = "Diamantes";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textES);
	
	var setsetting_a1_bottom_textES = "Los nombres de los reyes deben contener un máximo de 12 caracteres.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textES);
	
	var setking_name_input_buttonES = "Ahorrar";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonES);
	
	var setquests_textES = "Misiones";
	sessionStorage.setItem("setquests_text", setquests_textES);
	
	var setmarket_textES = "Merkato";
	sessionStorage.setItem("setmarket_text", setmarket_textES);
	
	var setmarket_text2ES = "Metiaj komercaj vagonoj kaj komerco kun aliaj regnoj!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2ES);
	
	var setbuildingcapacity_textES = "Konstrua kapacito:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textES);
	
	var setannouncement_textES = "Anuncio:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textES);
	
	var setannouncement_text2ES = "Anuncio";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2ES);
	
	var setnews_textES = "Noticias";
	sessionStorage.setItem("setnews_text", setnews_textES);
	
	var setmenus_military_textES = "Militares";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textES);
	
	var setmenus_logs_textES = "Registros";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textES);
	
	var setmenus_map_textES = "Mapa";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textES);
	
	var setmenus_allies_textES = "Aliados";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textES);
	
	var setmenus_leaderboard_textES = "Entre os melhores";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textES);
	
	var setmenus_leaderboard_textES = "Clasificación";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textES);
	
	var setbonus_text1ES = "Elektu unu el la trezoraj kestoj";
	sessionStorage.setItem("setbonus_text1", setbonus_text1ES);
	
	var setbonus_text2ES = "Via rekompenco";
	sessionStorage.setItem("setbonus_text2", setbonus_text2ES);
	
	var setnotifications_textES = "Notificaciones";
    sessionStorage.setItem("setnotifications_text", setnotifications_textES);

    var settrade_textES = "Comercio";
    sessionStorage.setItem("settrade_text", settrade_textES);

    var setkings_textES = "Reyes";
    sessionStorage.setItem("setkings_text", setkings_textES);
    
    var setembassies_textES = "Embajadas";
    sessionStorage.setItem("setembassies_text", setembassies_textES);
    
    var setlbottom_textES = "¡No eres miembro de una alianza!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textES);

    var setarmies_textES = "Armeoj";
    sessionStorage.setItem("setarmies_text", setarmies_textES);

    var setsupportunits_textES = "Subtenaj Unuoj";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textES);

    var settradewagon_textES = "Komerca Ĉaro ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textES);

    var setproduce_textES = "Produkti";
    sessionStorage.setItem("setproduce_text", setproduce_textES);

    var setupgrade_textES = "Altgradigon";
    sessionStorage.setItem("setupgrade_text", setupgrade_textES);

    var setinfo_textES = "Informoj";
    sessionStorage.setItem("setinfo_text", setinfo_textES);

    var setage_textES = "Aĝo";
    sessionStorage.setItem("setage_text", setage_textES);

    var setfarmer_textES = "Granjero";
    sessionStorage.setItem("setfarmer_text", setfarmer_textES);

    var setwoodcutter_textES = "Lenhador";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textES);

    var setgoldminer_textES = "Minero de oro";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textES);

    var settype_textES = "Tipo";
    sessionStorage.setItem("settype_text", settype_textES);

    var setclass_textES = "Clase";
    sessionStorage.setItem("setclass_text", setclass_textES);

    var setvillage_textES = "Pueblo";
    sessionStorage.setItem("setvillage_text", setvillage_textES);

    var setvillage_text2ES = "¡Produce recursos y mejora la economía del reino gracias a los campesinos!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2ES);

    var setpeasant_textES = "Campesino";
    sessionStorage.setItem("setpeasant_text", setpeasant_textES);

    var setbronze_textES = "Bronce";
    sessionStorage.setItem("setbronze_text", setbronze_textES);

    var setiron_textES = "Hierro";
    sessionStorage.setItem("setiron_text", setiron_textES);

    var setancient_textES = "Antiguo";
    sessionStorage.setItem("setancient_text", setancient_textES);

    var setclassical_textES = "Clásico";
    sessionStorage.setItem("setclassical_text", setclassical_textES);

    var sethellenistic_textES = "Helenístico";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textES);

    var setbronzeage_textES = "Edad de Bronce";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textES);

    var setironage_textES = "Edad de Hierro";
    sessionStorage.setItem("setironage_text", setironage_textES);

    var setancientage_textES = "Edad antigua";
    sessionStorage.setItem("setancientage_text", setancientage_textES);

    var setclassicalage_textES = "Edad clásica";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textES);

    var sethellenisticage_textES = "Edad helenística";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textES);

    var setnextage_textES = "Próxima edad";
    sessionStorage.setItem("setnextage_text", setnextage_textES);

    var setage_pointsES = "Puntos de edad";
    sessionStorage.setItem("setage_points", setage_pointsES);

    var setkip_text1ES = "Información del Reino";
    sessionStorage.setItem("setkip_text1", setkip_text1ES);

    var setkip_text2ES = "Se requieren 1000 puntos de edad para pasar a la siguiente edad.";
    sessionStorage.setItem("setkip_text2", setkip_text2ES);

    var setkip_text3ES = "Se requieren 3000 puntos de edad para pasar a la siguiente edad.";
    sessionStorage.setItem("setkip_text3", setkip_text3ES);

    var setkip_text4ES = "Se requieren 7000 puntos de edad para pasar a la siguiente edad.";
    sessionStorage.setItem("setkip_text4", setkip_text4ES);

    var setkip_text5ES = "Se requieren 15000 puntos de edad para pasar a la siguiente edad.";
    sessionStorage.setItem("setkip_text5", setkip_text5ES);

    var seteconomy_textES = "Economía";
    sessionStorage.setItem("seteconomy_text", seteconomy_textES);

    var sethour_textES = "Hora";
    sessionStorage.setItem("sethour_text", sethour_textES);

    var setfood_textES = "Comida";
    sessionStorage.setItem("setfood_text", setfood_textES);

    var setwood_textES = "Madera";
    sessionStorage.setItem("setwood_text", setwood_textES);

    var setgold_textES = "Oro";
    sessionStorage.setItem("setgold_text", setgold_textES);

    var setdiamond_textES = "Diamante";
    sessionStorage.setItem("setdiamond_text", setdiamond_textES);

    var setpopulation_textES = "Población";
    sessionStorage.setItem("setpopulation_text", setpopulation_textES);

    var setkingdomcenter_textES = "Kingdom Centre";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textES);

    var setcolonies_textES = "Colonias";
    sessionStorage.setItem("setcolonies_text", setcolonies_textES);

    var setcities_textES = "Ciudades";
    sessionStorage.setItem("setcities_text", setcities_textES);

    var setspy_textES = "Espiar";
    sessionStorage.setItem("setspy_text", setspy_textES);

    var setstoragelimit_textES = "Limite de Armazenamento";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textES);

    var setarcher_textES = "Arquero";
    sessionStorage.setItem("setarcher_text", setarcher_textES);

    var setplaces_textES = "Lugares";
    sessionStorage.setItem("setplaces_text", setplaces_textES);

    var setsearch_textES = "Buscar";
    sessionStorage.setItem("setsearch_text", setsearch_textES);

    var setsearch_input_textES = "Búsqueda de jugadores, colonias y ciudades";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textES);
	
	window.location.reload();
	
	Android.showToast('Idioma cambiado correctamente');
};

function settings_languageZH(){
	var setflagZH = "url('images/china_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagZH);
	
	var setflag_languageZH = "中文";
	sessionStorage.setItem("setflag_language", setflag_languageZH);
	
	var setflag_head_languageZH = "语";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageZH);
	
	var setsettings_languageZH = "设定";
	sessionStorage.setItem("setsettings_language", setsettings_languageZH);
	
	var setworldtext_languageZH = "世界 ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageZH);
	
	var setkp_setting_king_nameZH = "国王名字";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameZH);
	
	var setkp_process_textZH = "过程";
	sessionStorage.setItem("setkp_process_text", setkp_process_textZH);
	
	var setkp_messages_textZH = "留言内容";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textZH);
	
	var setkp_buydiamonds_textZH = "购买钻石";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textZH);
	
	var setsetting_a1_bottom_textZH = "国王姓名最多可以包含12个字符。";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textZH);
	
	var setking_name_input_buttonZH = "保存";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonZH);
	
	var setquests_textZH = "任务";
	sessionStorage.setItem("setquests_text", setquests_textZH);
	
	var setmarket_textZH = "市场";
	sessionStorage.setItem("setmarket_text", setmarket_textZH);
	
	var setmarket_text2ZH = "制作手推车和与其他王国进行贸易！";
	sessionStorage.setItem("setmarket_text2", setmarket_text2ZH);
	
	var setbuildingcapacity_textZH = "建筑能力：";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textZH);
	
	var setannouncement_textZH = "公告:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textZH);
	
	var setannouncement_text2ZH = "公告";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2ZH);
	
	var setnews_textZH = "消息";
	sessionStorage.setItem("setnews_text", setnews_textZH);
	
	var setmenus_military_textZH = "军队";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textZH);
	
	var setmenus_logs_textZH = "日志";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textZH);
	
	var setmenus_map_textZH = "地图";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textZH);
	
	var setmenus_allies_textZH = "盟国";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textZH);
	
	var setmenus_leaderboard_textZH = "排行";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textZH);
	
	var setbonus_text1ZH = "选择一个宝箱";
	sessionStorage.setItem("setbonus_text1", setbonus_text1ZH);
	
	var setbonus_text2ZH = "您的奖赏";
	sessionStorage.setItem("setbonus_text2", setbonus_text2ZH);

    var setnotifications_textZH = "通知事项";
    sessionStorage.setItem("setnotifications_text", setnotifications_textZH);

    var settrade_textZH = "贸易";
    sessionStorage.setItem("settrade_text", settrade_textZH);

    var setkings_textZH = "国王";
    sessionStorage.setItem("setkings_text", setkings_textZH);
    
    var setembassies_textZH = "使馆";
    sessionStorage.setItem("setembassies_text", setembassies_textZH);
    
    var setlbottom_textZH = "您不是联盟成员！";
    sessionStorage.setItem("setlbottom_text", setlbottom_textZH);

    var setarmies_textZH = "陆军";
    sessionStorage.setItem("setarmies_text", setarmies_textZH);

    var setsupportunits_textZH = "支持单位";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textZH);

    var settradewagon_textZH = "货车 ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textZH);

    var setproduce_textZH = "生产";
    sessionStorage.setItem("setproduce_text", setproduce_textZH);

    var setupgrade_textZH = "升级";
    sessionStorage.setItem("setupgrade_text", setupgrade_textZH);

    var setinfo_textZH = "信息";
    sessionStorage.setItem("setinfo_text", setinfo_textZH);

    var setage_textZH = "年龄";
    sessionStorage.setItem("setage_text", setage_textZH);

    var setfarmer_textZH = "农民";
    sessionStorage.setItem("setfarmer_text", setfarmer_textZH);

    var setwoodcutter_textZH = "樵夫";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textZH);

    var setgoldminer_textZH = "黄金矿工";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textZH);

    var settype_textZH = "类型";
    sessionStorage.setItem("settype_text", settype_textZH);

    var setclass_textZH = "班级";
    sessionStorage.setItem("setclass_text", setclass_textZH);

    var setvillage_textZH = "村庄";
    sessionStorage.setItem("setvillage_text", setvillage_textZH);

    var setvillage_text2ZH = "多亏农民，才能生产资源并改善王国的经济！";
    sessionStorage.setItem("setvillage_text2", setvillage_text2ZH);

    var setpeasant_textZH = "农民";
    sessionStorage.setItem("setpeasant_text", setpeasant_textZH);

    var setbronze_textZH = "青铜";
    sessionStorage.setItem("setbronze_text", setbronze_textZH);

    var setiron_textZH = "铁";
    sessionStorage.setItem("setiron_text", setiron_textZH);

    var setancient_textZH = "古老的";
    sessionStorage.setItem("setancient_text", setancient_textZH);

    var setclassical_textZH = "古典";
    sessionStorage.setItem("setclassical_text", setclassical_textZH);

    var sethellenistic_textZH = "希腊化";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textZH);

    var setbronzeage_textZH = "青铜时代";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textZH);

    var setironage_textZH = "铁器时代";
    sessionStorage.setItem("setironage_text", setironage_textZH);

    var setancientage_textZH = "远古时代";
    sessionStorage.setItem("setancientage_text", setancientage_textZH);

    var setclassicalage_textZH = "古典时代";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textZH);

    var sethellenisticage_textZH = "希腊时代";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textZH);

    var setnextage_textZH = "下一个时代";
    sessionStorage.setItem("setnextage_text", setnextage_textZH);

    var setage_pointsZH = "年龄点";
    sessionStorage.setItem("setage_points", setage_pointsZH);

    var setkip_text1ZH = "王国信息";
    sessionStorage.setItem("setkip_text1", setkip_text1ZH);

    var setkip_text2ZH = "需要1000个年龄点才能移至下一个年龄。";
    sessionStorage.setItem("setkip_text2", setkip_text2ZH);

    var setkip_text3ZH = "需要3000个年龄点才能移至下一个年龄。";
    sessionStorage.setItem("setkip_text3", setkip_text3ZH);

    var setkip_text4ZH = "需要7000个年龄点才能移至下一个年龄。";
    sessionStorage.setItem("setkip_text4", setkip_text4ZH);

    var setkip_text5ZH = "需要15000个年龄点才能移至下一个年龄。";
    sessionStorage.setItem("setkip_text5", setkip_text5ZH);

    var seteconomy_textZH = "经济";
    sessionStorage.setItem("seteconomy_text", seteconomy_textZH);

    var sethour_textZH = "小时";
    sessionStorage.setItem("sethour_text", sethour_textZH);

    var setfood_textZH = "食物";
    sessionStorage.setItem("setfood_text", setfood_textZH);

    var setwood_textZH = "木头";
    sessionStorage.setItem("setwood_text", setwood_textZH);

    var setgold_textZH = "金子";
    sessionStorage.setItem("setgold_text", setgold_textZH);

    var setdiamond_textZH = "钻石";
    sessionStorage.setItem("setdiamond_text", setdiamond_textZH);

    var setpopulation_textZH = "人口";
    sessionStorage.setItem("setpopulation_text", setpopulation_textZH);

    var setkingdomcenter_textZH = "王国中心";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textZH);

    var setcolonies_textZH = "群落";
    sessionStorage.setItem("setcolonies_text", setcolonies_textZH);

    var setcities_textZH = "城市";
    sessionStorage.setItem("setcities_text", setcities_textZH);

    var setspy_textZH = "间谍";
    sessionStorage.setItem("setspy_text", setspy_textZH);

    var setstoragelimit_textZH = "储存限制";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textZH);

    var setarcher_textZH = "射手";
    sessionStorage.setItem("setarcher_text", setarcher_textZH);

    var setplaces_textZH = "地方";
    sessionStorage.setItem("setplaces_text", setplaces_textZH);

    var setsearch_textZH = "搜索";
    sessionStorage.setItem("setsearch_text", setsearch_textZH);

    var setsearch_input_textZH = "搜索玩家，殖民地和城市";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textZH);
	
	window.location.reload();
	
	Android.showToast('语言已成功更改');
};

function settings_languageJA(){
	var setflagJA = "url('images/japan_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagJA);
	
	var setflag_languageJA = "日本人";
	sessionStorage.setItem("setflag_language", setflag_languageJA);
	
	var setflag_head_languageJA = "言語";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageJA);
	
	var setsettings_languageJA = "設定";
	sessionStorage.setItem("setsettings_language", setsettings_languageJA);
	
	var setworldtext_languageJA = "世界 ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageJA);
	
	var setkp_setting_king_nameJA = "キングネーム";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameJA);
	
	var setkp_process_textJA = "処理する";
	sessionStorage.setItem("setkp_process_text", setkp_process_textJA);
	
	var setkp_messages_textJA = "メッセージ";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textJA);
	
	var setkp_buydiamonds_textJA = "ダイヤモンド";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textJA);
	
	var setsetting_a1_bottom_textJA = "キング名には最大12文字を含める必要があります。";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textJA);
	
	var setking_name_input_buttonJA = "保存する";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonJA);
	
	var setquests_textJA = "クエスト";
	sessionStorage.setItem("setquests_text", setquests_textJA);
	
	var setmarket_textJA = "市場";
	sessionStorage.setItem("setmarket_text", setmarket_textJA);
	
	var setmarket_text2JA = "トレードワゴンを作り、他の王国とトレードしましょう！";
	sessionStorage.setItem("setmarket_text2", setmarket_text2JA);
	
	var setbuildingcapacity_textJA = "建物の容量：";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textJA);
	
	var setannouncement_textJA = "発表:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textJA);
	
	var setannouncement_text2JA = "発表";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2JA);
	
	var setnews_textJA = "ニュース";
	sessionStorage.setItem("setnews_text", setnews_textJA);
	
	var setmenus_military_textJA = "ミリタリー";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textJA);
	
	var setmenus_logs_textJA = "ログ";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textJA);
	
	var setmenus_map_textJA = "地図";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textJA);
	
	var setmenus_allies_textJA = "味方";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textJA);
	
	var setmenus_leaderboard_textJA = "ランキング";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textJA);
	
	var setbonus_text1JA = "宝箱の1つを選択してください";
	sessionStorage.setItem("setbonus_text1", setbonus_text1JA);
	
	var setbonus_text2JA = "あなたの報酬";
	sessionStorage.setItem("setbonus_text2", setbonus_text2JA);

    var setnotifications_textJA = "通知";
    sessionStorage.setItem("setnotifications_text", setnotifications_textJA);

    var settrade_textJA = "トレード";
    sessionStorage.setItem("settrade_text", settrade_textJA);

    var setkings_textJA = "キングス";
    sessionStorage.setItem("setkings_text", setkings_textJA);
    
    var setembassies_textJA = "大使館";
    sessionStorage.setItem("setembassies_text", setembassies_textJA);
    
    var setlbottom_textJA = "あなたは同盟のメンバーではありません！";
    sessionStorage.setItem("setlbottom_text", setlbottom_textJA);

    var setarmies_textJA = "軍隊";
    sessionStorage.setItem("setarmies_text", setarmies_textJA);

    var setsupportunits_textJA = "サポートユニット";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textJA);

    var settradewagon_textJA = "トレードワゴン ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textJA);

    var setproduce_textJA = "作物";
    sessionStorage.setItem("setproduce_text", setproduce_textJA);

    var setupgrade_textJA = "上り坂";
    sessionStorage.setItem("setupgrade_text", setupgrade_textJA);

    var setinfo_textJA = "情報";
    sessionStorage.setItem("setinfo_text", setinfo_textJA);

    var setage_textJA = "年齢";
    sessionStorage.setItem("setage_text", setage_textJA);

    var setfarmer_textJA = "農家";
    sessionStorage.setItem("setfarmer_text", setfarmer_textJA);

    var setwoodcutter_textJA = "木こり";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textJA);

    var setgoldminer_textJA = "金鉱夫";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textJA);

    var settype_textJA = "タイプ";
    sessionStorage.setItem("settype_text", settype_textJA);

    var setclass_textJA = "クラス";
    sessionStorage.setItem("setclass_text", setclass_textJA);

    var setvillage_textJA = "村";
    sessionStorage.setItem("setvillage_text", setvillage_textJA);

    var setvillage_text2JA = "農民のおかげで資源を生産し、王国の経済を改善してください！";
    sessionStorage.setItem("setvillage_text2", setvillage_text2JA);

    var setpeasant_textJA = "農民";
    sessionStorage.setItem("setpeasant_text", setpeasant_textJA);

    var setbronze_textJA = "ブロンズ";
    sessionStorage.setItem("setbronze_text", setbronze_textJA);

    var setiron_textJA = "鉄";
    sessionStorage.setItem("setiron_text", setiron_textJA);

    var setancient_textJA = "古代";
    sessionStorage.setItem("setancient_text", setancient_textJA);

    var setclassical_textJA = "クラシック";
    sessionStorage.setItem("setclassical_text", setclassical_textJA);

    var sethellenistic_textJA = "ヘレニズム";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textJA);

    var setbronzeage_textJA = "青銅器時代";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textJA);

    var setironage_textJA = "鉄器時代";
    sessionStorage.setItem("setironage_text", setironage_textJA);

    var setancientage_textJA = "エンシェントエイジ";
    sessionStorage.setItem("setancientage_text", setancientage_textJA);

    var setclassicalage_textJA = "古典時代";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textJA);

    var sethellenisticage_textJA = "ヘレニズム時代";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textJA);

    var setnextage_textJA = "ネクストエイジ";
    sessionStorage.setItem("setnextage_text", setnextage_textJA);

    var setage_pointsJA = "年齢ポイント";
    sessionStorage.setItem("setage_points", setage_pointsJA);

    var setkip_text1JA = "王国情報";
    sessionStorage.setItem("setkip_text1", setkip_text1JA);

    var setkip_text2JA = "次の年齢に移行するには、1000年齢ポイントが必要です。";
    sessionStorage.setItem("setkip_text2", setkip_text2JA);

    var setkip_text3JA = "次の年齢に移行するには、3000年齢ポイントが必要です。";
    sessionStorage.setItem("setkip_text3", setkip_text3JA);

    var setkip_text4JA = "次の年齢に移行するには、7000年齢ポイントが必要です。";
    sessionStorage.setItem("setkip_text4", setkip_text4JA);

    var setkip_text5JA = "次の年齢に移行するには、15000年齢ポイントが必要です。";
    sessionStorage.setItem("setkip_text5", setkip_text5JA);

    var seteconomy_textJA = "経済";
    sessionStorage.setItem("seteconomy_text", seteconomy_textJA);

    var sethour_textJA = "時間";
    sessionStorage.setItem("sethour_text", sethour_textJA);

    var setfood_textJA = "食物";
    sessionStorage.setItem("setfood_text", setfood_textJA);

    var setwood_textJA = "木材";
    sessionStorage.setItem("setwood_text", setwood_textJA);

    var setgold_textJA = "ゴールド";
    sessionStorage.setItem("setgold_text", setgold_textJA);

    var setdiamond_textJA = "ダイヤモンド";
    sessionStorage.setItem("setdiamond_text", setdiamond_textJA);

    var setpopulation_textJA = "人口";
    sessionStorage.setItem("setpopulation_text", setpopulation_textJA);

    var setkingdomcenter_textJA = "キングダムセンター";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textJA);

    var setcolonies_textJA = "コロニー";
    sessionStorage.setItem("setcolonies_text", setcolonies_textJA);

    var setcities_textJA = "都市";
    sessionStorage.setItem("setcities_text", setcities_textJA);

    var setspy_textJA = "スパイ";
    sessionStorage.setItem("setspy_text", setspy_textJA);

    var setstoragelimit_textJA = "ストレージ制限";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textJA);

    var setarcher_textJA = "射手";
    sessionStorage.setItem("setarcher_text", setarcher_textJA);

    var setplaces_textJA = "場所";
    sessionStorage.setItem("setplaces_text", setplaces_textJA);

    var setsearch_textJA = "探す";
    sessionStorage.setItem("setsearch_text", setsearch_textJA);

    var setsearch_input_textJA = "プレイヤー、コロニー、都市を検索する";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textJA);
	
	window.location.reload();
	
	Android.showToast('言語が正常に変更されました');
};

function settings_languageKO(){
	var setflagKO = "url('images/south_korea_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagKO);
	
	var setflag_languageKO = "한국어";
	sessionStorage.setItem("setflag_language", setflag_languageKO);
	
	var setflag_head_languageKO = "언어";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageKO);
	
	var setsettings_languageKO = "설정";
	sessionStorage.setItem("setsettings_language", setsettings_languageKO);
	
	var setworldtext_languageKO = "세계 ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageKO);
	
	var setkp_setting_king_nameKO = "왕 이름";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameKO);
	
	var setkp_process_textKO = "방법";
	sessionStorage.setItem("setkp_process_text", setkp_process_textKO);
	
	var setkp_messages_textKO = "메시지";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textKO);
	
	var setkp_buydiamonds_textKO = "다이아몬드 구매";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textKO);
	
	var setsetting_a1_bottom_textKO = "왕 이름은 최대 12 자 여야합니다.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textKO);
	
	var setking_name_input_buttonKO = "저장";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonKO);
	
	var setquests_textKO = "퀘스트";
	sessionStorage.setItem("setquests_text", setquests_textKO);
	
	var setmarket_textKO = "시장";
	sessionStorage.setItem("setmarket_text", setmarket_textKO);
	
	var setmarket_text2KO = "무역 마차를 만들고 다른 왕국과 무역하세요!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2KO);
	
	var setbuildingcapacity_textKO = "건물 용량 :";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textKO);
	
	var setannouncement_textKO = "발표:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textKO);
	
	var setannouncement_text2KO = "발표";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2KO);
	
	var setnews_textKO = "뉴스";
	sessionStorage.setItem("setnews_text", setnews_textKO);
	
	var setmenus_military_textKO = "군";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textKO);
	
	var setmenus_logs_textKO = "로그";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textKO);
	
	var setmenus_map_textKO = "지도";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textKO);
	
	var setmenus_allies_textKO = "동맹국";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textKO);
	
	var setmenus_leaderboard_textKO = "순위";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textKO);
	
	var setbonus_text1KO = "보물 상자 중 하나를 선택하십시오";
	sessionStorage.setItem("setbonus_text1", setbonus_text1KO);
	
	var setbonus_text2KO = "당신의 보상";
	sessionStorage.setItem("setbonus_text2", setbonus_text2KO);

    var setnotifications_textKO = "알림";
    sessionStorage.setItem("setnotifications_text", setnotifications_textKO);

    var settrade_textKO = "무역";
    sessionStorage.setItem("settrade_text", settrade_textKO);

    var setkings_textKO = "킹스";
    sessionStorage.setItem("setkings_text", setkings_textKO);
    
    var setembassies_textKO = "대사관";
    sessionStorage.setItem("setembassies_text", setembassies_textKO);
    
    var setlbottom_textKO = "당신은 동맹의 회원이 아닙니다!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textKO);

    var setarmies_textKO = "군대";
    sessionStorage.setItem("setarmies_text", setarmies_textKO);

    var setsupportunits_textKO = "지원 단위";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textKO);

    var settradewagon_textKO = "무역 왜건 ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textKO);

    var setproduce_textKO = "생기게 하다";
    sessionStorage.setItem("setproduce_text", setproduce_textKO);

    var setupgrade_textKO = "업그레이드";
    sessionStorage.setItem("setupgrade_text", setupgrade_textKO);

    var setinfo_textKO = "정보";
    sessionStorage.setItem("setinfo_text", setinfo_textKO);

    var setage_textKO = "나이";
    sessionStorage.setItem("setage_text", setage_textKO);

    var setfarmer_textKO = "농장주";
    sessionStorage.setItem("setfarmer_text", setfarmer_textKO);

    var setwoodcutter_textKO = "나무꾼";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textKO);

    var setgoldminer_textKO = "금 광부";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textKO);

    var settype_textKO = "유형";
    sessionStorage.setItem("settype_text", settype_textKO);

    var setclass_textKO = "수업";
    sessionStorage.setItem("setclass_text", setclass_textKO);

    var setvillage_textKO = "마을";
    sessionStorage.setItem("setvillage_text", setvillage_textKO);

    var setvillage_text2KO = "농민 덕분에 자원을 생산하고 왕국의 경제를 개선하십시오!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2KO);

    var setpeasant_textKO = "농부";
    sessionStorage.setItem("setpeasant_text", setpeasant_textKO);

    var setbronze_textKO = "청동";
    sessionStorage.setItem("setbronze_text", setbronze_textKO);

    var setiron_textKO = "철";
    sessionStorage.setItem("setiron_text", setiron_textKO);

    var setancient_textKO = "고대";
    sessionStorage.setItem("setancient_text", setancient_textKO);

    var setclassical_textKO = "고전";
    sessionStorage.setItem("setclassical_text", setclassical_textKO);

    var sethellenistic_textKO = "헬레니즘";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textKO);

    var setbronzeage_textKO = "청동기 시대";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textKO);

    var setironage_textKO = "철기 시대";
    sessionStorage.setItem("setironage_text", setironage_textKO);

    var setancientage_textKO = "고대 시대";
    sessionStorage.setItem("setancientage_text", setancientage_textKO);

    var setclassicalage_textKO = "고전 시대";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textKO);

    var sethellenisticage_textKO = "헬레니즘 시대";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textKO);

    var setnextage_textKO = "다음 시대";
    sessionStorage.setItem("setnextage_text", setnextage_textKO);

    var setage_pointsKO = "나이 포인트";
    sessionStorage.setItem("setage_points", setage_pointsKO);

    var setkip_text1KO = "왕국 정보";
    sessionStorage.setItem("setkip_text1", setkip_text1KO);

    var setkip_text2KO = "다음 연령으로 이동하려면 1000 개의 연령 포인트가 필요합니다.";
    sessionStorage.setItem("setkip_text2", setkip_text2KO);

    var setkip_text3KO = "다음 연령으로 이동하려면 3000 개의 연령 포인트가 필요합니다.";
    sessionStorage.setItem("setkip_text3", setkip_text3KO);

    var setkip_text4KO = "다음 연령으로 이동하려면 7000 개의 연령 포인트가 필요합니다.";
    sessionStorage.setItem("setkip_text4", setkip_text4KO);

    var setkip_text5KO = "다음 연령으로 이동하려면 15000 개의 연령 포인트가 필요합니다.";
    sessionStorage.setItem("setkip_text5", setkip_text5KO);

    var seteconomy_textKO = "경제";
    sessionStorage.setItem("seteconomy_text", seteconomy_textKO);

    var sethour_textKO = "시";
    sessionStorage.setItem("sethour_text", sethour_textKO);

    var setfood_textKO = "음식";
    sessionStorage.setItem("setfood_text", setfood_textKO);

    var setwood_textKO = "목재";
    sessionStorage.setItem("setwood_text", setwood_textKO);

    var setgold_textKO = "금";
    sessionStorage.setItem("setgold_text", setgold_textKO);

    var setdiamond_textKO = "다이아몬드";
    sessionStorage.setItem("setdiamond_text", setdiamond_textKO);

    var setpopulation_textKO = "인구";
    sessionStorage.setItem("setpopulation_text", setpopulation_textKO);

    var setkingdomcenter_textKO = "킹덤 센터";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textKO);

    var setcolonies_textKO = "식민지";
    sessionStorage.setItem("setcolonies_text", setcolonies_textKO);

    var setcities_textKO = "도시";
    sessionStorage.setItem("setcities_text", setcities_textKO);

    var setspy_textKO = "스파이";
    sessionStorage.setItem("setspy_text", setspy_textKO);

    var setstoragelimit_textKO = "저장 한도";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textKO);

    var setarcher_textKO = "궁수";
    sessionStorage.setItem("setarcher_text", setarcher_textKO);

    var setplaces_textKO = "장소";
    sessionStorage.setItem("setplaces_text", setplaces_textKO);

    var setsearch_textKO = "검색";
    sessionStorage.setItem("setsearch_text", setsearch_textKO);

    var setsearch_input_textKO = "플레이어, 식민지 및 도시 검색";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textKO);
	
	window.location.reload();
	
	Android.showToast('언어가 성공적으로 변경되었습니다');
};

/* login */
function login() {
    var setflagEN = "url('images/united_states_flag_icon.png')";
	sessionStorage.setItem("setflags", setflagEN);
	
	var setflag_languageEN = "English";
	sessionStorage.setItem("setflag_language", setflag_languageEN);
	
	var setflag_head_languageEN = "Language";
	sessionStorage.setItem("setflag_head_language", setflag_head_languageEN);
	
	var setsettings_languageEN = "Settings";
	sessionStorage.setItem("setsettings_language", setsettings_languageEN);
	
	var setworldtext_languageEN = "World ";
	sessionStorage.setItem("setworldtext_language", setworldtext_languageEN);
	
	var setkp_setting_king_nameEN = "King name";
	sessionStorage.setItem("setkp_setting_king_name", setkp_setting_king_nameEN);
	
	var setkp_process_textEN = "Process";
	sessionStorage.setItem("setkp_process_text", setkp_process_textEN);
	
	var setkp_messages_textEN = "Messages";
	sessionStorage.setItem("setkp_messages_text", setkp_messages_textEN);
	
	var setkp_buydiamonds_textEN = "Buy Diamonds";
	sessionStorage.setItem("setkp_buydiamonds_text", setkp_buydiamonds_textEN);
	
	var setsetting_a1_bottom_textEN = "King names must contain a maximum of 12 characters.";
	sessionStorage.setItem("setsetting_a1_bottom_text", setsetting_a1_bottom_textEN);
	
	var setking_name_input_buttonEN = "Save";
	sessionStorage.setItem("setking_name_input_button", setking_name_input_buttonEN);
	
	var setquests_textEN = "Quests";
	sessionStorage.setItem("setquests_text", setquests_textEN);
	
	var setmarket_textEN = "Market";
	sessionStorage.setItem("setmarket_text", setmarket_textEN);
	
	var setmarket_text2EN = "Craft trade wagons and trade with other kingdoms!";
	sessionStorage.setItem("setmarket_text2", setmarket_text2EN);
	
	var setbuildingcapacity_textEN = "Building capacity:";
	sessionStorage.setItem("setbuildingcapacity_text", setbuildingcapacity_textEN);
	
	var setannouncement_textEN = "Announcement:";
	sessionStorage.setItem("setannouncement_text", setannouncement_textEN);
	
	var setannouncement_text2EN = "Announcement";
	sessionStorage.setItem("setannouncement_text2", setannouncement_text2EN);
	
	var setnews_textEN = "News";
	sessionStorage.setItem("setnews_text", setnews_textEN);
	
	var setmenus_military_textEN = "Military";
	sessionStorage.setItem("setmenus_military_text", setmenus_military_textEN);
	
	var setmenus_logs_textEN = "Logs";
	sessionStorage.setItem("setmenus_logs_text", setmenus_logs_textEN);
	
	var setmenus_map_textEN = "Map";
	sessionStorage.setItem("setmenus_map_text", setmenus_map_textEN);
	
	var setmenus_allies_textEN = "Allies";
	sessionStorage.setItem("setmenus_allies_text", setmenus_allies_textEN);
	
	var setmenus_leaderboard_textEN = "Ranking";
	sessionStorage.setItem("setmenus_leaderboard_text", setmenus_leaderboard_textEN);
	
	var setbonus_text1EN = "Choose one of the treasure chests";
	sessionStorage.setItem("setbonus_text1", setbonus_text1EN);
	
	var setbonus_text2EN = "Your reward";
	sessionStorage.setItem("setbonus_text2", setbonus_text2EN);

    var setnotifications_textEN = "Notifications";
    sessionStorage.setItem("setnotifications_text", setnotifications_textEN);

    var settrade_textEN = "Trade";
    sessionStorage.setItem("settrade_text", settrade_textEN);

    var setkings_textEN = "Kings";
    sessionStorage.setItem("setkings_text", setkings_textEN);
    
    var setembassies_textEN = "Embassies";
    sessionStorage.setItem("setembassies_text", setembassies_textEN);
    
    var setlbottom_textEN = "You are not a member of an alliance!";
    sessionStorage.setItem("setlbottom_text", setlbottom_textEN);

    var setarmies_textEN = "Armies";
    sessionStorage.setItem("setarmies_text", setarmies_textEN);

    var setsupportunits_textEN = "Support Units";
    sessionStorage.setItem("setsupportunits_text", setsupportunits_textEN);

    var settradewagon_textEN = "Trade Wagon ";
    sessionStorage.setItem("settradewagon_text", settradewagon_textEN);

    var setproduce_textEN = "Produce";
    sessionStorage.setItem("setproduce_text", setproduce_textEN);

    var setupgrade_textEN = "Upgrade";
    sessionStorage.setItem("setupgrade_text", setupgrade_textEN);

    var setinfo_textEN = "Info";
    sessionStorage.setItem("setinfo_text", setinfo_textEN);

    var setage_textEN = "Age";
    sessionStorage.setItem("setage_text", setage_textEN);

    var setfarmer_textEN = "Farmer";
    sessionStorage.setItem("setfarmer_text", setfarmer_textEN);

    var setwoodcutter_textEN = "Woodcutter";
    sessionStorage.setItem("setwoodcutter_text", setwoodcutter_textEN);

    var setgoldminer_textEN = "Gold Miner";
    sessionStorage.setItem("setgoldminer_text", setgoldminer_textEN);

    var settype_textEN = "Type";
    sessionStorage.setItem("settype_text", settype_textEN);

    var setclass_textEN = "Class";
    sessionStorage.setItem("setclass_text", setclass_textEN);

    var setvillage_textEN = "Village";
    sessionStorage.setItem("setvillage_text", setvillage_textEN);

    var setvillage_text2EN = "Produce resources and improve the economy of the kingdom thanks to the peasants!";
    sessionStorage.setItem("setvillage_text2", setvillage_text2EN);

    var setpeasant_textEN = "Peasant";
    sessionStorage.setItem("setpeasant_text", setpeasant_textEN);

    var setbronze_textEN = "Bronze";
    sessionStorage.setItem("setbronze_text", setbronze_textEN);

    var setiron_textEN = "Iron";
    sessionStorage.setItem("setiron_text", setiron_textEN);

    var setancient_textEN = "Ancient";
    sessionStorage.setItem("setancient_text", setancient_textEN);

    var setclassical_textEN = "Classical";
    sessionStorage.setItem("setclassical_text", setclassical_textEN);

    var sethellenistic_textEN = "Hellenistic";
    sessionStorage.setItem("sethellenistic_text", sethellenistic_textEN);

    var setbronzeage_textEN = "Bronze Age";
    sessionStorage.setItem("setbronzeage_text", setbronzeage_textEN);

    var setironage_textEN = "Iron Age";
    sessionStorage.setItem("setironage_text", setironage_textEN);

    var setancientage_textEN = "Ancient Age";
    sessionStorage.setItem("setancientage_text", setancientage_textEN);

    var setclassicalage_textEN = "Classical Age";
    sessionStorage.setItem("setclassicalage_text", setclassicalage_textEN);

    var sethellenisticage_textEN = "Hellenistic Age";
    sessionStorage.setItem("sethellenisticage_text", sethellenisticage_textEN);

    var setnextage_textEN = "Next Age";
    sessionStorage.setItem("setnextage_text", setnextage_textEN);

    var setage_pointsEN = "Age Points";
    sessionStorage.setItem("setage_points", setage_pointsEN);

    var setkip_text1EN = "Kingdom Info";
    sessionStorage.setItem("setkip_text1", setkip_text1EN);

    var setkip_text2EN = "1000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text2", setkip_text2EN);

    var setkip_text3EN = "3000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text3", setkip_text3EN);

    var setkip_text4EN = "7000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text4", setkip_text4EN);

    var setkip_text5EN = "15000 age points are required to move to the next age.";
    sessionStorage.setItem("setkip_text5", setkip_text5EN);

    var seteconomy_textEN = "Economy";
    sessionStorage.setItem("seteconomy_text", seteconomy_textEN);

    var sethour_textEN = "Hour";
    sessionStorage.setItem("sethour_text", sethour_textEN);

    var setfood_textEN = "Food";
    sessionStorage.setItem("setfood_text", setfood_textEN);

    var setwood_textEN = "Wood";
    sessionStorage.setItem("setwood_text", setwood_textEN);

    var setgold_textEN = "Gold";
    sessionStorage.setItem("setgold_text", setgold_textEN);

    var setdiamond_textEN = "Diamond";
    sessionStorage.setItem("setdiamond_text", setdiamond_textEN);

    var setpopulation_textEN = "Population";
    sessionStorage.setItem("setpopulation_text", setpopulation_textEN);

    var setkingdomcenter_textEN = "Kingdom Center";
    sessionStorage.setItem("setkingdomcenter_text", setkingdomcenter_textEN);

    var setcolonies_textEN = "Colonies";
    sessionStorage.setItem("setcolonies_text", setcolonies_textEN);

    var setcities_textEN = "Cities";
    sessionStorage.setItem("setcities_text", setcities_textEN);

    var setspy_textEN = "Spy";
    sessionStorage.setItem("setspy_text", setspy_textEN);

    var setstoragelimit_textEN = "Storage Limit";
    sessionStorage.setItem("setstoragelimit_text", setstoragelimit_textEN);

    var setarcher_textEN = "Archer";
    sessionStorage.setItem("setarcher_text", setarcher_textEN);

    var setplaces_textEN = "Places";
    sessionStorage.setItem("setplaces_text", setplaces_textEN);

    var setsearch_textEN = "Search";
    sessionStorage.setItem("setsearch_text", setsearch_textEN);

    var setsearch_input_textEN = "Search for Players, Colonies and Cities";
    sessionStorage.setItem("setsearch_input_text", setsearch_input_textEN);

    sessionStorage.setItem("setlogindisplay1", "none");
    sessionStorage.setItem("setlogindisplay2", "block");

    var randomX = Math.floor(Math.random() * 100) + 1;
    var randomY = Math.floor(Math.random() * 64) + 1;

    sessionStorage.setItem("setrandom_mapX", randomX);
    sessionStorage.setItem("setrandom_mapY", randomY);
	
	window.location.href = "kingdom_page.html";
};

function login2() {
	window.location.href = "kingdom_page.html";
};

/* Save_DATA */

function get_save() {
	sessionStorage.getItem("king_name");
	sessionStorage.getItem("kip_display_none_kingname");
	sessionStorage.getItem("setflags");
	sessionStorage.getItem("setflag_language");
	sessionStorage.getItem("setflag_head_language");
	sessionStorage.getItem("setsettings_language");
	sessionStorage.getItem("setworldtext_language");
	sessionStorage.getItem("setkp_setting_king_name");
	sessionStorage.getItem("setkp_process_text");
	sessionStorage.getItem("setkp_messages_text");
	sessionStorage.getItem("setkp_buydiamonds_text");
	sessionStorage.getItem("setsetting_a1_bottom_text");
	sessionStorage.getItem("setking_name_input_button");
	sessionStorage.getItem("setquests_text");
	sessionStorage.getItem("setmarket_text");
	sessionStorage.getItem("setannouncement_text");
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("set_king_name_text").innerHTML = king_name;
	document.getElementById("settings_king_name_1").style.display = kip_display_none_kingname;
	document.getElementById("settings_king_name_2").style.display = kip_display_none_kingname;
	document.getElementById("set_king_name").style.display = kip_display_block_kingname;
	document.getElementById("kp_flags_icons").style.backgroundImage = setflags;
	document.getElementById("flag_language_text").innerHTML = setflag_language;
	document.getElementById("flag_head_language").innerHTML = setflag_head_language;
	document.getElementById("flag_head_language2").innerHTML = setflag_head_language;
	document.getElementById("kp_settings_top_text").innerHTML = setsettings_language;
	document.getElementById("kp_settings_top_text2").innerHTML = setsettings_language;
	document.getElementById("kp_world_text").innerHTML = setworldtext_language;
	document.getElementById("kp_setting_king_name").innerHTML = setkp_setting_king_name;
	document.getElementById("kp_process_text").innerHTML = setkp_process_text;
	document.getElementById("kp_messages_text").innerHTML = setkp_messages_text;
	document.getElementById("kp_buydiamonds_text").innerHTML = setkp_buydiamonds_text;
	document.getElementById("setting_a1_bottom_text").innerHTML = setsetting_a1_bottom_text;
	document.getElementById("king_name_input_button").innerHTML = setking_name_input_button;
	document.getElementById("quests_text").innerHTML = setquests_text;
	document.getElementById("market_text").innerHTML = setmarket_text;
	document.getElementById("announcement_text").innerHTML = setannouncement_text;
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function academy_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("setancient_text");
	sessionStorage.getItem("setclassical_text");
	sessionStorage.getItem("settoageancient1");
	sessionStorage.getItem("settoageancient2");
	sessionStorage.getItem("settoageclassical1");
	sessionStorage.getItem("settoageclassical2");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("age_text2").innerHTML = setage_text;
	document.getElementById("age_text3").innerHTML = setage_text;
	document.getElementById("age_text4").innerHTML = setage_text;
	document.getElementById("age_text5").innerHTML = setage_text;
	document.getElementById("age_text6").innerHTML = setage_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("boost_text3").innerHTML = setupgrade_text;
	document.getElementById("boost_text4").innerHTML = setupgrade_text;
	document.getElementById("boost_text5").innerHTML = setupgrade_text;
	document.getElementById("boost_text6").innerHTML = setupgrade_text;
	document.getElementById("boost_text7").innerHTML = setupgrade_text;
	document.getElementById("boost_text8").innerHTML = setupgrade_text;
	document.getElementById("boost_text9").innerHTML = setupgrade_text;
	document.getElementById("ancient_text").innerHTML = setancient_text;
	document.getElementById("ancient_text2").innerHTML = setancient_text;
	document.getElementById("ancient_text3").innerHTML = setancient_text;
	document.getElementById("classical_text").innerHTML = setclassical_text;
	document.getElementById("classical_text2").innerHTML = setclassical_text;
	document.getElementById("classical_text3").innerHTML = setclassical_text;
	document.getElementById("academy_ancient_geometry1").style.display = settoageancient1;
	document.getElementById("academy_ancient_geometry2").style.display = settoageancient2;
	document.getElementById("academy_ancient_smithery1").style.display = settoageancient1;
	document.getElementById("academy_ancient_smithery2").style.display = settoageancient2;
	document.getElementById("academy_ancient_riding1").style.display = settoageancient1;
	document.getElementById("academy_ancient_riding2").style.display = settoageancient2;
	document.getElementById("academy_classical_spying1").style.display = settoageclassical1;
	document.getElementById("academy_classical_spying2").style.display = settoageclassical2;
	document.getElementById("academy_classical_cartography1").style.display = settoageclassical1;
	document.getElementById("academy_classical_cartography2").style.display = settoageclassical2;
	document.getElementById("academy_classical_masonry1").style.display = settoageclassical1;
	document.getElementById("academy_classical_masonry2").style.display = settoageclassical2;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function allies_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army1_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army2_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army3_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setspy_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("spy_text1").innerHTML = setspy_text;
	document.getElementById("spy_text2").innerHTML = setspy_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army4_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setiron_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("iron_text").innerHTML = setiron_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army5_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setiron_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("iron_text").innerHTML = setiron_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_army6_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setancient_text");
	sessionStorage.getItem("setarcher_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("ancient_text").innerHTML = setancient_text;
	document.getElementById("archer_text").innerHTML = setarcher_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function barracks_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setiron_text");
	sessionStorage.getItem("setancient_text");
	sessionStorage.getItem("settoageiron1");
	sessionStorage.getItem("settoageiron2");
	sessionStorage.getItem("settoageancient1");
	sessionStorage.getItem("settoageancient2");
	sessionStorage.getItem("setspy_text");
	sessionStorage.getItem("setarcher_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("produce_text2").innerHTML = setproduce_text;
	document.getElementById("produce_text3").innerHTML = setproduce_text;
	document.getElementById("produce_text4").innerHTML = setproduce_text;
	document.getElementById("produce_text5").innerHTML = setproduce_text;
	document.getElementById("produce_text6").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("boost_text3").innerHTML = setupgrade_text;
	document.getElementById("boost_text4").innerHTML = setupgrade_text;
	document.getElementById("boost_text5").innerHTML = setupgrade_text;
	document.getElementById("boost_text6").innerHTML = setupgrade_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("age_text2").innerHTML = setage_text;
	document.getElementById("age_text3").innerHTML = setage_text;
	document.getElementById("iron_text").innerHTML = setiron_text;
	document.getElementById("iron_text2").innerHTML = setiron_text;
	document.getElementById("ancient_text").innerHTML = setancient_text;
	document.getElementById("barracks_iron_equites1").style.display = settoageiron1;
	document.getElementById("barracks_iron_equites2").style.display = settoageiron2;
	document.getElementById("barracks_iron_gladiators1").style.display = settoageiron1;
	document.getElementById("barracks_iron_gladiators2").style.display = settoageiron2;
	document.getElementById("barracks_ancient_archer1").style.display = settoageancient1;
	document.getElementById("barracks_ancient_archer2").style.display = settoageancient2;
	document.getElementById("spy_text").innerHTML = setspy_text;
	document.getElementById("archer_text1").innerHTML = setarcher_text;
	document.getElementById("archer_text2").innerHTML = setarcher_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function bonus_page_save() {
	sessionStorage.getItem("setbonus_text1");
	sessionStorage.getItem("setbonus_text2");
	
	document.getElementById("bonus_text1").innerHTML = setbonus_text1;
	document.getElementById("bonus_text2").innerHTML = setbonus_text2;
};

function buy_diamond_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkp_buydiamonds_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kp_buydiamonds_text").innerHTML = setkp_buydiamonds_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function castle_army1_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function castle_army2_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("sethellenistic_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("hellenistic_text").innerHTML = sethellenistic_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function castle_info_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function castle_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("sethellenistic_text");
	sessionStorage.getItem("settoagehellenistic1");
	sessionStorage.getItem("settoagehellenistic2");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("produce_text2").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("boost_text3").innerHTML = setupgrade_text;
	document.getElementById("hellenistic_text").innerHTML = sethellenistic_text;
	document.getElementById("castle_hellenistic_triarii1").style.display = settoagehellenistic1;
	document.getElementById("castle_hellenistic_triarii2").style.display = settoagehellenistic2;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function index_save() {
	sessionStorage.getItem("setlogindisplay1");
	sessionStorage.getItem("setlogindisplay2");
	
	document.getElementById("lp_first").style.display = setlogindisplay1;
	document.getElementById("lp_end").style.display = setlogindisplay2;
};

function kingdominfo_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setfarmer_text");
	sessionStorage.getItem("setwoodcutter_text");
	sessionStorage.getItem("setgoldminer_text");
	sessionStorage.getItem("setpeasant_text");
	sessionStorage.getItem("setbronzeage_text");
	sessionStorage.getItem("setironage_text");
	sessionStorage.getItem("setancientage_text");
	sessionStorage.getItem("setclassicalage_text");
	sessionStorage.getItem("sethellenisticage_text");
	sessionStorage.getItem("setkipdisplay1");
	sessionStorage.getItem("setkipdisplay2");
	sessionStorage.getItem("setkipdisplay3");
	sessionStorage.getItem("setkipdisplay4");
	sessionStorage.getItem("setkipdisplay5");
	sessionStorage.getItem("setkipnabdisplay1");
	sessionStorage.getItem("setkipnabdisplay2");
	sessionStorage.getItem("setkipnabdisplay3");
	sessionStorage.getItem("setkipnabdisplay4");
	sessionStorage.getItem("setnextage_text");
	sessionStorage.getItem("setage_img");
	sessionStorage.getItem("setage_points");
	sessionStorage.getItem("setkip_text1");
	sessionStorage.getItem("setkip_text2");
	sessionStorage.getItem("setkip_text3");
	sessionStorage.getItem("setkip_text4");
	sessionStorage.getItem("setkip_text5");
	sessionStorage.getItem("setkip_text2_display");
	sessionStorage.getItem("setkip_text3_display");
	sessionStorage.getItem("setkip_text4_display");
	sessionStorage.getItem("setkip_text5_display");
	sessionStorage.getItem("seteconomy_text");
	sessionStorage.getItem("sethour_text");
	sessionStorage.getItem("setfood_text");
	sessionStorage.getItem("setwood_text");
	sessionStorage.getItem("setgold_text");
	sessionStorage.getItem("setdiamond_text");
	sessionStorage.getItem("setsupportunits_text");
	sessionStorage.getItem("setpopulation_text");
	sessionStorage.getItem("setkingdomcenter_text");
	sessionStorage.getItem("setcolonies_text");
	sessionStorage.getItem("setcities_text");
	sessionStorage.getItem("setspy_text");
	sessionStorage.getItem("setarmies_text");
	sessionStorage.getItem("setstoragelimit_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_allies_text2").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("supportunits_text").innerHTML = setsupportunits_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("age_text2").innerHTML = setage_text;
	document.getElementById("age_text3").innerHTML = setage_text;
	document.getElementById("farmer_text").innerHTML = setfarmer_text;
	document.getElementById("woodcutter_text").innerHTML = setwoodcutter_text;
	document.getElementById("goldminer_text").innerHTML = setgoldminer_text;
	document.getElementById("peasant_text").innerHTML = setpeasant_text;
	document.getElementById("bronzeage_text").innerHTML = setbronzeage_text;
	document.getElementById("bronzeage_text").style.display = setkipdisplay1;
	document.getElementById("ironage_text").innerHTML = setironage_text;
	document.getElementById("ironage_text").style.display = setkipdisplay2;
	document.getElementById("ancientage_text").innerHTML = setancientage_text;
	document.getElementById("ancientage_text").style.display = setkipdisplay3;
	document.getElementById("classicalage_text").innerHTML = setclassicalage_text;
	document.getElementById("classicalage_text").style.display = setkipdisplay4;
	document.getElementById("hellenisticage_text").innerHTML = sethellenisticage_text;
	document.getElementById("hellenisticage_text").style.display = setkipdisplay5;
	document.getElementById("next_age_button_i").style.display = setkipnabdisplay1;
	document.getElementById("next_age_button_a").style.display = setkipnabdisplay2;
	document.getElementById("next_age_button_c").style.display = setkipnabdisplay3;
	document.getElementById("next_age_button_h").style.display = setkipnabdisplay4;
	document.getElementById("next_age_button_i").innerHTML = setnextage_text;
	document.getElementById("next_age_button_a").innerHTML = setnextage_text;
	document.getElementById("next_age_button_c").innerHTML = setnextage_text;
	document.getElementById("next_age_button_h").innerHTML = setnextage_text;
	document.getElementById("age_img").style.backgroundImage = setage_img;
	document.getElementById("age_points").innerHTML = setage_points;
	document.getElementById("kip_text1").innerHTML = setkip_text1;
	document.getElementById("kip_text2").innerHTML = setkip_text2;
	document.getElementById("kip_text3").innerHTML = setkip_text3;
	document.getElementById("kip_text4").innerHTML = setkip_text4;
	document.getElementById("kip_text5").innerHTML = setkip_text5;
	document.getElementById("kip_text2").style.display = setkip_text2_display;
	document.getElementById("kip_text3").style.display = setkip_text3_display;
	document.getElementById("kip_text4").style.display = setkip_text4_display;
	document.getElementById("kip_text5").style.display = setkip_text5_display;
	document.getElementById("economy_text").innerHTML = seteconomy_text;
	document.getElementById("hour_text1").innerHTML = sethour_text;
	document.getElementById("hour_text2").innerHTML = sethour_text;
	document.getElementById("hour_text3").innerHTML = sethour_text;
	document.getElementById("hour_text4").innerHTML = sethour_text;
	document.getElementById("hour_text5").innerHTML = sethour_text;
	document.getElementById("hour_text6").innerHTML = sethour_text;
	document.getElementById("food_text1").innerHTML = setfood_text;
	document.getElementById("food_text2").innerHTML = setfood_text;
	document.getElementById("food_text3").innerHTML = setfood_text;
	document.getElementById("food_text4").innerHTML = setfood_text;
	document.getElementById("food_text5").innerHTML = setfood_text;
	document.getElementById("wood_text1").innerHTML = setwood_text;
	document.getElementById("wood_text2").innerHTML = setwood_text;
	document.getElementById("wood_text3").innerHTML = setwood_text;
	document.getElementById("gold_text1").innerHTML = setgold_text;
	document.getElementById("gold_text2").innerHTML = setgold_text;
	document.getElementById("gold_text3").innerHTML = setgold_text;
	document.getElementById("diamond_text1").innerHTML = setdiamond_text;
	document.getElementById("diamond_text2").innerHTML = setdiamond_text;
	document.getElementById("population_text").innerHTML = setpopulation_text;
	document.getElementById("armies_text").innerHTML = setarmies_text;
	document.getElementById("kingdomcenter_text1").innerHTML = setkingdomcenter_text;
	document.getElementById("kingdomcenter_text2").innerHTML = setkingdomcenter_text;
	document.getElementById("kingdomcenter_text3").innerHTML = setkingdomcenter_text;
	document.getElementById("colonies_text1").innerHTML = setcolonies_text;
	document.getElementById("colonies_text2").innerHTML = setcolonies_text;
	document.getElementById("colonies_text3").innerHTML = setcolonies_text;
	document.getElementById("cities_text1").innerHTML = setcities_text;
	document.getElementById("cities_text2").innerHTML = setcities_text;
	document.getElementById("cities_text3").innerHTML = setcities_text;
	document.getElementById("spy_text").innerHTML = setspy_text;
	document.getElementById("storagelimit_text").innerHTML = setstoragelimit_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function leaderboard_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("king_name");
	sessionStorage.getItem("setkings_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("set_king_name_text").innerHTML = king_name;
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kings_text").innerHTML = setkings_text;
	document.getElementById("allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function leaderboard2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkings_text");
	sessionStorage.getItem("setlbottom_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kings_text").innerHTML = setkings_text;
	document.getElementById("allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("lbottom_text").innerHTML = setlbottom_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function log_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("settrade_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("trade_text").innerHTML = settrade_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function log2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("settrade_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("trade_text").innerHTML = settrade_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function map_page_save() {
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	sessionStorage.getItem("king_name");
	
	document.getElementById("map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY).style.backgroundImage = "url('images/castle_icon.png')";
	document.getElementById("map_div_text_x" + setrandom_mapX + "_y" + setrandom_mapY).style.display = "block";
	document.getElementById("map_div_name_text_x" + setrandom_mapX + "_y" + setrandom_mapY).innerHTML = king_name;
};

function map_places_1_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setplaces_text");
	sessionStorage.getItem("setcolonies_text");
	sessionStorage.getItem("setcities_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("colonies_text").innerHTML = setcolonies_text;
	document.getElementById("cities_text").innerHTML = setcities_text;
	document.getElementById("places_text").innerHTML = setplaces_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function map_places_2_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setplaces_text");
	sessionStorage.getItem("setcolonies_text");
	sessionStorage.getItem("setcities_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("colonies_text").innerHTML = setcolonies_text;
	document.getElementById("cities_text").innerHTML = setcities_text;
	document.getElementById("places_text").innerHTML = setplaces_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function map_search_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setsearch_text");
	sessionStorage.getItem("setsearch_input_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("search_text").innerHTML = setsearch_text;
	document.getElementById("search_input_text").placeholder = setsearch_input_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function market_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setmarket_text");
	sessionStorage.getItem("setmarket_text2");
	sessionStorage.getItem("setbuildingcapacity_text");
	sessionStorage.getItem("settradewagon_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("market_text").innerHTML = setmarket_text;
	document.getElementById("market_text2").innerHTML = setmarket_text2;
	document.getElementById("buildingcapacity_text").innerHTML = setbuildingcapacity_text;
	document.getElementById("tradewagon_text").innerHTML = settradewagon_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function market_trade_wagon_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("settradewagon_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("settrade_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("tradewagon_text").innerHTML = settradewagon_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("trade_text").innerHTML = settrade_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function messages_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkp_messages_text");
	sessionStorage.getItem("setnotifications_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kp_messages_text").innerHTML = setkp_messages_text;
	document.getElementById("notifications_text").innerHTML = setnotifications_text;
	document.getElementById("notifications_text2").innerHTML = setnotifications_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};


function messages2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkp_messages_text");
	sessionStorage.getItem("setnotifications_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kp_messages_text").innerHTML = setkp_messages_text;
	document.getElementById("kp_messages_text2").innerHTML = setkp_messages_text;
	document.getElementById("notifications_text2").innerHTML = setnotifications_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function military_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setarmies_text");
	sessionStorage.getItem("setsupportunits_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("armies_text").innerHTML = setarmies_text;
	document.getElementById("supportunits_text").innerHTML = setsupportunits_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function military2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setarmies_text");
	sessionStorage.getItem("setsupportunits_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("armies_text").innerHTML = setarmies_text;
	document.getElementById("supportunits_text").innerHTML = setsupportunits_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function news1_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setannouncement_text2");
	sessionStorage.getItem("setnews_text");
	sessionStorage.getItem("setembassies_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("announcement_text").innerHTML = setannouncement_text2;
	document.getElementById("news_text").innerHTML = setnews_text;
	document.getElementById("embassies_text").innerHTML = setembassies_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function news2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setannouncement_text2");
	sessionStorage.getItem("setnews_text");
	sessionStorage.getItem("setembassies_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("announcement_text").innerHTML = setannouncement_text2;
	document.getElementById("news_text").innerHTML = setnews_text;
	document.getElementById("embassies_text").innerHTML = setembassies_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function process_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkp_process_text");
	sessionStorage.getItem("settrade_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kp_process_text").innerHTML = setkp_process_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("trade_text").innerHTML = settrade_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function process2_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setkp_process_text");
	sessionStorage.getItem("settrade_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("kp_process_text").innerHTML = setkp_process_text;
	document.getElementById("military_text").innerHTML = setmenus_military_text;
	document.getElementById("trade_text").innerHTML = settrade_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function quest_page_save() {
	sessionStorage.getItem("setquests_text");
	
	document.getElementById("quests_text").innerHTML = setquests_text;
	document.getElementById("quests_text2").innerHTML = setquests_text;
};

function village_farmer_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setfarmer_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setpeasant_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("farmer_text").innerHTML = setfarmer_text;
	document.getElementById("farmer_text2").innerHTML = setfarmer_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("peasant_text").innerHTML = setpeasant_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function village_miner_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setgoldminer_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setpeasant_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("goldminer_text").innerHTML = setgoldminer_text;
	document.getElementById("goldminer_text2").innerHTML = setgoldminer_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("peasant_text").innerHTML = setpeasant_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function village_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("buildingcapacity_text");
	sessionStorage.getItem("setfarmer_text");
	sessionStorage.getItem("setwoodcutter_text");
	sessionStorage.getItem("setgoldminer_text");
	sessionStorage.getItem("setvillage_text");
	sessionStorage.getItem("setvillage_text2");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("produce_text2").innerHTML = setproduce_text;
	document.getElementById("produce_text3").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("boost_text3").innerHTML = setupgrade_text;
	document.getElementById("buildingcapacity_text").innerHTML = setbuildingcapacity_text;
	document.getElementById("farmer_text").innerHTML = setfarmer_text;
	document.getElementById("farmer_text2").innerHTML = setfarmer_text;
	document.getElementById("woodcutter_text").innerHTML = setwoodcutter_text;
	document.getElementById("woodcutter_text2").innerHTML = setwoodcutter_text;
	document.getElementById("goldminer_text").innerHTML = setgoldminer_text;
	document.getElementById("goldminer_text2").innerHTML = setgoldminer_text;
	document.getElementById("village_text").innerHTML = setvillage_text;
	document.getElementById("village_text2").innerHTML = setvillage_text2;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function village_woodcutter_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setwoodcutter_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setpeasant_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("woodcutter_text").innerHTML = setwoodcutter_text;
	document.getElementById("woodcutter_text2").innerHTML = setwoodcutter_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("peasant_text").innerHTML = setpeasant_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function wall_build1_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function wall_build2_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function wall_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("setbuildingcapacity_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("buildingcapacity_text").innerHTML = setbuildingcapacity_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function workshop_ballista_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setbronze_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("bronze_text").innerHTML = setbronze_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function workshop_catapult_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setancient_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("ancient_text").innerHTML = setancient_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function workshop_page_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("setproduce_text");
	sessionStorage.getItem("setupgrade_text");
	sessionStorage.getItem("setbuildingcapacity_text");
	sessionStorage.getItem("settoageancient1");
	sessionStorage.getItem("settoageancient2");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("age_text2").innerHTML = setage_text;
	document.getElementById("produce_text").innerHTML = setproduce_text;
	document.getElementById("produce_text2").innerHTML = setproduce_text;
	document.getElementById("produce_text3").innerHTML = setproduce_text;
	document.getElementById("boost_text").innerHTML = setupgrade_text;
	document.getElementById("boost_text2").innerHTML = setupgrade_text;
	document.getElementById("boost_text3").innerHTML = setupgrade_text;
	document.getElementById("buildingcapacity_text").innerHTML = setbuildingcapacity_text;
	document.getElementById("workshop_ancient_catapult1").style.display = settoageancient1;
	document.getElementById("workshop_ancient_catapult2").style.display = settoageancient2;
	document.getElementById("workshop_ancient_siege_vehicle1").style.display = settoageancient1;
	document.getElementById("workshop_ancient_siege_vehicle2").style.display = settoageancient2;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function workshop_siege_vehicle_save() {
	sessionStorage.getItem("setmenus_military_text");
	sessionStorage.getItem("setmenus_logs_text");
	sessionStorage.getItem("setmenus_map_text");
	sessionStorage.getItem("setmenus_allies_text");
	sessionStorage.getItem("setmenus_leaderboard_text");
	sessionStorage.getItem("setinfo_text");
	sessionStorage.getItem("setage_text");
	sessionStorage.getItem("settype_text");
	sessionStorage.getItem("setclass_text");
	sessionStorage.getItem("setancient_text");
	sessionStorage.getItem("setrandom_mapX");
	sessionStorage.getItem("setrandom_mapY");
	
	document.getElementById("menus_military_text").innerHTML = setmenus_military_text;
	document.getElementById("menus_logs_text").innerHTML = setmenus_logs_text;
	document.getElementById("menus_map_text").innerHTML = setmenus_map_text;
	document.getElementById("menus_allies_text").innerHTML = setmenus_allies_text;
	document.getElementById("menus_leaderboard_text").innerHTML = setmenus_leaderboard_text;
	document.getElementById("info_text").innerHTML = setinfo_text;
	document.getElementById("age_text").innerHTML = setage_text;
	document.getElementById("type_text").innerHTML = settype_text;
	document.getElementById("class_text").innerHTML = setclass_text;
	document.getElementById("ancient_text").innerHTML = setancient_text;
	document.getElementById("menu_military_button").href = "military_page.html";
	document.getElementById("menu_logs_button").href = "log_page.html";
	document.getElementById("menu_map_button").href = "map_page.html#map_div_img_x" + setrandom_mapX + "_y" + setrandom_mapY;
	document.getElementById("menu_allies_button").href = "allies_page.html";
	document.getElementById("menu_leaderboard_button").href = "leaderboard_page.html";
};

function nextage_i() {
	sessionStorage.getItem("setironage_text");
	
	sessionStorage.setItem("setkipdisplay1", "none");
	sessionStorage.setItem("setkipdisplay2", "block");
	sessionStorage.setItem("setkipdisplay3", "none");
	sessionStorage.setItem("setkipdisplay4", "none");
	sessionStorage.setItem("setkipdisplay5", "none");
	
	sessionStorage.setItem("setkipnabdisplay1", "none");
	
	sessionStorage.setItem("setkip_text2_display", "none");
	sessionStorage.setItem("setkip_text3_display", "block");
	sessionStorage.setItem("setkip_text4_display", "none");
	sessionStorage.setItem("setkip_text5_display", "none");
	
	sessionStorage.setItem("setage_img", "url('images/age_2_icon.png')");
	
	sessionStorage.setItem("settoageiron1", "none");
	sessionStorage.setItem("settoageiron2", "block");
	
	window.location.reload();
	
	Android.showToast(setironage_text);
};

function nextage_a() {
	sessionStorage.getItem("setancientage_text");
	
	sessionStorage.setItem("setkipdisplay1", "none");
	sessionStorage.setItem("setkipdisplay2", "none");
	sessionStorage.setItem("setkipdisplay3", "block");
	sessionStorage.setItem("setkipdisplay4", "none");
	sessionStorage.setItem("setkipdisplay5", "none");
	
	sessionStorage.setItem("setkipnabdisplay1", "none");
	sessionStorage.setItem("setkipnabdisplay2", "none");
	
	sessionStorage.setItem("setkip_text2_display", "none");
	sessionStorage.setItem("setkip_text3_display", "none");
	sessionStorage.setItem("setkip_text4_display", "block");
	sessionStorage.setItem("setkip_text5_display", "none");
	
	sessionStorage.setItem("setage_img", "url('images/age_3_icon.png')");
	
	sessionStorage.setItem("settoageancient1", "none");
	sessionStorage.setItem("settoageancient2", "block");
	
	window.location.reload();
	
	Android.showToast(setancientage_text);
};

function nextage_c() {
	sessionStorage.getItem("setclassicalage_text");
	
	sessionStorage.setItem("setkipdisplay1", "none");
	sessionStorage.setItem("setkipdisplay2", "none");
	sessionStorage.setItem("setkipdisplay3", "none");
	sessionStorage.setItem("setkipdisplay4", "block");
	sessionStorage.setItem("setkipdisplay5", "none");
	
	sessionStorage.setItem("setkipnabdisplay1", "none");
	sessionStorage.setItem("setkipnabdisplay2", "none");
	sessionStorage.setItem("setkipnabdisplay3", "none");
	
	sessionStorage.setItem("setkip_text2_display", "none");
	sessionStorage.setItem("setkip_text3_display", "none");
	sessionStorage.setItem("setkip_text4_display", "none");
	sessionStorage.setItem("setkip_text5_display", "block");
	
	sessionStorage.setItem("setage_img", "url('images/age_4_icon.png')");
	
	sessionStorage.setItem("settoageclassical1", "none");
	sessionStorage.setItem("settoageclassical2", "block");
	
	window.location.reload();
	
	Android.showToast(setclassicalage_text);
};

function nextage_h() {
	sessionStorage.getItem("sethellenisticage_text");
	
	sessionStorage.setItem("setkipdisplay1", "none");
	sessionStorage.setItem("setkipdisplay2", "none");
	sessionStorage.setItem("setkipdisplay3", "none");
	sessionStorage.setItem("setkipdisplay4", "none");
	sessionStorage.setItem("setkipdisplay5", "block");
	
	sessionStorage.setItem("setkipnabdisplay1", "none");
	sessionStorage.setItem("setkipnabdisplay2", "none");
	sessionStorage.setItem("setkipnabdisplay3", "none");
	sessionStorage.setItem("setkipnabdisplay4", "none");
	
	sessionStorage.setItem("setkip_text2_display", "none");
	sessionStorage.setItem("setkip_text3_display", "none");
	sessionStorage.setItem("setkip_text4_display", "none");
	sessionStorage.setItem("setkip_text5_display", "none");
	
	sessionStorage.setItem("setage_img", "url('images/age_5_icon.png')");
	
	sessionStorage.setItem("settoagehellenistic1", "none");
	sessionStorage.setItem("settoagehellenistic2", "block");
	
	window.location.reload();
	
	Android.showToast(sethellenisticage_text);
};
