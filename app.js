alert("Welcome to Aaron's Coding Challenege.");

function fetchdata(){
    console.log("Starting fetch function.")
    fetch("https://my-json-server.typicode.com/aarondavidgedev/codingchallenege/posts").then(response => {
        console.log(response);
    });
}

fetchdata();