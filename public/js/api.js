var queryURL = "https://beta3.api.climatiq.io/estimate"

fetch(queryURL, {
    headers: { },
  })
    .then(function (response) {
        console.log(response);
      return response.json();
    });
