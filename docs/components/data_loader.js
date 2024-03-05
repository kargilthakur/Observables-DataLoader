export async function loadDataCommons(apiKey, dcid, property) 
{ 
      const url = `https://api.datacommons.org/v2/node?key=${apiKey}&nodes=${dcid}&property=${property}`;
      const response = await fetch(url);
      return await response.json();
  
}

// Display function for CSV data
function displayTableCSV(data) {
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

// Function to display property data in tabular format
export function displayJsonData(data) {
  const resultContainer = document.getElementById('resultContainer');

  // Clear previous content
  resultContainer.innerHTML = '';

  // Check if the data structure is valid
  if (data && data.data) {
    const properties = data.data['geoId/06'].properties;

    // Create a table element
    const table = document.createElement('table');

    // Create a header row
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = 'Properties';

    // Create rows for each property
    for (const property of properties) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.textContent = property;
    }

    // Append the table to the result container
    resultContainer.appendChild(table);
  } else {
    // Display an error message if the data structure is not as expected
    resultContainer.textContent = 'Invalid data structure';
  }
}


