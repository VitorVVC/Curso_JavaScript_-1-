/*
Operadores lógicos:
    && --> AND --> E --> Todas as expressões precisam ser verdadeiras para retornar TRUE.
    || --> OR --> OU --> Se alguma das expressões for true retornará TRUE.
   -->   ! --> NOT --> NÃO --> Ele nega / inverte uma expressão.
 */
const expressaoAnd = true && true && true && true;
const expressaoOr = true || false; 
const expressaoNot = !true 
console.log(expressaoNot);