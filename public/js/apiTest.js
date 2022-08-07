
  console.log("outside questionSearch")
function questionSearch(){
    console.log("inside questionSearch")
    let Key = "Bearer 2D3CHJ5CF7MGJYJ6YGK6J1T2DX55"
    let queryURL = "https://beta3.api.climatiq.io/estimate?&"  
    fetch(queryURL, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "authroization": Key
        },
        // body: JSON.stringify(data),
        {
            emission_factor: {
              activity_id: heat-and-steam-type_purchased
             },
            parameters: {
              energy: 100,
              energy_unit: kWh
            }
      },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    
}

questionSearch();