const questionsFormHandler = async (event) => {
    event.preventDefault();
    const carInput = document.getElementById("carInput").value.trim();
    const gasoline = document.getElementById("gasoline").value.trim();
    const diesel = document.getElementById("diesel").value.trim();
    const electric = document.getElementById("electric").value.trim();
    const miles = document.getElementById("miles").value.trim();
    const electricity = document.getElementById("electricity").value.trim();
    const nattie = document.getElementById("naturalGas").value.trim();
    const petrol = document.getElementById("petrol").value.trim();
    const fuelOil = document.getElementById("fuelOil").value.trim();
    const recycle = document.getElementById("recycle").value.trim();
    const propane = document.getElementById("propane").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const water = document.getElementById("water").value.trim();
    const meat = document.getElementById("meat").value.trim();
    const average = document.getElementById("average").value.trim();
    const nobeef = document.getElementById("nobeef").value.trim();
    const vegetarian = document.getElementById("vegetarian").value.trim();
    const vegan = document.getElementById("vegan").value.trim();
   
  
  

    // sends a post to create the user
    if (gasoline || diesel || electric || miles || electricity || nattie ||
        petrol || fuelOil || recycle || propane || phone || water || meat||
        average || nobeef || vegetarian || vegan) {
        const response = await fetch('/api/newquestions', {
          method: 'POST',
          body: JSON.stringify({gasoline , diesel , electric , miles , electricity , nattie ,
            petrol , fuelOil , recycle , propane , phone , water , meat,
            average , nobeef , vegetarian , vegan}),
          headers: {'Content-Type': 'application/json'},
        });
    
        // takes the user to the questions page if ok
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert("Please Try Again");
        }
      }
    };

  

document.addEventListener("calculate-btn", questionsFormHandler)