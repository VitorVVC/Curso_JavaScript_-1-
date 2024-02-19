// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log("Não existo, não existe,");
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new ReferenceError('X e Y precisam ser números');
//     }
//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch (e) {
//     // console.log(e);
//     console.log(`Alguma coisa mais amigável pro usuário.`)
// }

// Agora aprenderemos um pouco sobre o FINALLY

// try {
//     // É executada quando não há erros
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     // É executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia');
}