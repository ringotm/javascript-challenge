// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

var cities = tableData.map(item => item.city);
var cities = new Set(cities);
var states = tableData.map(item => item.state);
var states = new Set(states);
var countries = tableData.map(item => item.country);
var countries = new Set(countries);
var shapes = tableData.map(item => item.shape);
var shapes = new Set(shapes);


console.log(cities);

var select_dropdown = d3.select("#city-select");

var select_dropdown = document.getElementById("city-select");
var option = document.createElement("option");
option.text = '';
select_dropdown.add(option);

cities.forEach((city) => {
    var select_dropdown = document.getElementById("city-select");
    var option = document.createElement("option");
    option.text = city;
    select_dropdown.add(option);
});

var select_dropdown = d3.select("#state-select");

var select_dropdown = document.getElementById("state-select");
var option = document.createElement("option");
option.text = '';
select_dropdown.add(option);

states.forEach((state) => {
    var select_dropdown = document.getElementById("state-select");
    var option = document.createElement("option");
    option.text = state;
    select_dropdown.add(option);
});

var select_dropdown = d3.select("#country-select");

var select_dropdown = document.getElementById("country-select");
var option = document.createElement("option");
option.text = '';
select_dropdown.add(option);

countries.forEach((country) => {
    var select_dropdown = document.getElementById("country-select");
    var option = document.createElement("option");
    option.text = country;
    select_dropdown.add(option);
});

var select_dropdown = d3.select("#shape-select");

var select_dropdown = document.getElementById("shape-select");
var option = document.createElement("option");
option.text = '';
select_dropdown.add(option);

shapes.forEach((shape) => {
    var select_dropdown = document.getElementById("shape-select");
    var option = document.createElement("option");
    option.text = shape;
    select_dropdown.add(option);
});


tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

var form = d3.select("form");

var select = d3.selectAll("select");

button.on("click", runEnter);
form.on("submit", runEnter);
select.on("change", runEnter);

//d3.selectAll("select").on("change, runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputDateElement = d3.select("#datetime");

    var inputDateValue = inputDateElement.property("value");

    var inputCityElement = d3.select("#city-select");

    var inputCityValue = inputCityElement.property("value");

    var inputStateElement = d3.select("#state-select");

    var inputStateValue = inputStateElement.property("value");

    var inputCountryElement = d3.select("#country-select");

    var inputCountryValue = inputCountryElement.property("value");

    var inputShapeElement = d3.select("#shape-select");

    var inputShapeValue = inputShapeElement.property("value");

    if (inputCityValue === '' && inputStateValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue);

    } else if (inputDateValue === '' && inputStateValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.state === inputStateValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputStateValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.country === inputCountryValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputStateValue === '' && inputCountryValue === '') {
        var filteredData = tableData.filter(tableData => tableData.shape === inputShapeValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputStateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.shape === inputShapeValue && tableData.country === inputCountryValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputCountryValue === '') {
        var filteredData = tableData.filter(tableData => tableData.shape === inputShapeValue && tableData.state === inputStateValue);

    } else if (inputDateValue === '' && inputCityValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.state === inputStateValue && tableData.country === inputCountryValue);

    } else if (inputDateValue === '' && inputStateValue === '' && inputCountryValue === '') {
        var filteredData = tableData.filter(tableData => tableData.shape === inputShapeValue && tableData.city === inputCityValue);

    } else if (inputDateValue === '' && inputStateValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.country === inputCountryValue && tableData.city === inputCityValue);

    } else if (inputDateValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.state === inputStateValue);

    } else if (inputStateValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue);

    } else if (inputCityValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.state === inputStateValue);

    } else if (inputDateValue === '' && inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.state === inputStateValue);

    } else if (inputCityValue === '' && inputStateValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.country === inputCountryValue);

    } else if (inputCountryValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.state === inputStateValue);

    } else if (inputCountryValue === '' && inputStateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.shape === inputShapeValue);

    } else if (inputCountryValue === '' && inputCityValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.state === inputStateValue && tableData.shape === inputShapeValue);

    } else if (inputCountryValue === '' && inputDateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.shape === inputShapeValue);

    } else if (inputDateValue === '' && inputCityValue === '') {
        var filteredData = tableData.filter(tableData => tableData.state === inputStateValue && tableData.country === inputCountrValue && tableData.shape === inputShapeValue);

    } else if (inputDateValue === '' && inputStateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.country === inputCountryValue && tableData.shape === inputShapeValue);

    } else if (inputDateValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.country === inputCountryValue);

    } else if (inputCityValue === '' && inputStateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.country === inputCountryValue && tableData.shape === inputShapeValue);

    } else if (inputCityValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.state === inputStateValue && tableData.country === inputCountryValue);

    } else if (inputStateValue === '' && inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.country === inputCountryValue);

    } else if (inputShapeValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.country === inputCountryValue);

    } else if (inputDateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.country === inputCountryValue && tableData.shape === inputShapeValue);

    } else if (inputCityValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.shape === inputShapeValue && tableData.state === inputStateValue && tableData.country === inputCountryValue);

    } else if (inputCountryValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.shape === inputShapeValue);

    } else if (inputStateValue === '') {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.shape === inputShapeValue && tableData.country === inputCountryValue);

    } else {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.country === inputCountryValue && tableData.shape === inputShapeValue);

    };



    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};



// YOUR CODE HERE!
