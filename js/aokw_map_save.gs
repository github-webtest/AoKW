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