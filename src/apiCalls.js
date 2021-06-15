export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postURL = (data) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
      .then(response => response.json())
}
