function doGet(e) {
    const state = e.parameter.state; // Get the state parameter from the request
    if (!state) return ContentService.createTextOutput("No state provided");

    // const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(state);
    
    const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets(); // Get all sheets
    let sheet = null;

    // Find the sheet with a name that contains the "state" value
    for (let i = 0; i < sheets.length; i++) {
        if (sheets[i].getName().includes(state)) {
            sheet = sheets[i];
            break;
        }
    }

    if (!sheet) return ContentService.createTextOutput("Sheet not found");

    const data = sheet.getDataRange().getValues(); // Get all data from the sheet
    const selectedColumns = data.slice(1).map(row => [row[0], row[3], row[4]]); // Extract 1st, 4th, and 5th columns

    return ContentService.createTextOutput(JSON.stringify(selectedColumns))
        .setMimeType(ContentService.MimeType.JSON);
}
