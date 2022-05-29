// import the data from data.js
const tableData = data;
// Reference the HTML table using D3
var tbody = d3.select("tbody");

// create new function for building a table and clear existing data
function buildTable(data) {
    tbody.html("");


}

// Add the forEach Function
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
  );
});

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filtererdData = tableData;


// add if statement for filtering the date
if (date) {
    filteredData = fiteredData.filter(row => row.datetime === date);
}

// Rebuild the table using the filtered data
buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when page loads
buildTable(tableData);