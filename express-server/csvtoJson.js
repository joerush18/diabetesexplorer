const fs = require("fs");
const csv = require("csv-parser");

// Specify the columns to select
const selectedColumns = [
  "name",
  "calories",
  "total_fat",
  "saturated_fat",
  "cholesterol",
  "sodium",
  "protein",
  "carbohydrate",
  "fiber",
  "sugars",
];

// Conversion factors for postfixes
const postfixToGrams = {
  mg: 0.001,
  mcg: 0.000001,
};

// Read the CSV file
const results = [];
const uniqueNames = new Set(); // Keep track of unique names

fs.createReadStream("nutrition.csv")
  .pipe(csv())
  .on("data", (row) => {
    const names = row["name"].split(", ");
    names.forEach((name) => {
      const nameUpperCase = name.toUpperCase(); // Convert name to uppercase
      if (!uniqueNames.has(nameUpperCase)) {
        // Check if name is unique
        uniqueNames.add(nameUpperCase);

        const selectedData = {};
        selectedColumns.forEach((column) => {
          if (column in row) {
            let value = row[column];
            if (value.endsWith("mg") || value.endsWith("mcg")) {
              const postfix = value.slice(-2);
              const numericValue = parseFloat(value);
              value = numericValue * (postfixToGrams[postfix] || 1);
            }
            selectedData[column] = value;
          }
        });
        selectedData["name"] = name;
        results.push(selectedData);
      }
    });
  })
  .on("end", () => {
    const jsonOutput = JSON.stringify(results, null, 2);
    fs.writeFileSync("nutrition.json", jsonOutput);
    console.log("Data has been written to processed_data.json");
  });
