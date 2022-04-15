
function fetchdata(){
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        const html = data
        .map(user => {
            return `
            <div class="users">
            <p>${user.id}</p>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.address.street}</p>
            <p>${user.address.suite}</p>
            <p>${user.address.city}</p>
            <p>${user.address.zipcode}</p>
            <p>${user.address.geo.lat}</p>
            <p>${user.address.geo.lng}</p>
            <p>${user.phone}</p>
            <p>${user.company.name}</p>
            <p>${user.company.catchPhrase}</p>
            <p>${user.company.bs}</p>
            </div>
            `;
        })
        .join("");
        console.log(html);
        document.querySelector("#table").insertAdjacentHTML("afterbegin",html);
        
        })
        
    .catch(error => {
        console.log(error);
    });
}

fetchdata();