var nome = window.prompt('Digite o seu nome: ', 'Digite aqui');

var kmEmUmAnoLuz = 9500000000000;

var anoLuz = window.prompt('Digite o valor em Ano Luz que deseja converter para Km: ', 'Digite aqui');
anoLuz = parseFloat(anoLuz);

var conversao = anoLuz * kmEmUmAnoLuz;

if (anoLuz == 1)
    alert(nome + ", "+ anoLuz + " ano luz equivale a " + conversao + " km.");

if (anoLuz < 0)
    alert('Valor inválido.');

else
    alert( nome + ", " + anoLuz + " anos luz equivale a " + conversao + " km.");