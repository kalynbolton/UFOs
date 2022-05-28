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