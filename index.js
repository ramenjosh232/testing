function holaMundo(idioma = "es") {
    return new Promise((resolve, reject) => {
      
      const saludos = {
        es: "Hola Mundo",
        en: "Hello World",
        fr: "Bonjour le Monde",
        de: "Hallo Welt",
        it: "Ciao Mondo"
      };
  
     
      setTimeout(() => {
        if (saludos[idioma]) {
          resolve(saludos[idioma]); 
        } else {
          reject(new Error("Idioma no soportado")); 
        }
      }, 1000);
    });
  }
  

  holaMundo("en")
    .then((mensaje) => {
      console.log(mensaje); 
    })
    .catch((error) => {
      console.error(error.message); 
    });
  
  module.exports = holaMundo;
  