const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../Nutrient.xlsx');
console.log('Reading file from:', filePath);

try {
    const workbook = XLSX.readFile(filePath);
    console.log('Sheet Names:', workbook.SheetNames);

    workbook.SheetNames.forEach(name => {
        console.log(`\n--- Sheet: ${name} ---`);
        const sheet = workbook.Sheets[name];
        const data = XLSX.utils.sheet_to_json(sheet);
        if (data.length > 0) {
            console.log('Columns:', Object.keys(data[0]));
            console.log('First Row:', data[0]);
        } else {
            console.log('Empty sheet');
        }
    });
} catch (error) {
    console.error('Error reading file:', error);
}
