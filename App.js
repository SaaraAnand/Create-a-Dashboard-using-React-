// App.js
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import Card from "./SummaryCard";
import data from "./data.json"; // Import the data.json file

function App() {
// App component starts here
const locationList = [
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NT", label: "Northwest Territories" },
    { value: "NS", label: "Nova Scotia" },
    { value: "NU", label: "Nunavut" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
    { value: "YT", label: "Yukon" },
  ];

const [activeLocation, setActiveLocation] = useState("AB");
const [lastUpdated, setlastUpdated] = useState("");
const [summaryData, setSummaryData] = useState({});

const getSummaryData = useCallback(() => {
    try {
      if (activeLocation === "canada") {
        return;
      }

      const summaryData = data[activeLocation];
      setSummaryData(summaryData);
    } catch (error) {
      console.error("Error fetching summary data:", error);
    }
  }, [activeLocation]);

const getVersion = async () => {
    try {
      // Simulating a version update from data.json
      setlastUpdated("2024-02-06");
    } catch (error) {
      console.error("Error fetching version data:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      getSummaryData();
      getVersion();
    };

    fetchData();
  }, [getSummaryData, activeLocation]);

//return statement goes below this
  return (
    <div className="App">
      <h1>COVID 19 Dashboard </h1>
      <div className="dashboard-container">
      <div className="dashboard-menu ">
          <Select
            options={locationList}
            onChange={(selectedOption) =>
              setActiveLocation(selectedOption.value)
            }
            defaultValue={locationList.filter(
              (options) => options.value === activeLocation
            )}
            className="dashboard-select"
          />
          <p className="update-date">
            Last Updated : {lastUpdated}
          </p>
        </div>
        <div className="dashboard-summary">
          <Card title="Total Cases" value={summaryData.totalCases} />
          <Card title="Total Tests" value={summaryData.totalTests} />
          <Card title="Total Deaths" value={summaryData.totalDeaths} />
          <Card
            title="Total Vaccinated"
            value={summaryData.totalVaccinated}
          />
        </div>
      </div>
    </div>
  );
}

export default App;