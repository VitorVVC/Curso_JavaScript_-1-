// Dados PRIMITIVOS (Imutáveis) --> String, Number, boolean, undefined e null (bitint, symbol).

// Explicacão do IMUTAVEL: Os valores primitivos quando criados não podem ser modificados, em vez disso é preciso atribuir um novo valor a variavel para "sobrepor" o anterior.
// let nome = 'Vitor';
// nome[0] = 'L';
// console.log(nome[0]);

// Explicacao da dependencia de dados primitivos: Mesmo sendo uma copia de `A` a variavel B se torna INDEPENDENTE, atribuindo na memória uma nova "caixinha" onde está apontando UNICAMENTE para B, oque quer dizer então que depois da copia ser efetuada B é independente de A
// let a = `A`;
// let b = a; // Cópia
// console.log(a,b)

// a = `Outra coisa`;
// console.log(a,b);

// Dados por REFERENCIA (Mutável) --> Array, Object e Function.
    // Array:
        // // Explicacao da NÃO dependencia de dados por referencia: Por ser uma copia e dado referencia tanto A quanto B apontam para a MESMA "caixinha" na memória.
        // let a = [1,2,3]
        // let b = a;
        // console.log(a,b);

        // a.push(4); // A e B são afetados
        // console.log(a,b);

        // b.pop(); // A e B são afetados
        // console.log(a,b); 

    // Object:
        const pessoa = {
            nome: 'Vitor',
            sobrenome: 'Vargas'
        }
        const copia = pessoa;
        // console.log(copia);
        // Mesmo que modifiquemos pessoa, será copiado também por copia
        pessoa.nome = 'Ronaldinho';
        // console.log(copia);
        // Mas e se eu não quiser este comportamento em meus dados referencia?
        const copiaIndependente = {...pessoa};
        pessoa.nome = 'Mais uma mudanca';
        console.log(pessoa);
        console.log(copia);
        console.log(copiaIndependente);
        