const API_URL = "https://api.adviceslip.com/advice";
const xhr = new XMLHttpRequest();
const HTMLResponse = document.querySelector("#values");
const roll = document.getElementById("roll");

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        /*
        Estados de la petición: 

        0 = UNSET: no se ha llamado al metodo OPEN
        1 = OPENED: el metodo ha sido llamado
        2 = HEADERS_RECIEVED: se está llamando al metodo send()
        3 = LOADING: se está cargando la respuesta
        4 = DONE: la operación se ha completado
        */
        const data = JSON.parse(this.response);
        let number = document.createElement("p");
        let advice = document.createElement("p");
        number.setAttribute("id", "num");
        number.setAttribute("class", "text");
        advice.setAttribute("id", "adv");
        advice.setAttribute("class", "text");
        number.innerHTML = `Advice #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
        HTMLResponse.appendChild(number);
        HTMLResponse.appendChild(advice);
    }
}

function random() {
    HTMLResponse.innerHTML = "";
    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}`);
    xhr.send();
}

random();

roll.addEventListener("click", random);