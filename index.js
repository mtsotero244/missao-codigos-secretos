let prompt = require('prompt-sync')();

// Senha de acesso ao terminal
const senhaCorreta = '1234';
let tentativas = 0;
let acessoLiberado = false;

// Validação da senha (máximo 3 tentativas)
while (tentativas < 3) {
    let senha = prompt('Digite a senha de acesso: ');
    if (senha === senhaCorreta) {
        console.log('Acesso liberado. Bem-vindo, agente!');
        acessoLiberado = true;
        break;
    } else {
        console.log('Senha incorreta. Tente novamente.');
        tentativas++;
    }
}

if (!acessoLiberado) {
    console.log('Número máximo de tentativas excedido. Acesso negado.');
    process.exit(); // Encerra o programa
}

// Função para mostrar o menu
function mostrarMenu() {
    console.log('\n=== MENU DE OPERAÇÕES ===');
    console.log('1 - Tabuada de Soma');
    console.log('2 - Tabuada de Subtração');
    console.log('3 - Tabuada de Multiplicação');
    console.log('4 - Tabuada de Divisão');
    console.log('5 - Fatorial');
    console.log('6 - Encerrar o Programa');
}

// Funções das operações com concatenação
function somar(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' + ' + i + ' = ' + (n + i));
    }
}

function subtrair(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' - ' + i + ' = ' + (n - i));
    }
}

function multiplicar(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' * ' + i + ' = ' + (n * i));
    }
}

function dividir(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' / ' + i + ' = ' + (n / i).toFixed(2));
    }
}

function fatorial(n) {
    if (n < 0) {
        console.log('Fatorial não existe para números negativos.');
        return;
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    console.log('O fatorial de ' + n + ' é igual a ' + resultado);
}

// Loop principal do menu
let continuar = true;

while (continuar) {
    mostrarMenu();
    let escolha = prompt('Escolha uma operação (1 a 6): ');

    switch (escolha) {
        case '1':
        case '2':
        case '3':
        case '4':
            let numero = parseFloat(prompt('Digite o número da tabuada: '));
            while (isNaN(numero)) {
                console.log('ERRO! Digite um número válido.');
                numero = parseFloat(prompt('Digite o número da tabuada: '));
            }
            console.log('\nExecutando tabuada com o número: ' + numero);
            if (escolha === '1') somar(numero);
            else if (escolha === '2') subtrair(numero);
            else if (escolha === '3') multiplicar(numero);
            else dividir(numero);
            break;

        case '5':
            let numFatorial = parseInt(prompt('Digite um número para calcular o fatorial: '));
            while (isNaN(numFatorial)) {
                console.log('ERRO! Digite um número válido.');
                numFatorial = parseInt(prompt('Digite um número para calcular o fatorial: '));
            }
            fatorial(numFatorial);
            break;

        case '6':
            console.log('Encerrando o sistema. Até mais, agente!');
            continuar = false;
            break;

        default:
            console.log('Opção inválida. Tente novamente.');
    }
}
