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
    // if (electricity) 
    // {
    // const response = await fetch('/api/newquestions', {
    //   method: 'POST',
    //   body: JSON.stringify({electricity}),
    //   headers: {'Content-Type': 'application/json'},
    // });

    // // takes the user to the questions page if ok
    // if (response.ok) {
    //   alert("data saved")
    //   //   PUT THIS BACK document.location.replace('/profile');
    //   } else {
    //     alert("Please Try Again");
    //   }
    // }
    // sends a post to create the user



//                              FULL INPUT VALUES BELOW
    // (gasoline || diesel || electric || miles || hours || nattie || liquid || fuel || recycle || bbq || phones || water || meat || nobeef || vegetarian || vegan
         
    //   ) 
    // body: JSON.stringify({gasoline, diesel, electric, miles , hours , nattie , liquid, fuel, recycle,
    //   bbq, phones, water, meat, nobeef, vegetarian, vegan
    //    }),



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

        // takes the user to the questions page if ok
        if (response.ok) {
          alert("your information has been saved")
          // PW PUT BACK IN document.location.replace('/profile');
        } else {
          alert("Please Try Again");
        }
      }
  };
  console.log("outside of questions");





// console.log("outside of questions");

// const questionsFormHandler = async (event) => {
//     console.log("inside questionsFormHandler")
//     event.preventDefault();
//     // const carInput = document.getElementById("carInput").value.trim();
//     // const gasoline = document.getElementById("gasoline").value.trim();
//     // const diesel = document.getElementById("diesel").value.trim();
//     // const electric = document.getElementById("electric").value.trim();
//     // const miles = document.getElementById("miles").value.trim();
//     // const electricity = document.getElementById("electricity").value.trim();
//     // const nattie = document.getElementById("naturalGas").value.trim();
//     // const petrol = document.getElementById("petrol").value.trim();
//     // const fuelOil = document.getElementById("fuelOil").value.trim();
//     // const recycle = document.getElementById("recycle").value.trim();
//     // const propane = document.getElementById("propane").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     // const water = document.getElementById("water").value.trim();
//     // const meat = document.getElementById("meat").value.trim();
//     // const average = document.getElementById("average").value.trim();
//     // const nobeef = document.getElementById("nobeef").value.trim();
//     // const vegetarian = document.getElementById("vegetarian").value.trim();
//     // const vegan = document.getElementById("vegan").value.trim();
   
//     if (electricity) 
//         {
//         const response = await fetch('/api/newquestions', {
//           method: 'POST',
//           body: JSON.stringify({electricity}),
//           headers: {'Content-Type': 'application/json'},
//         });
    
//         // takes the user to the questions page if ok
//         if (response.ok) {
//             alert("data saved")
//         //   PUT THIS BACK document.location.replace('/profile');
//         } else {
//           alert("Please Try Again");
//         }
//       }

//     // sends a post to create the user
//     // if (gasoline || diesel || electric || miles || electricity || nattie ||
//     //     petrol || fuelOil || recycle || propane || phone || water || meat||
//     //     average || nobeef || vegetarian || vegan) 
//     //     {
//     //     const response = await fetch('/api/newquestions', {
//     //       method: 'POST',
//     //       body: JSON.stringify({gasoline , diesel , electric , miles , electricity , nattie ,
//     //         petrol , fuelOil , recycle , propane , phone , water , meat,
//     //         average , nobeef , vegetarian , vegan}),
//     //       headers: {'Content-Type': 'application/json'},
//     //     });
    
//     //     // takes the user to the questions page if ok
//     //     if (response.ok) {
//     //       document.location.replace('/profile');
//     //     } else {
//     //       alert("Please Try Again");
//     //     }
//     //   }
//     };
//     console.log("outside of questions");
    
  

document.addEventListener("submit", questionsFormHandler)