console.log("outside of questions");

const questionsFormHandler = async (event) => {
  console.log("inside questionsFormHandler")
  event.preventDefault();
  const carInput = document.getElementById("carInput").value.trim();
    const gasoline = document.getElementById("gasoline").checked;
    const diesel = document.getElementById("diesel").checked;
    const electric = document.getElementById("electric").checked;
    const miles = document.getElementById("miles").value.trim();
    const hours = document.getElementById("hours").value.trim();
    const nattie = document.getElementById("nattie").checked;
    const liquid = document.getElementById("liquid").checked;
    const fuel = document.getElementById("fuel").checked;
    const recycle = document.getElementById("recycle").checked;
    const bbq = document.getElementById("bbq").value.trim();
    const phones = document.getElementById("phones").value.trim();
    const water = document.getElementById("water").value.trim();
    const meat = document.getElementById("meat").checked;
    const average = document.getElementById("average").checked;
    const nobeef = document.getElementById("nobeef").checked;
    const vegetarian = document.getElementById("vegetarian").checked;
    const vegan = document.getElementById("vegan").checked;
 

    if (gasoline || diesel || electric || miles || hours || nattie || liquid || fuel || recycle || bbq || phones || 
      water || meat || average || nobeef || vegetarian || vegan
         
       ) 
        {
        const response = await fetch('/api/newquestions', {
          method: 'POST',
          body: JSON.stringify({gasoline, diesel, electric, miles , hours , nattie , liquid, fuel, recycle,
            bbq, phones, water, meat, average, nobeef, vegetarian, vegan
            }),
          headers: {'Content-Type': 'application/json'},
        });

        // takes the user to the profile page if ok and once they get to the profile page they will see their rendered data because it fires off the profile route homepage
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert("Please Try Again");
        }
      }
  };
  console.log("outside of questions");



document.addEventListener("submit", questionsFormHandler)