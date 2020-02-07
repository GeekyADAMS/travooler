// import axios from axios;

// const httpClient = axios.create({
//     baseURL: 'https://europe-west1-schooler-dd7d9.cloudfunctions.net/api',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

const httpClient = (url, body) => {
  return fetch(`https://europe-west1-schooler-dd7d9.cloudfunctions.net/api${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
}

export default httpClient
