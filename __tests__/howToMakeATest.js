//Guia de como escribir tests enfocado en Javascript y React Native
//**fuente: https://reactnativetesting.io/

describe("algo que describa el conjunto de tests", () => {
  //https://jestjs.io/docs/en/api#describename-fn
  //describe se utiliza para armar bloques de tests que estan relacionados entre si.
  //se pueden anidar describe dentro de otro describe

  it("nombre especifico del test", () => {
    //https://jestjs.io/docs/en/api#testname-fn-timeout
    //acá debe ir el código referente al test.
    //declarar variables necesarias para correr el codigo etc.

    expect(2 + 2).toBe(4);
    //a traves de esta sintaxis de:
    //expect(lo que se debe ejecutar).toBe(resultado esperado)
    //podes ver mas sobre expect en: https://jestjs.io/docs/en/expect
  });
});
