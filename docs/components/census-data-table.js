import * as d3 from "d3";

// Function to load and process CSV data
async function loadCSV(file) {
  const data = await d3.csv(file);
  // Optionally clean or transform data if needed
  return data;
}

// Create a reactive variable to hold the loaded data
const censusData = reactive(null);

// Load data on load
useEffect(() => {
  loadCSV("./data/US-AK-census-naics4-2020.csv").then((data) => {
    censusData.set(data);
  });
}, []);

// Function to create the table header
function createTableHeader(columns) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
}

// Function to create a table row
function createTableRow(row) {
  return (
    <tr>
      {Object.values(row).map((cellValue) => (
        <td key={cellValue}>{cellValue}</td>
      ))}
    </tr>
  );
}

// Function to render the table body
function renderTableBody(data) {
  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <tbody>
      {data.map((row) => createTableRow(row))}
    </tbody>
  );
}

// Export the component
export default function CensusDataTable() {
  return (
    <table className="data-table">
      {createTableHeader(Object.keys(censusData.get()?.[0] || {}))}
      {renderTableBody(censusData.get())}
    </table>
  );
}
