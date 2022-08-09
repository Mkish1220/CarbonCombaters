// testing of fetch file
// const fetch = require("node-fetch");

const { response } = require("express");

const test = async () => {
    console.log("hi")
    let url = "http://localhost:3001/api/newquestions"
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

};

test();
