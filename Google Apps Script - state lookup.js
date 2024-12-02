function doGet(e) {
  const sheet = SpreadsheetApp.openById('1znCielBXHlOVcQFHtLJFDCTiHYIkR9RimTfCPhxFNBA').getSheetByName('Sheet1'); // Replace with your Sheet ID and name
  const data = sheet.getDataRange().getValues();
  const state = e.parameter.state; 
  
  // Find the row matching the state
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === state) { 
      return ContentService.createTextOutput(JSON.stringify({ result: data[i][3] })) 
            .setMimeType(ContentService.MimeType.JSON);
    }
  }
  return ContentService.createTextOutput(JSON.stringify({ result: null }))
        .setMimeType(ContentService.MimeType.JSON);
}
