function doGet(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1'); // Replace with your Sheet ID and name
  const data = sheet.getDataRange().getValues();
  const state = e.parameter.state; // Get the state from the query string
  
  // Find the row matching the state
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === state) { // Assuming state is in column A
      return ContentService.createTextOutput(JSON.stringify({ result: data[i][3] })) // Column B value
            .setMimeType(ContentService.MimeType.JSON);
    }
  }
  return ContentService.createTextOutput(JSON.stringify({ result: null }))
        .setMimeType(ContentService.MimeType.JSON);
}
