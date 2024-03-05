---
title: Data Loader Call
toc: false
---

<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 20px;
    padding: 20px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    margin: 10px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  label {
    display: block;
    margin: 10px 0;
  }

  input {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  #resultContainer {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>

## Usage Example

<button id="loadDataButton">Load Data Commons</button>

<div>
  <label for="dcidInput">Enter DCID:</label>
  <input type="text" id="dcidInput" placeholder="e.g., geoId/06">
</div>

<div>
  <label for="propertyInput">Enter Property:</label>
  <input type="text" id="propertyInput" placeholder="e.g., <-">
</div>

<div id="resultContainer"></div>


```js
  import {loadDataCommons,displayJsonData} from "./components/data_loader.js";
```

```js
  document.getElementById('loadDataButton').addEventListener('click', () => 
    {
        const apiKey = 'AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI';
        const dcidInput = document.getElementById('dcidInput').value;
        const propertyInput = document.getElementById('propertyInput').value;

        console.log('DCID:', dcidInput);
        console.log('Property:', propertyInput);

        loadDataCommons(apiKey, dcidInput, propertyInput).then(data => {
            console.log(data);
            displayJsonData(data);

            })
                .catch(error => {
                    console.error('Error loading data:', error);
            });
        
    }
  );
```



---