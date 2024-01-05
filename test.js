const axios = require('axios');

const NOTION_API_URL = 'https://www.notion.so/arpitverma/Blogs-f6ab0e77c6214a589881c45308d15e39';
const NOTION_API_KEY = 'secret_NGORES6CbUUIGsngJ0rUf1hfCXuo5w3wQyUiicQOQvL';

async function fetchDataFromNotion() {
  try {
    const response = await axios.post(
      NOTION_API_URL,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2023-08-16', // Specify the Notion API version
        },
      }
    );

    const data = response.data;
    console.log(data.results);
    // Process the data as needed
  } catch (error) {
    console.error('Error fetching data from Notion:', error.message);
  }
}

fetchDataFromNotion();
