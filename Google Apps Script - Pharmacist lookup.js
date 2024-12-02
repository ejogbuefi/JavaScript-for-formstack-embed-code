function doGet(e) {
    const state = e.parameter.state; // Get the state parameter from the request
    if (!state) return ContentService.createTextOutput("No state provided");

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(state);
    if (!sheet) return ContentService.createTextOutput("Sheet not found");

    const data = sheet.getDataRange().getValues(); // Get all data from the sheet
    const selectedColumns = data.map(row => [row[0], row[3], row[4]]); // Extract 1st, 4th, and 5th columns

    return ContentService.createTextOutput(JSON.stringify(selectedColumns))
        .setMimeType(ContentService.MimeType.JSON);
}
