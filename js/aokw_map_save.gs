var sh1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("map_div_all");



function take_back_up(){
var lrow = sh1.getLastRow();
for(var i=2;i<=lrow;i++){
  var url = save_as_doc(sh1.getRange(i, 1).getValue())
  Logger.log(url)
  sh1.getRange(i, 2).setValue(url)
}

}


function save_as_doc(url) {
  var url = "https://github-webtest.github.io/aokw/map_page.html";
  var html = UrlFetchApp.fetch(url);
  var folderid = '1C55VIz5mlH6m9nFX9jW_N0yiev5lCy_g';
  var formattedDate = Utilities.formatDate(new Date(), "GMT", "MM-dd-yyyy HH:mm:ss");
  var docId = Drive.Files.insert(
    { title: "Doc "+formattedDate, 
     parents: [{id:'1C55VIz5mlH6m9nFX9jW_N0yiev5lCy_g'}],
     mimeType: MimeType.GOOGLE_DOCS },
    html.getBlob()
  ).id;
 var file = DriveApp.getFileById(docId)
 var fileUrl = file.getUrl();
  Logger.log(fileUrl)
 return fileUrl;
  
}