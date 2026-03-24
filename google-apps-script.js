/**
 * Google Apps Script — Paste this into Google Apps Script Editor
 * 
 * SETUP:
 * 1. Go to https://script.google.com → New Project
 * 2. Paste this code and save
 * 3. Deploy → New Deployment → Web App
 * 4. Execute as: Me | Who has access: Anyone
 * 5. Copy the URL → paste in Hero.jsx line 4
 */

const SHEET_NAME = 'Admissions';

function doPost(e) {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = ss.getSheetByName(SHEET_NAME);
        if (!sheet) {
            sheet = ss.insertSheet(SHEET_NAME);
        }

        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Student Name', 'Grade Required', 'Parent Name', 'Phone', 'Email', 'Message']);
            const h = sheet.getRange(1, 1, 1, 7);
            h.setFontWeight('bold');
            h.setBackground('#1A3A6B');
            h.setFontColor('#FFFFFF');
        }

        sheet.appendRow([
            e.parameter.timestamp || new Date().toLocaleString(),
            e.parameter.studentName || '',
            e.parameter.grade || '',
            e.parameter.parentName || '',
            e.parameter.phone || '',
            e.parameter.email || '',
            e.parameter.message || '',
        ]);

        return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet() {
    return ContentService.createTextOutput('Kabir Global Academy — Admissions Backend Running').setMimeType(ContentService.MimeType.TEXT);
}
