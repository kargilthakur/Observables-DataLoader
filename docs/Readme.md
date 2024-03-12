---
title: Data Loader Explanation
toc: false
---

# Data Loader Explanation

Data loaders are responsible for generating files, typically static snapshots of data, at build time. For instance, a data loader may query a database to output a CSV file or perform server-side rendering of a chart to produce a PNG image.

For additional details, refer to the [Observable documentation](https://github.com/kargilthakur/Observable/blob/master/docs/index.md).

## Data Loader Code

The code for the data loader is available in `data_loader.js`. The primary class used for fetching data from Google Data Commons is `DataLoader`.

```javascript
class DataLoader {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async loadDataCommons(dcid, property) {
    const url = `https://api.datacommons.org/v2/node?key=${this.apiKey}&nodes=${dcid}&property=${property}`;
    const response = await fetch(url);
    return await response.json();
  }
}

const API_KEY = 'AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI';
const loader = new DataLoader(API_KEY);

// Example: Fetch population of Los Angeles County
const data = await loader.loadDataCommons('geoId/06', '<-');
```

The loader requires two inputs - `dcid` and `property`.

- **DCID**: Every entity in Data Commons (DC) has a unique identifier known as 'DCID'. For instance, the DCID for California is 'geoId/06', and for India, it's 'country/IND'. DCIDs aren't restricted to entities; statistical variables also have DCIDs (e.g., the DCID for the Gini Index of Economic Activity is 'GiniIndex_EconomicActivity'). To find the DCID and property details, use the [Data Commons browser](https://datacommons.org/browser/).

- **Property**: While a solid definition of property is elusive, it likely refers to the columns for the specific DCID.

For more API request examples, check the [Data Commons API documentation](https://docs.datacommons.org/api/rest/v2/node).

Data can be directly downloaded in csv files using this [link](https://datacommons.org/tools/download)

Plots from Data Commons Web Components can be also fetched directly using [this](https://docs.datacommons.org/api/web_components/)

[Google Data Commons Place Browser](https://datacommons.org/place)

## API Key

The API key used in the example is a public one. To obtain your own API key, apply through [this link](https://docs.google.com/forms/d/e/1FAIpQLSeVCR95YOZ56ABsPwdH1tPAjjIeVDtisLF-8oDYlOxYmNZ7LQ/viewform). Additional information on getting the API key can be found [here](https://docs.datacommons.org/api/rest/v2/getting_started#getting-api-keys).

---