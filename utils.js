import fs from 'fs';
import xlsx from 'xlsx';

export const expectToBe = (actual, expected) => {
    expect(actual).toBe(expected);
  };
  
  export const expectToContain = (actual, expected) => {
    expect(actual).toContain(expected);
  };


export const readJSON = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath));
};


export const readExcel = (filePath, sheetName) => {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};


const valueStore = new Map();

export const setValue = (key, value) => valueStore.set(key, value);
export const getValue = (key) => valueStore.get(key);
export const clearValues = () => valueStore.clear();
