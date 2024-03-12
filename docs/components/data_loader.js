export async function loadDataCommons(apiKey, dcid, property) 
{ 
      const url = `https://api.datacommons.org/v2/node?key=${apiKey}&nodes=${dcid}&property=${property}`;
      const response = await fetch(url);
      return await response.json();
  
}

// Display function for CSV data
export function displayTableCSV(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = data[0];
  for (const key in headerRow) {
    const th = document.createElement("th");
    th.textContent = key;
    thead.appendChild(th);
  }

  for (const row of data) {
    const tr = document.createElement("tr");
    for (const key in row) {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  const container = document.getElementById("my-table-container"); 
  container.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
}

// Function to display JSON data in tabular format
export function displayJsonData(data) {
  const resultContainer = document.getElementById('resultContainer');

  // Clear previous content
  resultContainer.innerHTML = '';

  // Check if the data is valid
  if (data) {
    // Create a table element
    const table = document.createElement('table');

    // Handle JSON objects
    if (typeof data === 'object') {
      // Create header row
      const headerRow = table.insertRow();
      const headerCell = headerRow.insertCell();
      headerCell.textContent = 'Key';
      const headerCell2 = headerRow.insertCell();
      headerCell2.textContent = 'Value';

      // Recursively add rows for each key-value pair
      displayJsonObject(data, table);
    } else {
      // Display a single row for non-object data
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.textContent = data;
    }

    // Append the table to the result container
    resultContainer.appendChild(table);
  } else {
    // Display an error message if the data is not as expected
    resultContainer.textContent = 'Invalid data structure';
  }
}

// Recursive function to display JSON object properties
function displayJsonObject(obj, table) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const row = table.insertRow();
      const keyCell = row.insertCell();
      keyCell.textContent = key;

      const valueCell = row.insertCell();
      const value = obj[key];

      if (typeof value === 'object') {
        // If the value is an object, recursively add rows
        const nestedTable = document.createElement('table');
        valueCell.appendChild(nestedTable);
        displayJsonObject(value, nestedTable);
      } else {
        // Display the value in a cell
        valueCell.textContent = value;
      }
    }
  }
}




