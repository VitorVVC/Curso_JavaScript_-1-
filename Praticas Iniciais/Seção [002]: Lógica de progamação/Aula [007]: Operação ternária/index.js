// ? : 
// Contexto: Se o usuario tiver mais de 1000 pontos é vip, se não é normal.

const pontuacaoUsuario = 1000;
let vip = null;

// Com IF - ELSE
if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP')
    vip = true;
} else {
    console.log('Usuario NORMAL')
    vip = false;
}

// Com operador ternário

const nivelDoUsuario = pontuacaoUsuario >= 1000 ? (console.log('Usuario VIP'), vip = true) : (console.log('Usuario NORMAL'), vip = false);