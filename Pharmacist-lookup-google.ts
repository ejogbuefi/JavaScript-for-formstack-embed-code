function doGet(e) {
    const state = e.parameter.state; // Get state from query parameter
    if (!state) return ContentService.createTextOutput("No state provided");

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(state);
    if (!sheet) return ContentService.createTextOutput("Sheet not found");

    const data = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
    const output = data.flat().filter(value => value); // Flatten and remove empty rows

    return ContentService.createTextOutput(JSON.stringify(output))
        .setMimeType(ContentService.MimeType.JSON);
}