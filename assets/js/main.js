const form = document.getElementById('meuInput');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const floatPeso = parseFloat(peso.value);
    const floatAltura = parseFloat(altura.value);
    const result = floatPeso / (floatAltura * floatAltura).toFixed(2);
    const resultado = result.toFixed(2);
    if (resultado <= 18.5) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado}. Você está abaixo do peso`;
} else if (resultado >18.5 && resultado <= 24.9) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado} Seu peso está normal =)`;
} else if (resultado > 25 && resultado <= 29.9) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado}. Você está com sobrepeso`;
} else if (resultado >30 && resultado <= 34.9) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado} Você está com obesidade grau 1`;
} else if (resultado >35 && resultado <= 39.9) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado} Você está com obesidade grau 2`;
} else if (resultado >40) {
    document.getElementById('resultado').innerHTML = `O seu IMC é ${resultado} Você está com obesidade grau 3`;
}
        
});