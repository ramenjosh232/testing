const holaMundo = require('../index');


test('Debe retornar "Hello World" cuando el idioma es "en"', async () => {
  const result = await holaMundo('en');
  expect(result).toBe("Hello World");
});


test('Debe lanzar un error cuando el idioma no está soportado', async () => {
  await expect(holaMundo('jp')).rejects.toThrow('Idioma no soportado');
});


test('Debe retornar "Hola Mundo" por defecto cuando no se especifica idioma', async () => {
  const result = await holaMundo();
  expect(result).toBe("Hola Mundo");
});
