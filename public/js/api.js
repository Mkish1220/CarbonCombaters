var queryURL = "https://beta3.api.climatiq.io/estimate"

fetch(queryURL, {
    headers: { "authorization": " Bearer 2D3CHJ5CF7MGJYJ6YGK6J1T2DX55" },
  })
    .then(function (response) {
        console.log(response);
      return response.json();
    });
