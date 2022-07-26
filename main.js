
const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?";
const API_URL_FAV = "https://api.thedogapi.com/v1/favourites&api_key=e17848ad-e0cc-4142-aa5c-abbbfae0f372";

// fetch nos devuelve una promesa, y las promesas las podemos resolver con el método THEN. 
/*
fetch(API_URL).then(res=> res.json())
.then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
})
*/

const spanError = document.getElementById("error");

async function loadRandomDogs() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();

    if (res.status !== 200) {
        spanError.innerHTML = "Ups! Error " + res.status;
    }
    else {
        // si el status code sí es exitoso
        const img = document.querySelector("img");
        img.src = data[0].url;
    }
}

loadRandomDogs()

async function loadFavDogs() {
    const res = await fetch(API_URL_FAV);
    const data = await res.json();
    console.log(data);
}

loadFavDogs()

// tenemos que enviar un message en el body, por defecto si no le envíamos método va a ser un GET
async function saveFavDogs() {
    const res = await fetch(API_URL_FAV);
    const data = await res.json();
    
}