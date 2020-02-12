let listElements = document.querySelector("#global-header > .container");

function fetchItems() {
    let request = new XMLHttpRequest();

    request.open('GET', ' https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=r2kXiuzARdulUosWjlGuq4e1AHGfehaL&locale=*');
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            var response = request.response;
            var results = response._embedded;
            var eventos = results.events;
            for (let i = 0; i < eventos.length; i++) {
                for (let j = 0; j < eventos[i].images.length; j++) {
                }
                listElements.innerHTML += `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            </div>
                            <div class="flip-card-back">
                                <h1>${eventos[i].name}</h1>
                                <p><b>${eventos[i].info}</b></p>
                                <p><i>${eventos[i].locale}</i></p>
                                <p>${eventos[i].dates.start.dateTime}</p>
                                <button type="button"> <p><a href="${eventos[i].url}">¡COMPRAR AQUÍ!</a></p></button>
                            </div>
                        </div>
                    </div>`
            }
        }
    };
    request.send();
}

fetchItems();
