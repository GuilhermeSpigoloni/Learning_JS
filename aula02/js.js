const valorInserido = document.getElementById('inserirvalor');
const assinaturaEscolhida = document.getElementById('assinatura');
const btnAplicarDesconto = document.getElementById('btnAplicarDesconto');

function valorTotal() {
    return parseFloat(valorInserido.value); 
}

function aplicarDesconto() {
    const valor = valorTotal(); 
    const assinatura = assinaturaEscolhida.value; 
    let valorfinal = 0;

    if (assinatura === 'SILVER') {
        valorfinal = valor - (valor * 0.05);
    } else if (assinatura === 'GOLD') {
        valorfinal = valor - (valor * 0.10);
    } else if (assinatura === 'PLATINUM') {
        valorfinal = valor - (valor * 0.15);
    } else {
        valorfinal = valor; 
    }
if (valorfinal){
    if (valorfinal > 300){    
        alert(`Valor final: R$${valorfinal.toFixed(2)}`);
        alert('Por conta do valor de sua compra ser superior a 300 reais você tem direito a um brinde!')
    }
    else{
        alert(`Valor final: R$${valorfinal.toFixed(2)}`);
    }

}
}


btnAplicarDesconto.addEventListener('click', aplicarDesconto);
