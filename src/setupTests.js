// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

describe('Prueba en el archivo demo.test.js', () => { 
    
    test('deben ser iguales los strings', () => { 
        // 1 Inicializacion 
        const mensaje = 'Hola Mundo'; 
        // 2 Realizar estimulo 
        const mensaje2 = 'Hola Mundo'; 
        // 3 Observar el comportamiento 
        expect(mensaje).toBe(mensaje2); 
    }) 

});
