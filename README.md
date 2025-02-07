# Create-a-Dashboard-using-React-
Creating a COVID Dashboard using React js and Chart js.
![image](https://github.com/user-attachments/assets/9d83b2bf-6925-42c8-bdc8-da3c935d7c81)
![image](https://github.com/user-attachments/assets/e215ce19-61ae-431c-b1c9-08d0e5ff2a36)
COVID-19 Dashboard
This is a React-based dashboard that displays COVID-19 statistics for different provinces in Canada. Users can select a province from a dropdown menu, and the app will update the displayed summary data accordingly.

Project Overview
This project provides a real-time summary of COVID-19 cases, tests, deaths, and vaccinations in various Canadian provinces. It fetches data from a JSON file (data.json) and updates the UI dynamically when the user selects a province.

Tech Stack
React (Functional Components, Hooks like useState, useEffect, useCallback)
React-Select (for dropdown selection)
CSS (for styling)
JavaScript (for state management and event handling)

How It Works
The province selection dropdown (powered by react-select) allows users to choose a Canadian province.
When a province is selected, the app fetches COVID-19 statistics from data.json and updates the UI.
The summary data (total cases, tests, deaths, and vaccinations) is displayed using the SummaryCard component.
The last updated date is simulated in the getVersion function.

Main Components
1. App.js (Main Component)
Handles the overall functionality of the dashboard, including:

Managing state (useState)
Fetching data (useEffect, useCallback)
Rendering UI components (Select dropdown and SummaryCard)
2. SummaryCard.js (Reusable Component)
Displays individual statistics like total cases, tests, deaths, and vaccinations.

3. data.json (Data Storage)
Contains a JSON object storing COVID-19 statistics for different provinces.

Example data.json:

json
Copy
Edit
{
  "AB": { "totalCases": 50000, "totalTests": 1000000, "totalDeaths": 500, "totalVaccinated": 30000 },
  "BC": { "totalCases": 40000, "totalTests": 900000, "totalDeaths": 450, "totalVaccinated": 25000 }
}


Features
✔ Dynamic province selection
✔ Real-time data updates
✔ Clean and responsive UI
✔ Reusable components


Future Enhancements
🔹 Fetch live COVID-19 data from an external API
🔹 Implement charts for better data visualization
🔹 Add historical data trends

