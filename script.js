// Função principal que gerencia o controle financeiro
function financialControl() {
    // Solicita a quantidade inicial de dinheiro
    let initialAmount = parseFloat(prompt("Digite a quantidade inicial de dinheiro:"));
    
    // Verifica se a entrada é válida
    if (isNaN(initialAmount) || initialAmount < 0) {
        alert("Quantia inicial inválida.");
        return;
    }

    // Função para exibir o menu e lidar com a entrada do usuário
    function showMenu() {
        let menuOption;
        do {
            // Exibe a quantidade atual de dinheiro e opções do menu
            menuOption = prompt(`Quantidade atual: R$${initialAmount.toFixed(2)}\n\nEscolha uma opção:\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair`);
            
            switch (menuOption) {
                case '1':
                    // Adicionar dinheiro
                    let amountToAdd = parseFloat(prompt("Digite a quantidade a ser adicionada:"));
                    if (!isNaN(amountToAdd) && amountToAdd > 0) {
                        initialAmount += amountToAdd;
                    } else {
                        alert("Quantidade inválida.");
                    }
                    break;
                
                case '2':
                    // Remover dinheiro
                    let amountToRemove = parseFloat(prompt("Digite a quantidade a ser removida:"));
                    if (!isNaN(amountToRemove) && amountToRemove > 0 && amountToRemove <= initialAmount) {
                        initialAmount -= amountToRemove;
                    } else {
                        alert("Quantidade inválida ou saldo insuficiente.");
                    }
                    break;
                
                case '3':
                    // Sair
                    alert("Saindo do programa.");
                    break;
                
                default:
                    alert("Opção inválida. Tente novamente.");
            }
        } while (menuOption !== '3');
    }

    // Chama a função para mostrar o menu
    showMenu();
}

// Chama a função principal para iniciar o programa
financialControl();
