// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ClickCounter = () => {
//   const [clickCount, setClickCount] = useState(
//     parseInt(localStorage.getItem("clickCount")) || 0
//   );
//   const [countryClicks, setCountryClicks] = useState(
//     JSON.parse(localStorage.getItem("countryClicks")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("clickCount", clickCount);
//     localStorage.setItem("countryClicks", JSON.stringify(countryClicks));
//   }, [clickCount, countryClicks]);

//   const handleClick = async () => {
//     setClickCount(clickCount + 1);

//     try {
//       const response = await axios.get("https://ipapi.co/json/");
//       // const response = await axios.get("http://api.ipapi.com/api/161.185.160.93? access_key = 11fabdab3300fb9da2c2df147c7f88ac")
//       const country = response.data.country_name;
//       const countryCode = response.data.country;
//       const newCountryClicks = [...countryClicks];
//       const existingCountry = newCountryClicks.find(
//         (country) => country.countryCode === countryCode
//       );
//       if (existingCountry) {
//         existingCountry.count += 1;
//       } else {
//         newCountryClicks.push({
//           countryCode,
//           countryName: country,
//           count: 1,
//         });
//       }
//       setCountryClicks(newCountryClicks);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleReset = () => {
//     setClickCount(0);
//     setCountryClicks([]);
//     localStorage.removeItem("clickCount");
//     localStorage.removeItem("countryClicks");
//   };

//   return (
//     <div>
//       <h1>Click Counter</h1>
//       <button onClick={handleClick}>Click Me!</button>
//       <button onClick={handleReset}>Reset</button>
//       <p>Click Count: {clickCount}</p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Country Code</th>
//             <th>Country Name</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {countryClicks.map((country) => (
//             <tr key={country.countryCode}>
//               <td>{country.countryCode}</td>
//               <td>{country.countryName}</td>
//               <td>{country.count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClickCounter;

// import React, { useState, useEffect } from 'react';

// const ClickCounter = () => {
//   // Initialize the click count from local storage or default to 0
//   const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0);

//   // Keep track of clicks by country
//   const [clicksByCountry, setClicksByCountry] = useState({});

//   // Increment the click count and update the display
//   const handleClick = async () => {
//     setCount(count + 1);

//     // Get the user's country from their IP address using ipapi API
//     const response = await fetch('https://ipapi.co/json/');
//     const data = await response.json();
//     const country = data.country_name;

//     // Update the clicks by country data
//     setClicksByCountry(prevState => ({
//       ...prevState,
//       [country]: (prevState[country] || 0) + 1,
//     }));
//   };

//   // Update the local storage on count change
//   useEffect(() => {
//     localStorage.setItem('count', count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Click Counter</h1>
//       <button onClick={handleClick}>Click me!</button>
//       <p>Click count: {count}</p>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>Country</th>
//             <th>Clicks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(clicksByCountry).map(([country, clicks]) => (
//             <tr key={country}>
//               <td>{country}</td>
//               <td>{clicks}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClickCounter;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClickCounter = () => {
  // Initialize the click count from local storage or default to 0
  const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0);

  // Keep track of clicks by country
  const [clicksByCountry, setClicksByCountry] = useState({});

  // Increment the click count and update the display
  const handleClick = async () => {
    setCount(count + 1);

    // Get the user's country from their IP address using ipapi API
    const response = await axios.get('https://ipapi.co/json/');
    const data = response.data;
    const country = data.country_name;

    // Update the clicks by country data
    setClicksByCountry(prevState => ({
      ...prevState,
      [country]: (prevState[country] || 0) + 1,
    }));
  };

  // Update the local storage on count change
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h1>Click Counter</h1>
      <button onClick={handleClick}>Click me!</button>
      <p>Click count: {count}</p>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(clicksByCountry).map(([country, clicks]) => (
            <tr key={country}>
              <td>{country}</td>
              <td>{clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClickCounter;


