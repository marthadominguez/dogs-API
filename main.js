const API_URL = "https://api.thedogapi.com/v1/images/search";
console.log("hola!!!")

async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const img = document.querySelector("img");
    img.src = data[0].url;
}

reload();

/* NOTAS

- implementar endpoints y query parameters, este depende de la API. 

HTTP Status Codes
    1XX Respuestas Afirmativas
    2XX Respuestas satisfactorias
    3XX Re-direcciones
    4XX Error del cliente
    5XX Error de servidor

- Qué es una API KEY: Son un método de autenticación para identificar quién está haciendo la solicitud a los endpoints de una API. 

Cómo se envían las API Keys? Se pueden enviar de muchas maneras, a través del authorization header, a través de un query parameter (en la API_URL), a través de Basic Auth, Body Data, Custom Header, etc. 



*/
